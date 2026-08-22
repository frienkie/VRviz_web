const translations = {
  zh: {
    locale: "zh-CN", title: "VRViz — Meta Quest 一体机 ROS 可视化", description: "VRViz 是原生运行于 Meta Quest 的一体机 ROS 可视化应用，无需 PC 连接、串流或数据线。",
    privacyNav: "隐私政策", privacyIndex: "05 / 隐私政策", privacyTitle: "你的数据，留在你的控制之下", privacyLead: "VRViz 以 Quest 本地处理为核心。以下说明适用于当前版本，并应在正式发布前根据实际构建与发行地区复核。", privacyEffective: "生效日期", privacyApplies: "适用范围", privacyLocalTitle: "本地数据处理", privacyLocalText: "机器人可视化、手柄输入和场景移动主要在 Quest 设备本地处理。VRViz 当前不要求创建用户账户。", privacyRosTitle: "ROS 网络数据", privacyRosText: "应用仅连接用户主动配置的 rosbridge WebSocket 地址。ROS 话题内容会在用户指定的网络中传输，请由用户负责网络、访问控制和 rosbridge 安全。", privacyStorageTitle: "设备存储", privacyStorageText: "语言偏好、连接参数或应用设置可能保存在 Quest 本地，用于恢复用户配置。卸载应用或清除应用数据可移除这些本地信息。", privacyThirdTitle: "第三方音乐服务", privacyThirdText: "Audius 和 Spotify 的内容、账户与网络请求受各自隐私政策约束。Spotify 功能通过 Quest 上预先安装的 Spotify 应用提供，VRViz 不保存 Spotify 登录凭据。", privacyPermissionTitle: "设备权限", privacyPermissionText: "VRViz 仅应请求实现 VR 交互、手柄操作、网络通信和音频播放所需的设备权限。权限可在 Quest 系统设置中查看或撤销。", privacyRetentionTitle: "收集与保留", privacyRetentionText: "当前说明页未集成账号系统、广告或网站分析。若未来版本加入遥测、云服务或崩溃报告，本政策将在启用前更新并说明数据用途与保留期限。", privacyContactLabel: "隐私咨询", privacyContactText: "如对本隐私政策或 VRViz 的数据处理方式有疑问，请通过以下邮箱联系开发者。", developerLabel: "开发者", emailLabel: "联系邮箱", regionLabel: "所在地区", regionValue: "日本",
    skip: "跳到主要内容", menu: "打开导航", navFeatures: "核心能力", navWorkflow: "工作方式", navStart: "快速开始", navDownload: "获取应用",
    heroEyebrow: "META QUEST 一体机应用 · ROS · UNITY", questBadge: "Quest 一体机原生应用", heroTitle: "让机器人数据<br /><em>进入空间</em>", heroLead: "VRViz 是原生运行于 Meta Quest、面向 ROS 的一体机三维可视化应用。把激光雷达、点云与机器人状态放进同一个可交互空间，无需 PC 串流即可进入机器人现场。", heroCta: "获取 Quest 应用", heroExplore: "探索能力", standaloneNote: "在 Quest 本地独立运行，无需连接 PC、串流或使用数据线", factPlatform: "平台", factConnection: "数据连接", factEngine: "运行方式", heroFoot: "从消息流到空间认知",
    aboutIndex: "01 / 关于", aboutTitle: "不只是查看数据，<br />而是理解现场。", aboutP1: "传统可视化把复杂的机器人环境压缩进一块屏幕。VRViz 使用三维空间保留尺度、方位与层次，让传感器数据和机器人本体保持直观的空间关系。", aboutP2: "VRViz 是原生运行于 Meta Quest 的一体机 VR 应用，无需连接 PC、PC 串流或数据线。应用通过无线网络连接可访问的 rosbridge，在 Quest 本地按需订阅并呈现 ROS 数据。",
    featuresIndex: "02 / 核心能力", featuresTitle: "关键数据，清晰呈现", featuresLead: "围绕 Quest 上的机器人空间感知与调试工作流设计，保持连接、渲染与交互的轻量和直接。", feature1Title: "高密度点云", feature1Text: "呈现 ROS PointCloud2 数据，保留环境结构与深度关系，用空间视角观察感知结果。", feature2Title: "激光扫描", feature2Text: "实时显示 LaserScan 数据，快速识别轮廓、障碍物与雷达覆盖范围。", feature3Title: "按需订阅", feature3Text: "通过话题开关控制订阅和显示，聚焦当前任务，减少无关数据干扰。", feature4Title: "空间坐标", feature4Text: "在统一三维场景中组织机器人与传感器信息，建立直观的空间参照。", feature5Title: "在线音乐播放", feature5Text: "在 VRViz 中播放 Audius 或 Spotify 在线音乐，在机器人数据空间中保持连续的沉浸体验。", requirementLabel: "使用条件", feature5Note: "Spotify 播放需要先在 Meta Quest 中安装 Spotify 应用；Audius 可直接使用。", feature6Title: "手柄双模式控制", feature6Text: "使用 Quest 手柄在机器人遥控与人员移动之间切换，让操作与观察保持在同一个沉浸式界面中。", robotModeTitle: "机器人遥控", robotModeText: "通过手柄控制机器人移动，并向 ROS 输出 /cmd_vel 速度指令。", humanModeTitle: "人员移动", humanModeText: "使用手柄控制用户在 VR 场景中的移动与观察位置。",
    workflowIndex: "03 / 工作方式", workflowTitle: "三步进入机器人现场", workflowLead: "戴上 Quest，VRViz 保持现有 ROS 工作流，只在数据与观察者之间增加沉浸式可视化层。", step1Title: "连接 ROS", step1Text: "填写 rosbridge WebSocket 地址，与正在运行的 ROS 系统建立通信。", step2Title: "选择话题", step2Text: "配置 PointCloud2、LaserScan 等话题，并按当前任务启用所需数据。", step3Title: "进入空间", step3Text: "佩戴 Quest，在 Unity 构建的三维场景中观察数据流，检查感知与环境之间的关系。",
    startIndex: "04 / 快速开始", startTitle: "准备好 Quest<br />与 ROS 数据流", startLead: "完成三个基础条件，即可在 Quest 的 VRViz 中开始查看机器人数据。", check1Title: "运行 ROS 环境", check1Text: "确保需要查看的传感器话题正在发布。", check2Title: "启动 rosbridge", check2Text: "开放 Quest 上的 VRViz 可访问的 WebSocket 地址。", check3Title: "安装并配置 VRViz", check3Text: "在 Quest 中输入连接地址与话题名称，然后启用对应显示。",
    downloadLabel: "正式商店链接", downloadTitle: "获取 VRViz for Quest", downloadText: "Quest Store 链接会随页面语言自动打开对应地区版本。", questLink: "Quest Store", note: "具体支持的话题类型、Quest 型号与启动参数取决于当前 VRViz 构建版本。", closingTitle: "看见数据。<br /><em>理解空间。</em>", backTop: "返回顶部", footerText: "原生运行于 Meta Quest 的一体机应用，无需 PC 连接或串流。", creditPrefix: "页面结构参考",
  },
  ja: {
    locale: "ja-JP", title: "VRViz — Meta QuestスタンドアロンROSビジュアライザー", description: "VRVizはMeta Questでネイティブ動作するスタンドアロンROS可視化アプリです。PC接続やストリーミングは不要です。",
    privacyNav: "プライバシーポリシー", privacyIndex: "05 / プライバシー", privacyTitle: "あなたのデータを、あなたの管理下に", privacyLead: "VRVizはQuest上でのローカル処理を基本とします。以下は現行版に適用され、正式公開前に実際のビルドと配信地域に合わせた確認が必要です。", privacyEffective: "発効日", privacyApplies: "対象", privacyLocalTitle: "ローカルデータ処理", privacyLocalText: "ロボット可視化、コントローラー入力、シーン移動は主にQuest本体で処理されます。現行のVRVizはユーザーアカウントを必要としません。", privacyRosTitle: "ROSネットワークデータ", privacyRosText: "アプリはユーザーが設定したrosbridge WebSocketアドレスにのみ接続します。ROSトピックは指定ネットワーク内を流れるため、ネットワーク、アクセス制御、rosbridgeの安全管理はユーザーの責任となります。", privacyStorageTitle: "端末内ストレージ", privacyStorageText: "言語設定、接続パラメーター、アプリ設定は復元のためQuest本体に保存される場合があります。アンインストールまたはアプリデータの消去で削除できます。", privacyThirdTitle: "外部音楽サービス", privacyThirdText: "AudiusとSpotifyのコンテンツ、アカウント、通信には各社のプライバシーポリシーが適用されます。Spotify機能はQuestに事前導入したSpotifyアプリを使用し、VRVizはSpotifyのログイン情報を保存しません。", privacyPermissionTitle: "端末の権限", privacyPermissionText: "VRVizはVR操作、コントローラー、ネットワーク通信、音声再生に必要な権限のみを要求する設計です。権限はQuestのシステム設定で確認・取消できます。", privacyRetentionTitle: "収集と保持", privacyRetentionText: "現行サイトにはアカウント、広告、Web解析は組み込まれていません。今後テレメトリー、クラウド、クラッシュ報告を追加する場合は、有効化前に目的と保持期間を本方針へ追記します。", privacyContactLabel: "プライバシー窓口", privacyContactText: "本ポリシーまたはVRVizのデータ処理については、以下のメールアドレスから開発者へお問い合わせください。", developerLabel: "開発者", emailLabel: "連絡先メール", regionLabel: "所在地域", regionValue: "日本",
    skip: "メインコンテンツへ移動", menu: "ナビゲーションを開く", navFeatures: "主な機能", navWorkflow: "仕組み", navStart: "クイックスタート", navDownload: "アプリを入手",
    heroEyebrow: "META QUEST スタンドアロンアプリ · ROS · UNITY", questBadge: "Questネイティブ・スタンドアロン", heroTitle: "ロボットデータを<br /><em>空間の中へ</em>", heroLead: "VRVizはMeta Quest上でネイティブ動作するROS向けスタンドアロン3D可視化アプリです。PCストリーミングなしでLiDAR、点群、ロボット状態の空間へ入れます。", heroCta: "Questアプリを入手", heroExplore: "機能を見る", standaloneNote: "Quest本体で独立動作。PC接続、ストリーミング、ケーブルは不要です", factPlatform: "プラットフォーム", factConnection: "データ接続", factEngine: "動作方式", heroFoot: "メッセージストリームから空間認識へ",
    aboutIndex: "01 / 概要", aboutTitle: "データを見るだけでなく、<br />現場を理解する。", aboutP1: "従来の可視化は複雑なロボット環境を一枚の画面に圧縮します。VRVizはスケール、方向、奥行きを3D空間に保ち、センサーデータとロボット本体の関係を直感的に示します。", aboutP2: "VRVizはMeta Quest上でネイティブ動作するスタンドアロンVRアプリです。PC接続、PCストリーミング、データケーブルは不要です。無線ネットワーク経由でアクセス可能なrosbridgeへ接続し、ROSデータをQuest本体で購読・描画します。",
    featuresIndex: "02 / 主な機能", featuresTitle: "重要なデータを、明確に", featuresLead: "Quest上でのロボット空間認識とデバッグを中心に、接続、描画、操作を軽快かつ直接的に設計しています。", feature1Title: "高密度点群", feature1Text: "ROS PointCloud2データを描画し、環境の構造と奥行きを保ったまま知覚結果を空間的に確認できます。", feature2Title: "レーザースキャン", feature2Text: "LaserScanデータをリアルタイム表示し、輪郭、障害物、LiDARの測定範囲をすばやく把握できます。", feature3Title: "オンデマンド購読", feature3Text: "トピックごとに購読と表示を切り替え、現在の作業に集中して不要なデータを減らします。", feature4Title: "空間座標", feature4Text: "ロボットとセンサー情報を共通の3Dシーンに配置し、直感的な空間基準を提供します。", feature5Title: "オンライン音楽再生", feature5Text: "VRViz内でAudiusまたはSpotifyのオンライン音楽を再生し、ロボットデータ空間で途切れない没入体験を楽しめます。", requirementLabel: "利用条件", feature5Note: "Spotifyを再生するには、Meta QuestにSpotifyアプリを事前にインストールする必要があります。Audiusはそのまま利用できます。", feature6Title: "コントローラー2モード", feature6Text: "Questコントローラーでロボット遠隔操作とユーザー移動を切り替え、操作と観察を一つの没入型インターフェースで行えます。", robotModeTitle: "ロボット遠隔操作", robotModeText: "コントローラーでロボットを移動させ、ROSへ /cmd_vel 速度指令を出力します。", humanModeTitle: "ユーザー移動", humanModeText: "コントローラーでVRシーン内のユーザー位置と視点を移動します。",
    workflowIndex: "03 / 仕組み", workflowTitle: "3ステップでロボットの現場へ", workflowLead: "Questを装着しても既存のROSワークフローはそのまま。VRVizがデータと観察者の間に没入型可視化レイヤーを加えます。", step1Title: "ROSに接続", step1Text: "rosbridgeのWebSocketアドレスを入力し、稼働中のROSシステムへ接続します。", step2Title: "トピックを選択", step2Text: "PointCloud2やLaserScanなどのトピックを設定し、作業に必要なデータだけを有効にします。", step3Title: "空間へ入る", step3Text: "Questを装着し、Unityで構築された3Dシーンでデータストリームと環境の関係を確認します。",
    startIndex: "04 / クイックスタート", startTitle: "Questと<br />ROSデータを準備", startLead: "3つの基本条件を整えると、Quest上のVRVizでロボットデータを表示できます。", check1Title: "ROS環境を起動", check1Text: "表示したいセンサートピックが配信されていることを確認します。", check2Title: "rosbridgeを起動", check2Text: "Quest上のVRVizからアクセスできるWebSocketアドレスを公開します。", check3Title: "VRVizを導入・設定", check3Text: "Questで接続先とトピック名を入力し、必要な表示を有効にします。",
    downloadLabel: "公式ストアリンク", downloadTitle: "VRViz for Questを入手", downloadText: "Quest Storeはページ言語に応じた地域版を開きます。", questLink: "Quest Store", note: "対応トピック、Quest機種、起動パラメーターはVRVizのビルドによって異なります。", closingTitle: "データを見る。<br /><em>空間を理解する。</em>", backTop: "トップへ戻る", footerText: "Meta Questでネイティブ動作。PC接続やストリーミング不要のスタンドアロンアプリ。", creditPrefix: "ページ構成の参考",
  },
  en: {
    locale: "en", title: "VRViz — Standalone ROS visualization for Meta Quest", description: "VRViz is a native standalone ROS visualization app for Meta Quest—no PC connection, streaming, or data cable required.",
    privacyNav: "Privacy policy", privacyIndex: "05 / PRIVACY", privacyTitle: "Your data stays under your control", privacyLead: "VRViz is designed around local processing on Quest. This notice applies to the current version and should be reviewed against the final build and distribution regions before release.", privacyEffective: "Effective date", privacyApplies: "Applies to", privacyLocalTitle: "Local data processing", privacyLocalText: "Robot visualization, controller input, and scene locomotion are primarily processed on the Quest device. The current VRViz version does not require a user account.", privacyRosTitle: "ROS network data", privacyRosText: "The app connects only to a rosbridge WebSocket address configured by the user. ROS topics travel over the selected network; users are responsible for network security, access control, and rosbridge configuration.", privacyStorageTitle: "Device storage", privacyStorageText: "Language preferences, connection parameters, or app settings may be stored locally on Quest to restore configuration. Uninstalling the app or clearing its data removes this local information.", privacyThirdTitle: "Third-party music services", privacyThirdText: "Audius and Spotify content, accounts, and network requests are governed by their respective privacy policies. Spotify uses the Spotify app installed on Quest; VRViz does not store Spotify login credentials.", privacyPermissionTitle: "Device permissions", privacyPermissionText: "VRViz should request only permissions needed for VR interaction, controllers, network communication, and audio playback. Permissions can be reviewed or revoked in Quest system settings.", privacyRetentionTitle: "Collection and retention", privacyRetentionText: "This site currently includes no account system, advertising, or web analytics. If telemetry, cloud services, or crash reporting are added, this policy will be updated before activation with purpose and retention details.", privacyContactLabel: "Privacy contact", privacyContactText: "For questions about this policy or how VRViz handles data, contact the developer using the email below.", developerLabel: "Developer", emailLabel: "Contact email", regionLabel: "Region", regionValue: "Japan",
    skip: "Skip to main content", menu: "Open navigation", navFeatures: "Features", navWorkflow: "How it works", navStart: "Quick start", navDownload: "Get the app",
    heroEyebrow: "META QUEST STANDALONE APP · ROS · UNITY", questBadge: "Native standalone Quest app", heroTitle: "Bring robot data<br /><em>into the room</em>", heroLead: "VRViz is a native standalone ROS visualization app for Meta Quest. Bring LiDAR, point clouds, and robot state into one interactive space without PC streaming or tethering.", heroCta: "Get the Quest app", heroExplore: "Explore features", standaloneNote: "Runs locally on Quest—no PC connection, streaming, or data cable required", factPlatform: "Platform", factConnection: "Data connection", factEngine: "Runtime", heroFoot: "From message streams to spatial awareness",
    aboutIndex: "01 / ABOUT", aboutTitle: "More than viewing data.<br />Understand the scene.", aboutP1: "Conventional visualization compresses a complex robot environment onto a flat display. VRViz preserves scale, direction, and depth in 3D, keeping sensor data and the robot in an intuitive spatial relationship.", aboutP2: "VRViz runs natively as a standalone Meta Quest app—no PC tether, PC streaming, or data cable required. It reaches an accessible rosbridge over the wireless network and subscribes to and renders ROS data locally on Quest.",
    featuresIndex: "02 / FEATURES", featuresTitle: "Critical data, clearly presented", featuresLead: "Designed around spatial perception and debugging on Quest, with a lightweight and direct approach to connection, rendering, and interaction.", feature1Title: "Dense point clouds", feature1Text: "Render ROS PointCloud2 data while preserving environmental structure and depth, so perception results can be inspected spatially.", feature2Title: "Laser scans", feature2Text: "Display LaserScan data in real time to identify outlines, obstacles, and LiDAR coverage at a glance.", feature3Title: "On-demand topics", feature3Text: "Toggle subscriptions and displays by topic to focus on the current task and reduce irrelevant data.", feature4Title: "Spatial frames", feature4Text: "Organize robot and sensor information in one 3D scene with a clear, intuitive spatial reference.", feature5Title: "Online music playback", feature5Text: "Play online music from Audius or Spotify inside VRViz for a continuous immersive experience in your robotics data space.", requirementLabel: "REQUIREMENT", feature5Note: "Spotify playback requires the Spotify app to be installed on Meta Quest beforehand. Audius works directly.", feature6Title: "Dual controller modes", feature6Text: "Switch the Quest controllers between robot teleoperation and user locomotion, keeping control and observation in one immersive interface.", robotModeTitle: "Robot teleoperation", robotModeText: "Drive the robot with the controllers and publish /cmd_vel velocity commands to ROS.", humanModeTitle: "User locomotion", humanModeText: "Use the controllers to move the user and viewing position through the VR scene.",
    workflowIndex: "03 / WORKFLOW", workflowTitle: "Step into the robot's world", workflowLead: "Put on Quest and keep your existing ROS workflow. VRViz simply adds an immersive visualization layer between the data and the observer.", step1Title: "Connect to ROS", step1Text: "Enter the rosbridge WebSocket address to connect with a running ROS system.", step2Title: "Choose topics", step2Text: "Configure PointCloud2, LaserScan, and other topics, then enable only the data needed for the task.", step3Title: "Enter the space", step3Text: "Put on Quest and inspect data streams inside a Unity 3D scene, checking the relationship between perception and environment.",
    startIndex: "04 / QUICK START", startTitle: "Prepare Quest<br />and your ROS stream", startLead: "Meet three basic requirements to start viewing robot data with VRViz on Quest.", check1Title: "Run your ROS environment", check1Text: "Make sure the sensor topics you want to inspect are being published.", check2Title: "Start rosbridge", check2Text: "Expose a WebSocket address that VRViz on Quest can reach.", check3Title: "Install and configure VRViz", check3Text: "On Quest, enter the connection address and topic names, then enable the corresponding displays.",
    downloadLabel: "OFFICIAL STORE LINK", downloadTitle: "Get VRViz for Quest", downloadText: "The Quest Store link opens the matching regional page for the selected language.", questLink: "Quest Store", note: "Supported topic types, Quest models, and launch parameters depend on the current VRViz build.", closingTitle: "See the data.<br /><em>Understand the space.</em>", backTop: "Back to top", footerText: "Native on Meta Quest—a standalone app with no PC connection or streaming required.", creditPrefix: "Page structure inspired by",
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
