const translations = {
  zh: {
    locale: "zh-CN", title: "VRViz — Meta Quest 一体机 ROS 可视化", description: "VRViz 是原生运行于 Meta Quest 的一体机 ROS 可视化应用，无需 PC 连接、串流或数据线。",
    privacyNav: "隐私政策", privacyIndex: "05 / 隐私政策", privacyTitle: "你的数据，留在你的控制之下", privacyLead: "VRViz 以 Quest 端本地处理为核心。以下内容适用于当前版本；如功能或数据处理方式发生变化，本政策将同步更新。", privacyEffective: "生效日期", privacyApplies: "适用范围", privacyLocalTitle: "本地数据处理", privacyLocalText: "机器人可视化、手柄输入和场景移动主要在 Quest 设备本地处理。使用 VRViz 无需创建用户账户。", privacyRosTitle: "ROS 网络数据", privacyRosText: "应用仅连接用户主动配置的 rosbridge WebSocket 地址。ROS 话题数据会通过用户指定的网络传输；网络安全、访问控制和 rosbridge 配置由用户负责。", privacyStorageTitle: "设备存储", privacyStorageText: "语言偏好、连接参数和应用设置可能保存在 Quest 本地，以便恢复用户配置。卸载应用或清除应用数据即可移除这些信息。", privacyThirdTitle: "第三方音乐服务", privacyThirdText: "Audius 和 Spotify 的内容、账户及网络请求受各自的隐私政策约束。Spotify 功能会调用 Quest 上已安装的 Spotify 应用；VRViz 不会保存 Spotify 登录凭据。", privacyPermissionTitle: "设备权限", privacyPermissionText: "VRViz 仅请求 VR 交互、手柄操作、网络通信和音频播放所必需的设备权限。你可以在 Quest 系统设置中查看或撤销这些权限。", privacyRetentionTitle: "收集与保留", privacyRetentionText: "当前版本不包含用户账户、广告或分析功能。若未来加入遥测、云服务或崩溃报告，本政策会在启用前更新，并说明数据用途和保留期限。", privacyContactLabel: "隐私咨询", privacyContactText: "如对本隐私政策或 VRViz 的数据处理方式有疑问，请通过以下邮箱联系开发者。", developerLabel: "开发者", emailLabel: "联系邮箱", regionLabel: "所在地区", regionValue: "日本",
    skip: "跳到主要内容", menu: "打开导航", navFeatures: "核心能力", navWorkflow: "工作方式", navStart: "快速开始", navDownload: "获取应用",
    heroEyebrow: "META QUEST 原生一体机应用 · ROS · UNITY", questBadge: "Meta Quest 原生一体机应用", heroTitle: "让机器人数据<br /><em>进入空间</em>", heroLead: "VRViz 是专为 Meta Quest 打造、可独立运行的 ROS 三维可视化应用。无需连接 PC 或串流，即可在同一个交互空间中查看激光雷达、点云和机器人状态。", heroCta: "获取 Quest 应用", heroExplore: "探索功能", standaloneNote: "完全在 Quest 本地运行，无需连接 PC、串流或使用数据线", factPlatform: "平台", factConnection: "数据连接", factEngine: "运行模式", heroFoot: "从消息流到空间认知",
    aboutIndex: "01 / 关于", aboutTitle: "不只是查看数据，<br />更要理解现场。", aboutP1: "传统可视化将复杂的机器人环境压缩在一块屏幕上。VRViz 在三维空间中保留尺度、方向和层次，让传感器数据与机器人本体之间的空间关系一目了然。", aboutP2: "VRViz 原生运行于 Meta Quest，无需连接 PC，也无需 PC 串流或数据线。应用通过无线网络连接可访问的 rosbridge，并直接在 Quest 上订阅和呈现 ROS 数据。",
    featuresIndex: "02 / 核心功能", featuresTitle: "关键数据，清晰呈现", featuresLead: "专为 Quest 上的机器人空间感知与调试流程设计，让连接、渲染和交互保持轻量而直观。", feature1Title: "高密度点云", feature1Text: "呈现 ROS PointCloud2 数据，保留环境结构和深度关系，从空间视角观察感知结果。", feature2Title: "激光扫描", feature2Text: "实时显示 LaserScan 数据，快速识别环境轮廓、障碍物和雷达覆盖范围。", feature3Title: "按需订阅", feature3Text: "按话题控制订阅和显示，聚焦当前任务，减少无关数据的干扰。", feature4Title: "空间坐标", feature4Text: "在统一的三维场景中组织机器人和传感器信息，建立直观的空间参照。", feature5Title: "在线音乐播放", feature5Text: "在 VRViz 中播放 Audius 或 Spotify 在线音乐，让音乐陪伴整个沉浸式机器人数据体验。", requirementLabel: "使用条件", feature5Note: "使用 Spotify 前，需要先在 Meta Quest 上安装 Spotify 应用；Audius 无需配套应用即可播放。", feature6Title: "手柄双模式控制", feature6Text: "使用 Quest 手柄在机器人遥控模式与用户移动模式之间切换，在同一个沉浸式界面中完成操作和观察。", robotModeTitle: "机器人遥控", robotModeText: "通过手柄控制机器人移动，并向 ROS 发布 /cmd_vel 速度指令。", humanModeTitle: "用户移动", humanModeText: "使用手柄控制视点在 VR 场景中移动。", feature7Title: "摄像头图像", feature7Text: "在 VR 场景中查看机器人摄像头图像，与点云、激光扫描等空间数据配合观察。", feature8Title: "导入机器人 STL 模型", feature8Text: "导入机器人的 STL 模型并放入三维场景，让传感器数据与机器人外形保持直观的空间对应。",
    workflowIndex: "03 / 工作方式", workflowTitle: "三步进入机器人的工作空间", workflowLead: "佩戴 Quest 后，仍可沿用现有 ROS 工作流；VRViz 在数据与观察者之间增加一层沉浸式可视化。", step1Title: "连接 ROS", step1Text: "输入 rosbridge WebSocket 地址，连接正在运行的 ROS 系统。", step2Title: "选择话题", step2Text: "配置 PointCloud2、LaserScan 等话题，并启用当前任务所需的数据。", step3Title: "进入空间", step3Text: "佩戴 Quest，在 Unity 构建的三维场景中观察数据流，检查感知结果与环境之间的关系。",
    startIndex: "04 / 快速开始", startTitle: "准备好 Quest<br />与 ROS 数据流", startLead: "满足以下三个条件，即可通过 Quest 上的 VRViz 查看机器人数据。", check1Title: "运行 ROS 环境", check1Text: "确认需要查看的传感器话题正在发布。", check2Title: "启动 rosbridge", check2Text: "确保 Quest 上的 VRViz 可以访问 rosbridge WebSocket 地址。", check3Title: "安装并配置 VRViz", check3Text: "在 Quest 中输入连接地址和话题名称，然后启用相应的显示功能。",
    downloadLabel: "Meta Quest 官方商店", downloadTitle: "获取 VRViz for Quest", downloadText: "Quest Store 会根据当前页面语言打开对应的地区页面。", questLink: "在 Quest Store 查看", note: "支持的话题类型、Quest 型号和启动参数可能因 VRViz 构建版本而异。", closingTitle: "看见数据。<br /><em>理解空间。</em>", backTop: "返回顶部", footerText: "原生运行于 Meta Quest 的一体机应用，无需连接 PC 或串流。", creditPrefix: "页面结构参考",
  },
  ja: {
    locale: "ja-JP", title: "VRViz — Meta QuestスタンドアロンROSビジュアライザー", description: "VRVizはMeta Questでネイティブ動作するスタンドアロンROS可視化アプリです。PC接続やストリーミングは不要です。",
    privacyNav: "プライバシーポリシー", privacyIndex: "05 / プライバシー", privacyTitle: "あなたのデータを、あなたの管理下に", privacyLead: "VRVizはQuest上でのローカル処理を基本としています。本方針は現行バージョンに適用され、機能やデータの取扱いに変更がある場合は随時更新されます。", privacyEffective: "発効日", privacyApplies: "対象", privacyLocalTitle: "ローカルデータ処理", privacyLocalText: "ロボットの可視化、コントローラー入力、シーン内の移動は主にQuest本体で処理されます。VRVizの利用にユーザーアカウントは必要ありません。", privacyRosTitle: "ROSネットワークデータ", privacyRosText: "アプリは、ユーザーが設定したrosbridge WebSocketアドレスにのみ接続します。ROSトピックデータは指定されたネットワークを経由するため、ネットワークのセキュリティ、アクセス制御、rosbridgeの設定はユーザーの責任で管理してください。", privacyStorageTitle: "端末内ストレージ", privacyStorageText: "言語、接続情報、アプリ設定は、設定を復元するためQuest本体に保存される場合があります。これらの情報は、アプリのアンインストールまたはアプリデータの消去によって削除できます。", privacyThirdTitle: "外部音楽サービス", privacyThirdText: "AudiusとSpotifyのコンテンツ、アカウント、通信には、それぞれのプライバシーポリシーが適用されます。Spotify機能はQuestにインストール済みのSpotifyアプリを使用し、VRVizがSpotifyのログイン情報を保存することはありません。", privacyPermissionTitle: "端末の権限", privacyPermissionText: "VRVizが要求するのは、VR操作、コントローラー入力、ネットワーク通信、音声再生に必要な権限のみです。権限はQuestのシステム設定で確認または取り消すことができます。", privacyRetentionTitle: "収集と保持", privacyRetentionText: "現行バージョンにユーザーアカウント、広告、解析機能は含まれていません。今後テレメトリー、クラウドサービス、クラッシュ報告を追加する場合は、有効化前に目的と保持期間を本方針へ追記します。", privacyContactLabel: "プライバシー窓口", privacyContactText: "本ポリシーまたはVRVizのデータ処理についてご不明な点がある場合は、以下のメールアドレスから開発者へお問い合わせください。", developerLabel: "開発者", emailLabel: "連絡先メール", regionLabel: "所在地域", regionValue: "日本",
    skip: "メインコンテンツへ移動", menu: "ナビゲーションを開く", navFeatures: "主な機能", navWorkflow: "仕組み", navStart: "クイックスタート", navDownload: "アプリを入手",
    heroEyebrow: "META QUEST スタンドアロンアプリ · ROS · UNITY", questBadge: "Meta Quest ネイティブのスタンドアロンアプリ", heroTitle: "ロボットデータを<br /><em>空間の中へ</em>", heroLead: "VRVizはMeta Quest向けにネイティブ開発された、単体動作のROS 3D可視化アプリです。PC接続やストリーミングなしで、LiDAR、点群、ロボットの状態を一つのインタラクティブな空間で確認できます。", heroCta: "Questアプリを入手", heroExplore: "機能を見る", standaloneNote: "Quest本体だけで動作し、PC接続、ストリーミング、データケーブルは不要です", factPlatform: "プラットフォーム", factConnection: "データ接続", factEngine: "実行モード", heroFoot: "メッセージストリームから空間認識へ",
    aboutIndex: "01 / 概要", aboutTitle: "データを見るだけでなく、<br />現場を理解する。", aboutP1: "従来の可視化は複雑なロボット環境を一枚の画面に圧縮します。VRVizはスケール、方向、奥行きを3D空間に保ち、センサーデータとロボット本体の関係を直感的に示します。", aboutP2: "VRVizはMeta Quest上でネイティブ動作するスタンドアロンVRアプリです。PC接続、PCストリーミング、データケーブルは不要です。無線ネットワーク経由でアクセス可能なrosbridgeへ接続し、ROSデータをQuest本体で購読・描画します。",
    featuresIndex: "02 / 主な機能", featuresTitle: "重要なデータを、明確に", featuresLead: "Quest上でのロボットの空間認識とデバッグに合わせ、接続、描画、操作を軽快で直感的に設計しています。", feature1Title: "高密度点群", feature1Text: "ROS PointCloud2データを描画し、環境の構造と奥行きを保ったまま知覚結果を空間的に確認できます。", feature2Title: "レーザースキャン", feature2Text: "LaserScanデータをリアルタイム表示し、輪郭、障害物、LiDARの測定範囲をすばやく把握できます。", feature3Title: "オンデマンド購読", feature3Text: "トピックごとに購読と表示を切り替え、現在の作業に集中して不要なデータを減らします。", feature4Title: "空間座標", feature4Text: "ロボットとセンサー情報を共通の3Dシーンに配置し、直感的な空間基準を提供します。", feature5Title: "オンライン音楽再生", feature5Text: "VRViz内でAudiusまたはSpotifyのオンライン音楽を再生し、ロボットデータを確認しながら音楽を楽しめます。", requirementLabel: "利用条件", feature5Note: "Spotifyを利用するには、Meta QuestにSpotifyアプリを事前にインストールする必要があります。Audiusは追加アプリなしで再生できます。", feature6Title: "コントローラーの2モード", feature6Text: "Questコントローラーでロボットの遠隔操作とプレイヤー移動を切り替え、操作と観察を一つの没入型インターフェースで行えます。", robotModeTitle: "ロボット遠隔操作", robotModeText: "コントローラーでロボットを移動させ、ROSへ /cmd_vel 速度指令を出力します。", humanModeTitle: "プレイヤー移動", humanModeText: "コントローラーを使ってVRシーン内を移動し、視点を調整します。", feature7Title: "カメラ画像", feature7Text: "ロボットのカメラ画像をVRシーン内で表示し、点群やレーザースキャンなどの空間データと合わせて確認できます。", feature8Title: "ロボットのSTLモデルをインポート", feature8Text: "ロボットのSTLモデルを読み込んで3Dシーンに配置し、センサーデータと機体形状の空間的な対応を直感的に確認できます。",
    workflowIndex: "03 / 仕組み", workflowTitle: "3ステップでロボットの作業空間へ", workflowLead: "Questを装着したまま、既存のROSワークフローを利用できます。VRVizは、データと観察者の間に没入型の可視化レイヤーを加えます。", step1Title: "ROSに接続", step1Text: "rosbridgeのWebSocketアドレスを入力し、稼働中のROSシステムへ接続します。", step2Title: "トピックを選択", step2Text: "PointCloud2やLaserScanなどのトピックを設定し、作業に必要なデータだけを有効にします。", step3Title: "空間へ入る", step3Text: "Questを装着し、Unityで構築された3Dシーンでデータストリームと環境の関係を確認します。",
    startIndex: "04 / クイックスタート", startTitle: "Questと<br />ROSデータを準備", startLead: "3つの基本条件を整えると、Quest上のVRVizでロボットデータを表示できます。", check1Title: "ROS環境を起動", check1Text: "表示したいセンサートピックが配信されていることを確認します。", check2Title: "rosbridgeを起動", check2Text: "Quest上のVRVizからアクセスできるWebSocketアドレスを公開します。", check3Title: "VRVizを導入・設定", check3Text: "Questで接続先とトピック名を入力し、必要な表示を有効にします。",
    downloadLabel: "META QUEST公式ストア", downloadTitle: "VRViz for Questを入手", downloadText: "選択中の言語に対応するQuest Storeの地域ページが開きます。", questLink: "Quest Storeで見る", note: "対応するトピック形式、Quest機種、起動パラメーターは、VRVizのビルドによって異なる場合があります。", closingTitle: "データを見る。<br /><em>空間を理解する。</em>", backTop: "トップへ戻る", footerText: "Meta Questでネイティブ動作。PC接続やストリーミング不要のスタンドアロンアプリ。", creditPrefix: "ページ構成の参考",
  },
  en: {
    locale: "en", title: "VRViz — Standalone ROS visualization for Meta Quest", description: "VRViz is a native standalone ROS visualization app for Meta Quest—no PC connection, streaming, or data cable required.",
    privacyNav: "Privacy policy", privacyIndex: "05 / PRIVACY", privacyTitle: "Your data stays under your control", privacyLead: "VRViz is designed around local processing on Quest. This policy applies to the current version and will be updated whenever features or data practices change.", privacyEffective: "Effective date", privacyApplies: "Applies to", privacyLocalTitle: "Local data processing", privacyLocalText: "Robot visualization, controller input, and scene locomotion are processed primarily on the Quest device. No user account is required to use VRViz.", privacyRosTitle: "ROS network data", privacyRosText: "The app connects only to the rosbridge WebSocket address configured by the user. ROS topic data travels over the selected network; users are responsible for network security, access control, and rosbridge configuration.", privacyStorageTitle: "Device storage", privacyStorageText: "Language preferences, connection details, and app settings may be stored locally on Quest so the app can restore your configuration. Uninstalling the app or clearing its data removes this information.", privacyThirdTitle: "Third-party music services", privacyThirdText: "Audius and Spotify content, accounts, and network requests are governed by their respective privacy policies. Spotify playback uses the Spotify app installed on Quest; VRViz does not store Spotify login credentials.", privacyPermissionTitle: "Device permissions", privacyPermissionText: "VRViz requests only the permissions required for VR interaction, controller input, network communication, and audio playback. You can review or revoke these permissions in Quest system settings.", privacyRetentionTitle: "Collection and retention", privacyRetentionText: "The current version includes no user accounts, advertising, or analytics. If telemetry, cloud services, or crash reporting are added in the future, this policy will be updated before activation to explain their purpose and retention periods.", privacyContactLabel: "Privacy contact", privacyContactText: "For questions about this policy or how VRViz handles data, contact the developer using the email below.", developerLabel: "Developer", emailLabel: "Contact email", regionLabel: "Region", regionValue: "Japan",
    skip: "Skip to main content", menu: "Open navigation", navFeatures: "Features", navWorkflow: "How it works", navStart: "Quick start", navDownload: "Get the app",
    heroEyebrow: "META QUEST STANDALONE APP · ROS · UNITY", questBadge: "Native standalone app for Meta Quest", heroTitle: "Bring robot data<br /><em>into the room</em>", heroLead: "VRViz is a standalone ROS 3D visualization app built natively for Meta Quest. Explore LiDAR, point clouds, and robot state in one interactive space—without a PC connection or streaming.", heroCta: "Get the Quest app", heroExplore: "Explore features", standaloneNote: "Runs entirely on Quest—no PC connection, streaming, or data cable required", factPlatform: "Platform", factConnection: "Data connection", factEngine: "Runtime mode", heroFoot: "From message streams to spatial awareness",
    aboutIndex: "01 / ABOUT", aboutTitle: "More than viewing data.<br />Understand the scene.", aboutP1: "Conventional visualization compresses a complex robot environment onto a flat display. VRViz preserves scale, direction, and depth in 3D, keeping sensor data and the robot in an intuitive spatial relationship.", aboutP2: "VRViz runs natively as a standalone Meta Quest app—no PC tether, PC streaming, or data cable required. It reaches an accessible rosbridge over the wireless network and subscribes to and renders ROS data locally on Quest.",
    featuresIndex: "02 / FEATURES", featuresTitle: "Critical data, clearly presented", featuresLead: "Built for spatial perception and robot debugging on Quest, with lightweight, intuitive connection, rendering, and interaction.", feature1Title: "Dense point clouds", feature1Text: "Render ROS PointCloud2 data while preserving environmental structure and depth, so perception results can be inspected spatially.", feature2Title: "Laser scans", feature2Text: "Display LaserScan data in real time to identify outlines, obstacles, and LiDAR coverage at a glance.", feature3Title: "On-demand topics", feature3Text: "Toggle subscriptions and displays by topic to focus on the current task and reduce irrelevant data.", feature4Title: "Spatial frames", feature4Text: "Organize robot and sensor information in one 3D scene with a clear, intuitive spatial reference.", feature5Title: "Online music playback", feature5Text: "Play online music from Audius or Spotify inside VRViz while exploring your robotics data in VR.", requirementLabel: "REQUIREMENT", feature5Note: "Spotify playback requires the Spotify app to be installed on Meta Quest. Audius playback works without a companion app.", feature6Title: "Dual controller modes", feature6Text: "Switch the Quest controllers between robot teleoperation and player locomotion, keeping control and observation in one immersive interface.", robotModeTitle: "Robot teleoperation", robotModeText: "Drive the robot with the controllers and publish /cmd_vel velocity commands to ROS.", humanModeTitle: "Player locomotion", humanModeText: "Move through the VR scene and adjust your viewpoint with the Quest controllers.", feature7Title: "Camera images", feature7Text: "View the robot's camera images inside the VR scene alongside point clouds, laser scans, and other spatial data.", feature8Title: "Import robot STL models", feature8Text: "Import the robot's STL model into the 3D scene to keep sensor data and the robot's physical shape in a clear spatial relationship.",
    workflowIndex: "03 / WORKFLOW", workflowTitle: "Step into the robot's workspace", workflowLead: "Keep your existing ROS workflow while wearing Quest. VRViz adds an immersive visualization layer between the data and the observer.", step1Title: "Connect to ROS", step1Text: "Enter the rosbridge WebSocket address to connect to a running ROS system.", step2Title: "Choose topics", step2Text: "Configure PointCloud2, LaserScan, and other topics, then enable only the data needed for the task.", step3Title: "Enter the space", step3Text: "Put on Quest and inspect data streams inside a Unity 3D scene, checking the relationship between perception and the environment.",
    startIndex: "04 / QUICK START", startTitle: "Prepare Quest<br />and your ROS stream", startLead: "Meet three basic requirements to start viewing robot data with VRViz on Quest.", check1Title: "Run your ROS environment", check1Text: "Make sure the sensor topics you want to inspect are being published.", check2Title: "Start rosbridge", check2Text: "Expose a WebSocket address that VRViz on Quest can reach.", check3Title: "Install and configure VRViz", check3Text: "On Quest, enter the connection address and topic names, then enable the corresponding displays.",
    downloadLabel: "META QUEST STORE", downloadTitle: "Get VRViz for Quest", downloadText: "The Quest Store opens the regional page that matches the current site language.", questLink: "View in Quest Store", note: "Supported topic types, Quest models, and launch parameters may vary by VRViz build.", closingTitle: "See the data.<br /><em>Understand the space.</em>", backTop: "Back to top", footerText: "Native on Meta Quest—a standalone app with no PC connection or streaming required.", creditPrefix: "Page structure inspired by",
  },
};

const storeLinks = {
  zh: "https://www.meta.com/zh-cn/experiences/vrviz/2161760508085814/",
  ja: "https://www.meta.com/ja-jp/experiences/vrviz/2161760508085814/",
  en: "https://www.meta.com/en-us/experiences/vrviz/2161760508085814/",
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const languageButtons = document.querySelectorAll("[data-lang]");

function setLanguage(language, persist = true) {
  const selected = translations[language] ?? translations.zh;
  document.documentElement.lang = selected.locale;
  document.title = selected.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", selected.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", selected.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", selected.description);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = selected[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = selected[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  document.querySelectorAll("[data-store-link]").forEach((link) => {
    link.href = storeLinks[language] ?? storeLinks.en;
  });
  if (persist) {
    try { localStorage.setItem("vrviz-language", language); } catch { /* Storage may be disabled. */ }
  }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem("vrviz-language");
    if (saved && translations[saved]) return saved;
  } catch { /* Continue with browser language. */ }
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ja")) return "ja";
  if (browserLanguage.startsWith("en")) return "en";
  return "zh";
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(getInitialLanguage(), false);

const syncHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
