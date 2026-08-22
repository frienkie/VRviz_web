# VRViz product page

VRViz 的静态产品说明页，可直接部署到 GitHub Pages。VRViz 是在 Meta Quest 本地运行的一体机应用，不依赖 PC 连接、PC 串流或数据线；仅需通过网络访问 ROS/rosbridge 数据源。页面还涵盖手柄双模式、Audius/Spotify 在线音乐、数据流程、快速开始和三语隐私政策。

## 本地预览

无需构建。使用任意静态文件服务器打开项目根目录，例如：

```bash
npx serve .
```

也可以直接打开 `index.html`，但静态服务器更接近 GitHub Pages 的实际运行方式。

## 部署到 GitHub Pages

1. 将本目录提交并推送至 GitHub 仓库的 `main` 或 `master` 分支。
2. 进入仓库 **Settings → Pages**。
3. 将 **Build and deployment → Source** 设置为 **GitHub Actions**。
4. 推送后，`.github/workflows/pages.yml` 会自动发布网站。

网站使用相对路径，可同时适配用户主页仓库和普通项目仓库，无需设置 `basePath`。

## 内容维护

- 产品文字和页面结构：`index.html`
- 视觉样式和响应式布局：`styles.css`
- 导航与入场动画：`script.js`
- Quest 应用图标：`assets/vrviz-quest-icon.png`
- GitHub Pages 自动部署：`.github/workflows/pages.yml`

Quest Store 正式链接已接入，并会随页面语言自动切换为中文、日本、英文地区页面。隐私政策联系信息为开发者 frienkie、`frienkiely@outlook.com`、日本。

## 模板来源

页面信息架构参考了 [Start Bootstrap Landing Page](https://github.com/StartBootstrap/startbootstrap-landing-page)，该项目使用 MIT License。本站视觉与实现已针对 VRViz 重新设计，未包含 Bootstrap 运行时依赖。

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
