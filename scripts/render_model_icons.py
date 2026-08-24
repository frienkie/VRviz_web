"""Generate website icon renders from official TurtleBot3 and Touch Plus assets."""

from __future__ import annotations

import argparse
import struct
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw


def load_binary_stl(path: Path) -> np.ndarray:
    data = path.read_bytes()
    if len(data) < 84:
        raise ValueError(f"Invalid STL: {path}")
    count = struct.unpack_from("<I", data, 80)[0]
    expected = 84 + count * 50
    if expected > len(data):
        raise ValueError(f"Truncated STL: {path}")
    dtype = np.dtype(
        [
            ("normal", "<f4", (3,)),
            ("vertices", "<f4", (3, 3)),
            ("attribute", "<u2"),
        ]
    )
    records = np.frombuffer(data, dtype=dtype, count=count, offset=84)
    return records["vertices"].astype(np.float64) * 0.001


def translate(triangles: np.ndarray, xyz: tuple[float, float, float]) -> np.ndarray:
    return triangles + np.asarray(xyz, dtype=np.float64)


def camera_basis(azimuth_degrees: float, elevation_degrees: float) -> tuple[np.ndarray, ...]:
    azimuth = np.deg2rad(azimuth_degrees)
    elevation = np.deg2rad(elevation_degrees)
    camera = np.asarray(
        [
            np.cos(elevation) * np.cos(azimuth),
            np.cos(elevation) * np.sin(azimuth),
            np.sin(elevation),
        ]
    )
    world_up = np.asarray([0.0, 0.0, 1.0])
    right = np.cross(world_up, camera)
    right /= np.linalg.norm(right)
    up = np.cross(camera, right)
    up /= np.linalg.norm(up)
    return right, up, camera


def render_turtlebot(source: Path, output: Path) -> None:
    parts = [
        (translate(load_binary_stl(source / "burger_base.stl"), (-0.032, 0.0, 0.0)), (235, 239, 242)),
        (translate(load_binary_stl(source / "left_tire.stl"), (0.0, 0.080, 0.023)), (55, 62, 69)),
        (translate(load_binary_stl(source / "right_tire.stl"), (0.0, -0.080, 0.023)), (55, 62, 69)),
        (translate(load_binary_stl(source / "lds.stl"), (-0.032, 0.0, 0.172)), (69, 75, 81)),
    ]

    right, up, camera = camera_basis(38.0, 20.0)
    projected_parts: list[tuple[np.ndarray, np.ndarray, tuple[int, int, int]]] = []
    all_xy = []
    for triangles, color in parts:
        projected = np.stack(
            [triangles @ right, triangles @ up, triangles @ camera], axis=-1
        )
        projected_parts.append((triangles, projected, color))
        all_xy.append(projected[..., :2].reshape(-1, 2))

    bounds = np.concatenate(all_xy, axis=0)
    minimum = bounds.min(axis=0)
    maximum = bounds.max(axis=0)
    span = np.maximum(maximum - minimum, 1e-9)
    canvas = 960
    margin = 74
    scale = min((canvas - margin * 2) / span[0], (canvas - margin * 2) / span[1])

    faces: list[tuple[float, list[tuple[float, float]], tuple[int, int, int, int], tuple[int, int, int, int]]] = []
    light = np.asarray([0.35, -0.35, 0.87])
    light /= np.linalg.norm(light)
    for triangles, projected, base_color in projected_parts:
        normals = np.cross(triangles[:, 1] - triangles[:, 0], triangles[:, 2] - triangles[:, 0])
        lengths = np.linalg.norm(normals, axis=1)
        valid = lengths > 1e-12
        normals[valid] /= lengths[valid, None]
        illumination = 0.80 + 0.20 * np.abs(normals @ light)
        for tri_index in range(len(triangles)):
            xy = projected[tri_index, :, :2]
            points = [
                (
                    margin + (point[0] - minimum[0]) * scale,
                    canvas - margin - (point[1] - minimum[1]) * scale,
                )
                for point in xy
            ]
            shade = illumination[tri_index]
            fill = tuple(int(channel * shade) for channel in base_color) + (255,)
            outline_base = 35 if max(base_color) < 100 else 85
            outline = (outline_base, outline_base + 7, outline_base + 12, 112)
            depth = float(projected[tri_index, :, 2].mean())
            faces.append((depth, points, fill, outline))

    faces.sort(key=lambda item: item[0])
    image = Image.new("RGBA", (canvas, canvas), (255, 255, 255, 0))
    draw = ImageDraw.Draw(image, "RGBA")
    for _, points, fill, outline in faces:
        draw.polygon(points, fill=fill)
        draw.line(points + [points[0]], fill=outline, width=1, joint="curve")

    alpha_box = image.getchannel("A").getbbox()
    if alpha_box is None:
        raise RuntimeError("TurtleBot render produced no pixels")
    image = image.crop(alpha_box)
    image.thumbnail((600, 480), Image.Resampling.LANCZOS)
    framed = Image.new("RGBA", (640, 520), (255, 255, 255, 0))
    x = (framed.width - image.width) // 2
    y = (framed.height - image.height) // 2
    framed.alpha_composite(image, (x, y))
    output.parent.mkdir(parents=True, exist_ok=True)
    framed.save(output, optimize=True)


def prepare_touch_plus(source: Path, output: Path) -> None:
    image = Image.open(source).convert("RGBA")
    alpha = image.getchannel("A")
    if alpha.getextrema()[0] < 255:
        outline = Image.new("RGBA", image.size, (224, 236, 242, 0))
        outline.putalpha(alpha)
        image = outline
    else:
        for seed in (
            (0, 0),
            (image.width - 1, 0),
            (0, image.height - 1),
            (image.width - 1, image.height - 1),
        ):
            ImageDraw.floodfill(image, seed, (255, 255, 255, 0), thresh=18)
        ImageDraw.floodfill(
            image,
            (image.width // 2, image.height // 2),
            (255, 255, 255, 0),
            thresh=18,
        )
    alpha_box = image.getchannel("A").getbbox()
    if alpha_box is None:
        raise RuntimeError("Touch Plus art has no alpha content")
    image = image.crop(alpha_box)
    image.thumbnail((760, 480), Image.Resampling.LANCZOS)
    framed = Image.new("RGBA", (780, 500), (255, 255, 255, 0))
    x = (framed.width - image.width) // 2
    y = (framed.height - image.height) // 2
    framed.alpha_composite(image, (x, y))
    output.parent.mkdir(parents=True, exist_ok=True)
    framed.save(output, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--turtlebot-source", type=Path, required=True)
    parser.add_argument("--touch-plus-source", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    render_turtlebot(args.turtlebot_source, args.output / "turtlebot3-burger-model-outline.png")
    prepare_touch_plus(args.touch_plus_source, args.output / "quest3-touch-plus-model-outline.png")


if __name__ == "__main__":
    main()
