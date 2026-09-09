# 全网净化大师 NetClean

> 一站式网页净化工具箱：广告 / 弹窗屏蔽 + 搜索美化 + 暗黑护眼 + 视频增强 + 划词搜索。
> 全部配置仅保存在你本地浏览器，**零数据外传**。

![license](https://img.shields.io/badge/license-MIT-blue.svg)
![version](https://img.shields.io/badge/version-1.0.4-brightgreen.svg)
![tampermonkey](https://img.shields.io/badge/Tampermonkey-4.19%2B-orange.svg)
![size](https://img.shields.io/badge/size-~632KB-lightgrey.svg)
![verified](https://img.shields.io/badge/verify-169%2F169-brightgreen.svg)
![audit](https://img.shields.io/badge/audit-P0%3A0%20P1%3A0-blue.svg)

---

## 📑 目录

- [📸 截图展示](#-截图展示)
- [✨ 功能一览](#-功能一览)
- [🌐 站点支持列表](#-站点支持列表)
- [📦 安装方法](#-安装方法)
- [🚀 快速上手](#-快速上手)
- [🎛️ 设置面板详解](#-设置面板详解)
- [🌗 护眼模式（科学诚实版）](#-护眼模式科学诚实版)
- [🎬 视频功能](#-视频功能)
- [🔍 划词搜索](#-划词搜索)
- [🎨 搜索结果美化](#-搜索结果美化)
- [🚫 关键词 / 网址过滤](#-关键词--网址过滤)
- [📋 干净复制（去追踪参数）](#-干净复制去追踪参数)
- [☁️ WebDAV 同步（自建云端）](#-webdav-同步自建云端)
- [🔐 验证码识别（公益接口）](#-验证码识别公益接口)
- [⌨️ 快捷键](#-快捷键)
- [📤 配置导入 / 导出](#-配置导入--导出)
- [🛡️ 站点黑名单 / 白名单](#-站点黑名单--白名单)
- [🔒 隐私声明](#-隐私声明)
- [❓ 常见问题 FAQ](#-常见问题-faq)
- [📝 更新日志](#-更新日志)
- [🗓️ Roadmap](#-roadmap)
- [🛠️ 开发与贡献](#-开发与贡献)
- [🙏 致谢](#-致谢)
- [👤 作者](#-作者)
- [📄 许可](#-许可)

---

## 📸 截图展示

> 💡 **占位符**：以下截图待正式发布时补全。

### 设置面板（安东蓝风格）
<!-- 截图占位：设置面板主界面 -->
```
[设置面板截图：① 通用防护 · ② 搜索净化 · ③ 视频 · ④ 划词翻译 4 大组]
```

![](https://i.imgs.ovh/2026/09/08/d9e4321cdc5c6b90728321457365ff25.png)
![](https://i.imgs.ovh/2026/09/08/f176ae6b10969146cae8a77f9422440a.png)
![](https://i.imgs.ovh/2026/09/08/7028976878b22633b42632bdde2583bc.png)

### 护眼模式效果对比

<!-- 截图占位：护眼前 / 护眼后 -->
```
[护眼前：纯白刺眼]  →  [护眼后：暖色蒙版柔和]
```

![](https://i.imgs.ovh/2026/09/08/63cc51fcad27dec78d93f67c70b856ad.png)

### 搜索结果卡美化

<!-- 截图占位：百度 vs Google 搜索结果 -->
```
[百度搜索：现代卡片式布局]   [Google 搜索：极简卡片]
```

![](https://i.imgs.ovh/2026/09/08/465199cfb76dc6f4ed9fcc71b1e095b5.png)

### 划词搜索弹窗

<!-- 截图占位：选中文字后弹窗 -->
```
[划词后：9 引擎 + 译按钮 + 打开链接]
```
![](https://i.imgs.ovh/2026/09/08/553e805f7fb8ab6214ae8dd392b42097.png)
> 📷 **贡献截图**：欢迎在 [GitHub Issues](https://github.com/bigoceans/netclean/issues) 附图投稿，被采纳会加到本节并致谢。

---

## ✨ 功能一览

| 模块 | 能力 | 默认 |
|---|---|---|
| **搜索美化** | 百度/Google/Bing/Yandex/360 搜索结果卡片式布局，安装即感知 | ✅ 开 |
| **划词搜索** | 选中文字弹窗，内置 **9 个搜索/翻译引擎**（百度/Google/必应/哔哩哔哩/YouTube/微博/Wikipedia/百度翻译/小红书）+ 打开网站/复制；划词翻译默认开 | ✅ 开 |
| **站点广告过滤** | 各站点独立开关：百度/Google/Bing/360 搜索结果页广告位，知乎/B站/微博/CSDN/微信公号 横幅/弹窗/视频前贴片 | ⚪ 关 |
| **被动去广告** | 通用算法扫描页面悬浮/弹窗「牛皮癣」广告 | ⚪ 关 |
| **禁用第三方 iframe** | 屏蔽跨域嵌入式框架，拦截联盟广告与跟踪 | ⚪ 关 |
| **关键词 / 网址过滤** | 维护一份关键词与网址片段黑名单，命中即从搜索结果移除 | ⚪ 关 |
| **干净复制** | 去除复制链接中的 `utm_*` / `spm` / `from` / `source` / `ref` / `tracking` 等追踪参数 | ⚪ 关 |
| **护眼模式** | 全屏 multiply 暖色蒙版 + 5 种预设昏黄系色板 + 三档强度 | ⚪ 关 |
| **20-20-20 休息提醒** | 每 20 分钟 toast 提醒远眺（开启护眼时生效） | ⚪ 随护眼 |
| **暗黑模式** | 全站通用：百度/Google/Bing 精修配色，其余站点整页反色自动适配；跟随系统偏好或强制开启 | ⚪ 关 |
| **视频倍速** | 全站 `<video>` 元素可设自定义倍速 | ⚪ 1x |
| **B 站画质解锁** | 未登录状态解锁 1080P 画质选项 | ⚪ 关 |
| **YouTube 旋转 / 翻转 / 填充** | 视频画面 90°/180°/270° 旋转、水平/垂直翻转、自定义宽高比填充 | ⚪ 关 |
| **吾爱破解自动签到** | 访问吾爱破解论坛页面时自动完成每日签到（仅 52pojie.cn） | ⚪ 关 |
| **验证码识别** | 可选接入社区公益识别接口（默认留空，不发起任何外部请求） | ⚪ 留空 |
| **WebDAV 加密同步** | 把配置经密码加密后同步到你自己的 WebDAV 服务器（坚果云/自建 Nextcloud 等） | ⚪ 关 |
| **导入 / 导出配置** | 一键导出 JSON 配置 / 从 JSON 恢复 | ✅ 内置 |

---

## 🌐 站点支持列表

脚本通过油猴 `@match` 静态匹配下列站点，**未列出的网站**会通过 `inHost()` 守卫启动后立即早退（近零开销）：

### 搜索引擎
- `*.baidu.com`（含首页 + 搜索 + 知道 + 文库 + 贴吧 + 好看视频等子域）
- `haokan.baidu.com`（百度好看视频）
- `*.google.com` / `*.google.com.hk`
- `*.bing.com`
- `*.so.com`（360 搜索）
- `yandex.com`（内置但未在 @match 列出）

### 内容社区
- `*.zhihu.com`（知乎）
- `*.douban.com`（豆瓣）
- `*.weibo.com`（微博）
- `*.bilibili.com`（B 站）
- `*.csdn.net`（CSDN）
- `mp.weixin.qq.com`（微信公众号文章）
- `www.52pojie.cn`（吾爱破解论坛）

### 视频
- `*.youtube.com`
- `*.youku.com`（优酷）
- `v.qq.com`（腾讯视频）
- `*.bilibili.com`（B 站）

### 社交
- `twitter.com`
- `x.com`

### 兜底
- `*://*/*`（所有网站，配合启动早退机制零开销）
- `file:///*`（本地 HTML 调试用）

> 💡 **新增站点支持**：在脚本里加一个 `@match` + `function processXxx()` 处理器即可。

---

## 📦 安装方法

### 方案 A：油猴直接安装（推荐）

1. 安装浏览器扩展 [Tampermonkey](https://www.tampermonkey.net/)（Chrome / Edge / Firefox / Safari 全支持）
2. 打开 [`netclean.user.js`](./netclean.user.js) → 内容会自动触发安装弹窗
3. 点击 **「安装」** 即可

### 方案 B：从 GreasyFork 安装（更稳定、有自动更新）

> 🔗 GreasyFork 链接：*（上传后会更新此 URL）*

1. 打开 GreasyFork 脚本页面
2. 点击 **「安装」** 按钮
3. Tampermonkey 会自动接管安装流程

### 方案 C：从 GitHub Release 下载

1. 访问 [Releases 页面](https://github.com/bigoceans/netclean/releases)
2. 下载最新 `netclean.user.js`
3. 拖入浏览器即可

### 系统要求

- 浏览器：Chrome 88+ / Edge 88+ / Firefox 86+ / Safari 14+
- 油猴：Tampermonkey 4.19+ / Violentmonkey 2.13+ / Greasemonkey 4.11+
- 操作系统：Windows / macOS / Linux 全支持

---

## 🚀 快速上手

安装后，**搜索卡片美化 + 划词搜索**默认开启、即刻可感知；广告过滤、护眼、暗黑、视频增强等可在设置面板按需开启：

1. 打开 [baidu.com](https://www.baidu.com) → 搜索任意关键词 → 搜索结果卡片化
2. 任意网页选中一段文字 → 弹出"翻译/搜索"工具条（默认 9 个引擎）
3. 打开 [zhihu.com](https://www.zhihu.com) / [bilibili.com](https://www.bilibili.com) → 在设置 → 对应分组里开启广告过滤 / B 站画质解锁后生效

### 打开设置面板

- **方式 1**：油猴菜单 → 「全网净化大师」→ 设置
- **方式 2**：部分页面角落的 ⚙ 控制面板入口（如百度右上角快捷入口，需开启）
- **方式 3**：快捷键 `Ctrl + Shift + A`（默认关闭，需在设置 → 快捷键里开启）

---

## 🎛️ 设置面板详解

脚本设置面板采用**安东蓝风格** shadow-DOM 容器（#zk-set-cleaner-settings），不污染页面 DOM，分 4 大组：

### ① 组：通用防护（全站生效）
- **护眼模式**（baidueye）：全站护眼蒙版 + 20-20-20 提醒
- **护眼色**（baidueyecolor）：5 种昏黄系预设（羊皮纸黄/暖黄/米黄/淡橄榄绿/暖橙）+ 取色器自定义
- **护眼强度**（baidueyestrength）：柔和(.16) / 标准(.26) / 增强(.38) 三档
- **暗黑模式**（darkMode）：跟随系统 / 强制开 / 强制关
- **键盘快捷键开关**（shortcutPanel / shortcutPause / shortcutYtp）

### ② 组：搜索净化与过滤
- **关键词过滤**（kgbaiduad / kggooglead / kgbingad / kg360ad / kgyandexed）
- **网址过滤**（pingbiurl / pingbikw）
- **百度热搜栏屏蔽**（baiduhot）
- **搜索美化**（baiducss / googlecss / bingcss / yandexcss / so360css）
- **搜索结果 favicon**（baidulogo）
- **百度链接直达**（baidulianjie）

### ③ 组：视频与下载
- **视频倍速**（videoSpeed）：可自定义倍速
- **B 站画质解锁**（kgbiliQuality）：未登录解锁 1080P
- **YouTube 旋转 / 翻转 / 填充**（shortcutYtp）
- **好站视频广告屏蔽**（haokanPauseAd）

### ④ 组：划词搜索 / 翻译 / 其它
- **划词搜索总开关**（selectionSearch）
- **显示翻译按钮**（selSearchShowTranslate）：默认 iciba，可选 Google / DeepL / 百度 / 自定义
- **划词打开链接**（selSearchAlwaysShowOpenLink）
- **吾爱破解自动签到**（pojieSignIn）
- **验证码识别**（captcha*，接口默认留空）
- **WebDAV 同步**（服务器地址 / 用户名 / 密码）
- **导入 / 导出配置**

---

## 🌗 护眼模式（科学诚实版）

> ⚠️ **重要诚实声明**：本脚本的护眼模式**不改变屏幕蓝光发射量**。如需真正降蓝光，请开启操作系统级护眼模式（Windows Night Light / macOS Night Shift / f.lux）。

### 实际起作用的两层

#### 1. 视觉柔和层（multiply 暖色蒙版）
- 全屏 `position:fixed;z-index:2147483640;mix-blend-mode:multiply` 暖色蒙版
- 颜色：选自 5 种 Kindle/Night Shift/f.lux 经典「夜览配色」（羊皮纸黄/暖黄/米黄/淡橄榄绿/暖橙）
- 强度：三档 alpha 系数（柔和 .16 / 标准 .26 / 增强 .38）
- **原理**：multiply 是「颜色相乘」视觉变换，白像素 × 暖色 = 暖色，**绝不反色**，**不影响视频**

#### 2. 行为护眼层（20-20-20 休息提醒）
- 每 20 分钟 toast 提醒「远眺 20 英尺（6 米）外的物体 20 秒」
- 这是**美国眼科学会（AAO）公认最有效的护眼手段**
- 独立的静默开关 `baidueyerest`，可单独关闭

### 三种护眼方案对比

| 方案 | 降蓝光 | 视觉柔和 | 视频反色 | 适用 |
|---|---|---|---|---|
| **本脚本 multiply 蒙版** | ❌ | ✅ | ❌ | 阅读为主 |
| **OS Night Light / f.lux** | ✅ | 部分 | ❌ | 全场景 |
| **OS Night Light + 本脚本** | ✅ | ✅ | ❌ | **推荐组合** |

---

## 🎬 视频功能

### 视频倍速
- 全站 `<video>` 元素自定义倍速（在设置中调节）
- 实时应用到所有 `<video>` 元素
- 新增 video 元素通过 MutationObserver 自动应用

### B 站画质解锁
- **未登录状态**解锁 B 站 1080P 画质选项（拦截播放器 API 注入 VIP 画质字段）
- 属于灰色功能，依赖 B 站播放器接口，改版可能失效
- 不影响其它屏蔽功能

### YouTube 旋转 / 翻转 / 填充
- **旋转**：90° / 180° / 270°
- **翻转**：水平 / 垂直
- **填充**：自定义宽高比（如 21:9 / 32:9 电影级填充）
- 通过 `Ctrl + Shift + Y` 快捷键触发
- 实现原理：CSS transform 应用到 `<video>` 元素

---

## 🔍 划词搜索

### 核心功能
- 选中任意文字 → 弹窗（安东蓝风格）
- 一键跳转到配置的搜索引擎（默认 **9 个引擎**：百度 / Google / 必应 / 哔哩哔哩 / YouTube / 微博 / Wikipedia / 百度翻译 / 小红书，另有「打开网站」「复制」按钮）
- 划词翻译（默认 iciba 词典，可选 Google / DeepL / 百度 / 自定义 API）

### 搜索引擎管理
- 内置：百度 / Google / 必应(Bing) / 哔哩哔哩 / YouTube / 微博 / Wikipedia / 百度翻译 / 小红书
- 可自定义添加：进入设置 → 划词搜索 → 搜索引擎管理
- 每个引擎可独立启用 / 禁用 / 调整顺序

### 翻译服务
- **iciba 词典**：默认，免费免密钥，单词给音标/发音/释义，句子自动翻译
- **Google 翻译**：免费免密钥
- **DeepL**：句子质量最高，但需付费 API Key
- **百度翻译**：中英互译好，需注册开放平台申请 AppID + 密钥
- **自定义 API**：支持 `{q}` / `{tl}` / `{key}` 占位符
- 均可在设置中切换引擎

### 隐私
- 划词搜索**仅在选中后**才发起请求
- 不会预先收集你的浏览历史
- 翻译请求直接发到对应引擎服务器（iciba/Google/DeepL/百度/自定义），**不经本脚本中转**

---

## 🎨 搜索结果美化

> 卡片式布局默认开启；站点 favicon、跳过百度跳转、隐藏热搜栏等为**独立开关**，默认关闭，可在设置 → ② 组按需开启。

### 百度
- 现代卡片式布局（仿 Bing 风格）
- 隐藏右侧热搜栏（独立开关 `baiduhot`）
- 显示每个结果的站点 favicon（独立开关 `baidulogo`）
- 跳过百度跳转链接（`baidu.com/link?` → 直达真实 URL，独立开关 `baidulianjie`）

### Google
- 极简卡片式布局
- 隐藏部分推广位
- 显示站点 favicon

### Bing
- 极简卡片式布局
- 隐藏 Copilot 侧边栏（独立开关 `bingAI`）
- 显示站点 favicon

### 360 搜索
- 极简卡片式布局
- 隐藏部分推广位

---

## 🚫 关键词 / 网址过滤

### 关键词黑名单（pingbikw）
- 维护一份关键词列表
- 搜索结果中**包含**任一关键词的整条结果被移除
- 建议至少 2 字以上、具区分度

### 网址黑名单（pingbiurl）
- 维护一份网址片段列表
- 搜索结果 URL 中**包含**任一片段的整条结果被移除
- 支持完整域名 / 路径片段 / 关键词

### 维护方式
- 设置 → ② 组 → 关键词过滤 / 网址过滤 → 增删改
- 实时生效，无需刷新
- 失效多为关键词库过时，定期更新即可

---

## 📋 干净复制（去追踪参数）

复制网页文字时，自动清理链接中的常见追踪参数：

| 参数 | 来源 |
|---|---|
| `utm_source` / `utm_medium` / `utm_campaign` 等 | Google Analytics / 各类广告 |
| `spm` | 淘宝 / 阿里 |
| `from` | 各类分享来源标记 |
| `source` | 同上 |
| `ref` / `tracking` | 其它追踪 |

### 隐私效果
- 避免你分享的链接**携带个人来源信息**泄露给他人
- 避免被广告平台通过追踪参数画像
- 干净的链接更短、更美观

---

## ☁️ WebDAV 同步（自建云端）

> 💡 **数据安全模型**：脚本配置在本地用你的 WebDAV 密码做**异或（XOR）加密**后才上传到你的服务器，开发者拿到的是密文。

### 支持的 WebDAV 服务
- **坚果云**（国内访问稳定，有免费 1GB 空间）
- **自建 Nextcloud**（完全自主可控）
- **自建 Seafile**（开源网盘）
- **任何标准 WebDAV 服务**

### 配置步骤
1. 设置 → WebDAV 同步 → 填入服务器地址（如 `https://dav.jianguoyun.com/dav/`）
2. 填入用户名 + 密码
3. 测试连接
4. **上传到云端** / **从云端下载**

### 加密机制（诚实说明）
- 配置经 **XOR 异或加密**（`xorCrypt`，密钥 = 你的 WebDAV 密码），再加 Base64 编码后上传
- 这是一种**基础混淆**，能让传输内容不直接可读；相对更强的方案是自建 HTTPS 服务器
- 请勿把 WebDAV 密码当作高强度密钥使用；务必只在可信的自建/知名 WebDAV 服务上同步
- 记住密码即可正常同步；忘记密码则本地概览无法恢复已同步配置

---

## 🔐 验证码识别（公益接口）

> ⚠️ **默认完全关闭**：本脚本**不会自动调用任何验证码识别接口**。你必须主动在设置中填入接口地址才会启用。

### 如何启用
1. 找一个**你信任的**验证码识别公益接口（社区贡献）
2. 设置 → 验证码识别 → 填入接口地址 + Token
3. 启用对应站点（默认对 52pojie.cn 生效）

### 隐私
- 验证码图片**仅在你主动登录或触发验证码时**才会上传到接口
- 不会预先抓取或缓存任何验证码
- 可随时在设置中关闭

---

## ⌨️ 快捷键

| 快捷键 | 功能 | 默认 |
|---|---|---|
| `Ctrl + Shift + A` | 打开 / 关闭设置面板 | ⚪ 关 |
| `Ctrl + Shift + P` | 暂停 / 恢复脚本（当前站） | ⚪ 关 |
| `Ctrl + Shift + Y` | YouTube 视频旋转 90° | ⚪ 关 |
| `Esc` | 关闭当前弹窗 | ✅ 启用 |

> 快捷键默认关闭，可在设置 → 快捷键里开启 / 重新映射；Esc 正常生效。

---

## 📤 配置导入 / 导出

### 导出
设置 → 导入 / 导出 → 导出配置 → 自动下载 `NetClean-config-YYYY-MM-DD.json`

### 导入
设置 → 导入 / 导出 → 导入配置 → 选择 JSON 文件 → 自动合并

### 包含项
- ✅ 所有开关（baidueye / darkMode / kgbaidued 等）
- ✅ 关键词 / 网址过滤列表
- ✅ 划词搜索的引擎配置 + 自定义引擎
- ✅ 翻译 API 密钥
- ✅ WebDAV 配置
- ✅ 站点黑 / 白名单
- ❌ **不包含**：WebDAV 密码（出于安全考虑，需重新输入）

---

## 🛡️ 站点黑名单 / 白名单

### 黑名单（scriptBlacklist）
- 维护一份域名列表
- 访问列表中任一域名时，**脚本完全跳过本页面**
- 适用：不想让脚本处理的网站（如你的内网 / 隐私站）

### 白名单（scopeWhitelist / perfWhitelist）
- **perfWhitelist = true**：仅在「白名单域名」与「已知大站」运行，其余页面秒退
- 适合追求极致性能的用户
- 油猴 `@match` 是静态元数据无法运行时切换，此项通过**启动后早退**实现

### 配置
设置 → 黑名单 / 白名单 → 增删域名

---

## 🔒 隐私声明

> 我们对你的隐私**极为重视**。下面是完整的数据流向说明。

### 零数据外传
- ✅ **所有配置仅存本地浏览器**（通过 `GM_setValue` 存储在油猴沙箱）
- ✅ **不会**上传到作者服务器
- ✅ **不会**上报任何使用统计
- ✅ **不会**与第三方分享你的浏览数据

### 仅在以下情况发起网络请求
| 情况 | 目的地 | 触发条件 |
|---|---|---|
| 划词搜索 | 你配置的搜索引擎 | 选中文字后点击引擎 |
| 划词翻译 | 百度翻译 / DeepL | 选中文字后点击翻译 |
| 搜索结果 favicon | 第三方 favicon API | 浏览搜索引擎结果页 |
| 百度链接直达 | 真实目标 URL | 点击百度搜索结果 |
| WebDAV 同步 | 你自己的 WebDAV | 你主动点击同步 |
| 验证码识别 | 你填入的接口 | 触发验证码时（默认关闭） |
| 吾爱破解签到 | 52pojie.cn | 你启用功能后访问 52pojie 论坛页 |

### 你的密码 / 密钥
- WebDAV 密码仅用于本地加密 + 远程 Basic Auth，**不会发送到作者或任何中间服务器**
- 翻译 API 密钥仅发到对应翻译服务商
- 验证码接口 Token 仅发到你配置的接口

### 源代码透明
- 全部源码开源在 GitHub，欢迎审计
- 无任何混淆、无任何加密字符串、无任何远程动态加载
- 你可以用浏览器的 DevTools 完整审查

---

## ❓ 常见问题 FAQ

### Q1: 安装后页面没变化？
A: 检查三件事：
1. 油猴扩展是否启用（地址栏右侧图标）
2. 是否允许脚本在「私密窗口」运行（部分浏览器默认禁止）
3. 设置 → ① 组 → 「通用防护」是否全部启用
4. 刷新页面（部分功能需 DOM 重建后生效）

### Q2: 某个站点的拦截失效了？
A: 大概率是站点改版了。可在 [GitHub Issues](https://github.com/bigoceans/netclean/issues) 报告，附上：
- 站点 URL
- 期望拦截但没生效的元素（截图）
- 控制台报错（按 F12 → Console）

### Q3: 护眼模式没有「滤蓝光」效果？
A: 详见上文 [护眼模式（科学诚实版）](#-护眼模式科学诚实版) 章节。
multiply 蒙版**不改变屏幕蓝光发射量**，真正的护眼请配合 OS 级（Windows Night Light / macOS Night Shift / f.lux）。

### Q4: 视频看起来反色了？
A: 这是 multiply 蒙版 + 特定视频滤镜同时开启的极端组合。
- 方案 1：临时关闭护眼模式（`Ctrl + Shift + P`）
- 方案 2：护眼强度调为「柔和」
- 方案 3：护眼色改为「淡橄榄绿」

### Q5: 怎么完全卸载？
A: 油猴菜单 → 仪表盘 → 找到「全网净化大师」→ 点击垃圾桶图标。
所有数据保存在油猴沙箱，卸载时自动清除。

### Q6: 会影响我浏览器的隐私模式吗？
A: 默认**不会**。如需在隐私窗口生效：
- Chrome：扩展详情页 → 允许在隐身模式运行
- Firefox：about:addons → 此扩展 → 在隐私窗口中运行

### Q7: 配置丢了怎么恢复？
A: 三种方案：
1. WebDAV 同步：从云端下载（前提是你开过同步）
2. 浏览器同步：如果你用 Chrome / Edge 且开启了浏览器数据同步，油猴配置可能跟随
3. 重新手动配置（无备份就只能这样了）

### Q8: 能和 uBlock Origin / AdGuard 同时使用吗？
A: 完全可以，且**推荐同时使用**。本脚本专注于**搜索净化 + 划词 + 视频增强**等场景化功能，与通用广告拦截器不冲突，反而互补。

### Q9: 在手机浏览器能用吗？
A: iOS Safari 通过 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) 可用；
Android 推荐 [Kiwi Browser](https://kiwibrowser.com/) + Tampermonkey。
**桌面体验最佳**。

### Q10: 怎么贡献代码 / 提建议？
A: 欢迎 PR / Issue！
- 仓库：https://github.com/bigoceans/netclean
- Issue：报告 bug / 提功能建议
- PR：fork → 改 → PR（请附 verify 脚本 + 截图）

---

## 📝 更新日志

### v1.0.4（当前版本 · 2026-09-09）

百度**首页**中央白底输入区 + 热搜框的精修补漏 —— 之前暗黑模式只覆盖了百度**搜索结果页**(`/s?*`)的卡片，**首页**(`baidu.com/`)专有的 chat 输入卡 / 文心胶囊 / 热搜 ul 还残留白底。

- **首页 chat 输入区** `.chat-input-background_3edHa` / `.san-card` / `.chat-input-wrapper .chat-input-container` / `.right-tools-wrapper` → 暗底 `#16213e`
- **「百度一下」按钮** `#chat-submit-button` → 暗底浅蓝（白底蓝字 → `#1a1a2e` 底 `#7eb8ff` 字）
- **经典搜索框** `#s_kw_wrap` / `.s_ipt_wr` / `#s_btn_wr` / `.s_btn`（备用入口）→ 同样压暗
- **热搜列表** `.s-hotsearch-content` / `.s-hotsearch-wrapper` / `#s-hotsearch-wrapper` / `.s-menu-container` → 暗底
- **文心助手胶囊** `.guide-bub_2c8ND` → 暗底浅蓝（保留蓝色语义）
- **scan 排除规则放宽**：之前的 `[class*="chat"]` 会把整个 chat 模块容器都跳过（导致中央白盒永远不会被压暗），改为只跳过真正承担输入职责的容器（`form` / `[id*="input"]` / `[id*="Input"]` / `textarea#chat-textarea`），容器本身（`.chat-input-background_3edHa` 等）现在能被 scan 兜底

### v1.0.3（2026-09-09）

暗黑模式"站点自带深色即让行"——按用户明确诉求实现的**简单可预期策略**。

- **遇到自带深色 / 已是暗色 → 脚本暗黑直接让行**，不再有"精修站点例外"。两套暗色（站点原生 + 脚本）同时存在时观感最差，现在按用户的意愿让给站点
- 新增自动检测（`ncSiteNativeDarkCapable()`）：判断 html 类名（`darkmode` / `dark-mode` / `theme-dark` / `night`）、`data-theme` 属性、`<meta name="color-scheme">` 与 `getComputedStyle` 的 `color-scheme` —— **排除本脚本自己的类**，避免自证循环
- 新增按站点手动名单 `darkSkipHosts`（让行）/ `darkForceHosts`（强制接管），存储在 `GM_setValue` 中
- 油猴菜单新增：`🌙 暗黑：本站「交给网站 / 脚本接管」切换` —— 一键循环 `让行 → 强制 → 自动`
- 让行时一次性 toast 提示，避免用户以为脚本失效
- 优先级：`darkForceHosts` > 让行判定 > `darkSkipHosts`

### v1.0.2（2026-09-09）

暗黑模式深度补漏 + 运行时自适应扫描兜底。

- **运行时残留亮块扫描**（`ncForceDarkScan`）：静态选择器覆盖不到站点运行时生成的未知容器（打不完的地鼠），遍历 DOM 找"体积够大 + 背景接近纯白"的块统一压暗
- 跳过脚本自身 UI（设置面板 / toast / 弹窗 / 护眼蒙版 / 划词条）和表单控件（避免误伤搜索框）
- 体积 / 透明度下限避开图标小按钮
- `MutationObserver` 监听 DOM 变化，400ms 防抖重扫

---

### v1.0.1（2026-09-09）

暗黑模式全站适配重构 —— **日趋完善**。

#### 🌗 暗黑模式：从「只在百度生效」到全站可用
- **根因**：旧实现只写了百度/Google/Bing 的选择器级 CSS，其余站点仅改 html/body 背景，深层容器自带白底深字纹丝不动
- **两级策略**：搜索引擎走精修配色；其余站点整页 `filter:invert+hue-rotate` 渲染级反色，深色字体自动翻浅色
- **多层定制補漏**（对照真实 DOM 逐步修正）：
  - `#wrapper_wrapper/#wrapper` 结构层白底 → 透明化
  - `#head` 内联 `background:rgb(255,255,255)` → 同级 `!important` 压制
  - 标题链接被百度两级 id + `!important` 规则压住 → 同特异性双 id 链反压；链接内 `em` 关键词保持暖橙
  - 首页组件消费 html 内联 `--sh-*` 变量（白底深字本体）→ 样式表 `!important` 覆盖变量取值
  - 首页顶部导航条 / 热榜卡片 / 底部栏统一暗色
  - 谷歌 15 张未打标的裸 `.MjjYud` 卡片补齐；链接改用 Google 官方暗色蓝 `#8ab4f8`
- **深色站点自动跳过**（`ncSiteAlreadyDark()`）避免把暗色站洗白，**仅作用于通用反色层**

#### 🐛 修复：暗黑 × 其他功能的冲突
- 谷歌白卡 bug：搜索美化 CSS 提前染暗页面 → `ncSiteAlreadyDark()` 误判跳过 → 类没加上卡片全失效。**现已改为精修站点固定走暗黑**，误跳过策略只保留给通用层
- 护眼蒙版越叠越暗：multiply 是乘法运算，暗底 × 强暖色会糊成一团。**新增 `ncLightenForDark()`** —— 暗黑模式下把预设暖色按 0.78 向白提亮、alpha 降至 ≤0.14，做到「只染色、不压暗」；混合方式仍保持 `multiply`（不引入反色）
- 暗黑切换后护眼蒙版不联动：**现在会即时刷新**护眼色

#### ✅ 验证
- `node --check` ✅ 0 错
- eyecare 12/12 + presets 11/11 + eyecolor 16/16 + e2e 32/32 + baidu_card 19/19 + search_renew 8/8 + settings 11/11 + dialog 11/11 + i18n 42/42 + 405 21/21
- 版本断言同步更新（verify_baidu_group_card_fix S10/S11 → 1.0.1）

---

### v1.0.0（2026-09-08）

#### 🎨 护眼模式（重大重构）
- 全新 multiply 暖色蒙版：全屏 `position:fixed` + `mix-blend-mode:multiply`，**视频绝不反色**
- 5 种预设昏黄系色板：羊皮纸黄 / 暖黄 / 米黄 / 淡橄榄绿 / 暖橙（参考 Kindle/Night Shift/f.lux 经典夜览配色）
- 护眼强度三档：柔和 (.16) / 标准 (.26) / 增强 (.38)
- 20-20-20 行为护眼：每 20 分钟 toast 提醒「远眺 20 英尺 20 秒」—— 独立开关
- **诚实护眼声明**：明确说明 multiply 不改变蓝光发射量；推荐 OS 级护眼模式（Windows Night Light / macOS Night Shift / f.lux）互补
- HELP 字典全部去「降蓝光 / 防蓝光 / 滤蓝光」夸大词，改为「视觉柔和 / 暖色蒙版」诚实描述

#### 🔧 命名规范化（baidu/bd 历史命名清理）
- `cfgBaidu()` → `getScriptCfg()`（51 处调用点 + alias 兜底）
- DOM 属性 `bd-ad-checked` / `bd-filtered` / `bd-url-done` → `nc-*`（6 处）
- 局部变量 `bd` → `dialogBody`（5 处 DOM body）/ `scriptCfg`（3 处配置别名）
- 三个色 helper 重命名 + 加 `nc` 前缀统一：`ncRgbToHex` / `ncHexToRgba` / `ncColorToRgba`
- 单字变量 `m`/`s`/`h`/`ov`/`el`/`bg` → `matchArr`/`inputStr`/`hexBody`/`existingOverlay`/`overlayEl`/`overlayBg`

#### 📦 油猴元数据规范化
- 4 处 `BIGOceana` → `bigoceans`（小写+复数，匹配实际 GitHub user）
- 删未使用 `// @grant unsafeWindow`（代码里 0 次使用）
- 删冗余 `// @connect *`（通配符语义模糊）
- `// @icon` → `// @icon64`（图本身就是 64x64）
- `@description` 精简：404 字 → 202 字（避免被脚本管理器截断）

#### 🆕 新增
- README.md（574 行）：完整功能介绍 + 隐私声明 + FAQ + 诚实护眼独立章节
- 截图展示占位（待发布时补图）
- Roadmap 章节（v1.1+ 计划）
- 开发与贡献章节（开发者向，含 verify 脚本说明）

#### 🐛 修复
- i18n 中英繁切换后黑名单/白名单显示英文的回归 bug
- 验证码栏简中→英文→简中后变竖排的回归 bug
- 启动早退（inHost + perfWhitelist）的 stale closure 隐患

#### 🔄 重命名 & 文件结构
- 主脚本文件：`ad-blocker.user.js` → `netclean.user.js`
- 21 个 verify / helper 脚本硬编码路径同步（`const SCRIPT = '...'`）
- README 11 处 `ad-blocker` 引用全部统一为 `netclean`
- 内部 `passiveAdBlock()` / `cat.adblock` 等「adblock」术语保留（行业通用词，非产品命名）

#### ✅ 验证
- `node --check` ✅ 0 错
- 8 个 verify 脚本：**169 / 169** 全绿（12+11+16+42+58+11+11+8）
- `nc_audit` ✅ P0=0 P1=0 P2=95

---

## 🗓️ Roadmap

> 🗳️ 优先级标记：🟢 已规划 / 🟡 评估中 / ⚪ 暂未排期

### v1.1（近期 · 1-2 个月内）
- 🟢 **划词搜索的搜索引擎市场**：可视化添加自定义引擎（图标 / 名称 / URL 模板）
- 🟢 **护眼模式时间表**：白天/夜间自动切换色温（如晚上自动增强 alpha）
- 🟢 **设置面板搜索**：顶部加搜索框快速定位开关
- 🟢 **更多护眼预设色**：增加"日间冷白" / "护眼绿" / "OLED 真黑" 等

### v1.2（中远期 · 3-6 个月）
- 🟡 **B 站弹幕过滤**：按关键词/正则屏蔽弹幕
- 🟡 **知乎答案折叠**：按点赞数/作者过滤低质答案
- 🟡 **微博时间线净化**：屏蔽推广/广告微博、关键词过滤
- 🟡 **GitHub README 翻译**：在 README 顶部加语言切换
- 🟡 **CHANGELOG.md** 独立文件（当前 README 内联）

### v2.0（远期 · 探索中）
- 🟡 **设置面板移动端适配**：在手机浏览器打开设置能正常使用
- 🟡 **云端白名单社区共享**：用户可选订阅公开的关键词/网址黑名单
- ⚪ **统计面板**：本地显示「已拦截 X 条广告 / 节省 Y 分钟」（纯属本地统计，不外传）
- ⚪ **多脚本元数据**：单个 userscript 可拆为多个子模块按需启用
- ⚪ **TypeScript 重构**：增强可维护性

### 永不计划 ❌
- ❌ 任何形式的追踪 / 收集用户浏览数据
- ❌ 任何形式的广告变现 / 推广注入
- ❌ 任何需要服务器端的强制依赖（除用户自建 WebDAV）

### 提需求
欢迎在 [GitHub Issues](https://github.com/bigoceans/netclean/issues) 提需求，我会按 ROI 排序进 Roadmap。

---

## 🙏 致谢

- 油猴平台：[Tampermonkey](https://www.tampermonkey.net/) / [Violentmonkey](https://violentmonkey.github.io/)
- 设计参考：安东蓝配色取自 [Ant Design](https://ant.design/)
- 护眼模式灵感：[f.lux](https://justgetflux.com/) / Windows Night Light / macOS Night Shift
- 搜索结果卡美化灵感：[Dark Reader](https://darkreader.org/) / [Stylus](https://github.com/openstyles/stylus)
- 划词翻译：[百度翻译开放平台](https://api.fanyi.baidu.com/) / [DeepL](https://www.deepl.com/)
- 站点图标：[Google Favicon Service](https://www.google.com/s2/favicons)
- 所有提交 issue、PR 的贡献者

---

## 👤 作者

**bigoceans**

- GitHub: [@bigoceans](https://github.com/bigoceans)
- 仓库: [netclean](https://github.com/bigoceans/netclean)
- Issues: [报告问题](https://github.com/bigoceans/netclean/issues)

---

## 📄 许可

本项目采用 [MIT License](./LICENSE) 开源。

```
MIT License

Copyright (c) 2026 bigoceans

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## ⭐ Star History

如果这个项目对你有帮助，欢迎在 GitHub 上点 ⭐ Star 支持！

[![Star History Chart](https://api.star-history.com/svg?repos=bigoceans/netclean&type=Date)](https://star-history.com/#bigoceans/netclean)

---

**最后更新**：2026-09-09
**当前版本**：v1.0.4
**作者**：bigoceans
