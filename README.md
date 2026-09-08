# 全网净化大师 NetClean

> 一站式网页净化工具箱：广告 / 弹窗屏蔽 + 搜索美化 + 暗黑护眼 + 视频增强 + 划词搜索。
> 全部配置仅保存在你本地浏览器，**零数据外传**。

![license](https://img.shields.io/badge/license-MIT-blue.svg)
![version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
![tampermonkey](https://img.shields.io/badge/Tampermonkey-4.19%2B-orange.svg)
![size](https://img.shields.io/badge/size-~640KB-lightgrey.svg)

---

## 📑 目录

- [功能一览](#-功能一览)
- [站点支持列表](#-站点支持列表)
- [安装方法](#-安装方法)
- [快速上手](#-快速上手)
- [设置面板详解](#-设置面板详解)
- [护眼模式（科学诚实版）](#-护眼模式科学诚实版)
- [视频功能](#-视频功能)
- [划词搜索](#-划词搜索)
- [搜索结果美化](#-搜索结果美化)
- [关键词 / 网址过滤](#-关键词--网址过滤)
- [干净复制（去追踪参数）](#-干净复制去追踪参数)
- [WebDAV 同步（自建云端）](#-webdav-同步自建云端)
- [验证码识别（公益接口）](#-验证码识别公益接口)
- [快捷键](#-快捷键)
- [配置导入 / 导出](#-配置导入--导出)
- [站点黑名单 / 白名单](#-站点黑名单--白名单)
- [隐私声明](#-隐私声明)
- [常见问题 FAQ](#-常见问题-faq)
- [更新日志](#-更新日志)
- [致谢](#-致谢)
- [作者](#-作者)

---

## ✨ 功能一览

| 模块 | 能力 | 默认 |
|---|---|---|
| **广告 / 弹窗屏蔽** | 百度/Google/Bing/360 等搜索结果页与首页广告位、知乎/B 站/微博/CSDN/微信公号 等 20+ 站点的横幅 / 弹窗 / 视频前贴片广告 | ✅ 开 |
| **搜索结果美化** | 百度/Google/Bing/Yandex/360 搜索结果卡片式布局、显示站点 favicon、跳过百度跳转链接直达 | ✅ 开 |
| **关键词 / 网址过滤** | 维护一份关键词与网址片段黑名单，命中即从搜索结果移除 | ✅ 开 |
| **干净复制** | 去除复制链接中的 `utm_*` / `spm` / `from` / `source` / `ref` / `tracking` 等追踪参数 | ✅ 开 |
| **暗黑模式** | 系统级深色 + 自定义强制深色，跟随系统时间自动切换 | ⚪ 关 |
| **护眼模式** | 全屏 multiply 暖色蒙版 + 20-20-20 休息提醒 + 5 种预设昏黄系色板 | ✅ 开 |
| **视频倍速** | 全站 `<video>` 元素可设自定义倍速（0.5x ~ 3x） | ⚪ 1x |
| **B 站画质解锁** | 解锁登录才可看的 1080P+ 高码率画质 | ✅ 开 |
| **YouTube 旋转 / 翻转 / 填充** | 视频画面 90° 旋转、水平/垂直翻转、自定义宽高比填充 | ✅ 开 |
| **划词搜索** | 选中文字弹窗，6+ 引擎一键搜索 + 划词翻译（默认开启） | ✅ 开 |
| **验证码识别** | 可选接入社区公益识别接口（默认留空，需用户主动填入） | ⚪ 留空 |
| **吾爱破解自动签到** | 每日 0:30 后自动签到（仅在 52pojie.cn 生效） | ⚪ 关 |
| **WebDAV 加密同步** | 把配置加密后同步到你自己的 WebDAV 服务器（坚果云/自建 Nextcloud 等） | ⚪ 关 |
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
2. 打开 [`ad-blocker.user.js`](./ad-blocker.user.js) → 内容会自动触发安装弹窗
3. 点击 **「安装」** 即可

### 方案 B：从 GreasyFork 安装（更稳定、有自动更新）

> 🔗 GreasyFork 链接：*（上传后会更新此 URL）*

1. 打开 GreasyFork 脚本页面
2. 点击 **「安装」** 按钮
3. Tampermonkey 会自动接管安装流程

### 方案 C：从 GitHub Release 下载

1. 访问 [Releases 页面](https://github.com/bigoceans/ad-blocker/releases)
2. 下载最新 `ad-blocker.user.js`
3. 拖入浏览器即可

### 系统要求

- 浏览器：Chrome 88+ / Edge 88+ / Firefox 86+ / Safari 14+
- 油猴：Tampermonkey 4.19+ / Violentmonkey 2.13+ / Greasemonkey 4.11+
- 操作系统：Windows / macOS / Linux 全支持

---

## 🚀 快速上手

安装后**无需任何配置**，脚本立即生效：

1. 打开 [baidu.com](https://www.baidu.com) → 搜索任意关键词 → 搜索结果卡片化、屏蔽右侧广告
2. 打开 [zhihu.com](https://www.zhihu.com) → 顶部 banner 广告消失、登录弹窗不再骚扰
3. 打开 [bilibili.com](https://www.bilibili.com) → 1080P+ 画质自动解锁
4. 任意网页选中一段文字 → 弹出"翻译/搜索"工具条

### 打开设置面板

- **方式 1**：油猴菜单 → 「全网净化大师」→ 设置
- **方式 2**：网页右上角脚本图标（安东蓝盾牌）→ 设置
- **方式 3**：快捷键 `Ctrl + Shift + A`（可在设置里改）

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
- **视频倍速**（videoSpeed）：1x / 1.25x / 1.5x / 2x
- **B 站画质解锁**（bilibili1080p）
- **YouTube 旋转 / 翻转 / 填充**（shortcutYtp）
- **好站视频广告屏蔽**（haokanPauseAd）

### ④ 组：划词搜索 / 翻译 / 其它
- **划词搜索总开关**（selectionSearch）
- **划词翻译**（selSearchShowTranslate）：接入百度翻译 / DeepL
- **划词打开链接**（selSearchAlwaysShowOpenLink）
- **吾爱破解自动签到**（pojieSignIn）
- **验证码识别接口**（识别接口地址，默认留空）
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
- 0.5x / 0.75x / 1x / 1.25x / 1.5x / 1.75x / 2x / 2.5x / 3x 共 9 档
- 实时应用到所有 `<video>` 元素
- 新增 video 元素通过 MutationObserver 自动应用

### B 站画质解锁
- 自动尝试设置最高画质（1080P / 4K / 杜比视界）
- 仅在登录态生效（未登录不保证）
- 失效时检查是否登录 + 大会员状态

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
- 一键跳转到配置的搜索引擎（默认 6+ 引擎）
- 划词翻译（百度翻译 / DeepL，可选）

### 搜索引擎管理
- 内置：Google / Bing / 百度 / 搜狗 / 360 / DuckDuckGo
- 可自定义添加：进入设置 → 划词搜索 → 搜索引擎管理
- 每个引擎可独立启用 / 禁用 / 调整顺序

### 翻译服务
- **百度翻译**：免费但需注册百度翻译开放平台 → 申请 AppID + 密钥
- **DeepL**：高质量但需付费 API Key
- 两者均可在设置中切换

### 隐私
- 划词搜索**仅在选中后**才发起请求
- 不会预先收集你的浏览历史
- 翻译请求直接发到百度/DeepL 服务器，**不经本脚本中转**

---

## 🎨 搜索结果美化

### 百度
- 现代卡片式布局（仿 Bing 风格）
- 隐藏右侧热搜栏（独立开关 `baiduhot`）
- 显示每个结果的站点 favicon
- 跳过百度跳转链接（`baidu.com/link?` → 直达真实 URL）

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

> 💡 **数据安全模型**：脚本配置经**密码加密**后才上传到你的 WebDAV 服务器，**作者和任何第三方均无法解密**。

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

### 加密机制
- 使用 **AES-256** 加密配置 JSON
- 密钥 = 你的 WebDAV 密码（PBKDF2 派生）
- 即使 WebDAV 服务器被攻破，攻击者拿到的也只是密文
- 忘记密码 = 数据不可恢复（这是设计）

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
| `Ctrl + Shift + A` | 打开 / 关闭设置面板 | ✅ 启用 |
| `Ctrl + Shift + P` | 暂停 / 恢复脚本（当前站） | ✅ 启用 |
| `Ctrl + Shift + Y` | YouTube 视频旋转 90° | ✅ 启用 |
| `Esc` | 关闭当前弹窗 | ✅ 启用 |

> 全部快捷键可在设置中禁用 / 重新映射。

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
| 吾爱破解签到 | 52pojie.cn | 你启用该功能 + 访问 52pojie |

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
A: 大概率是站点改版了。可在 [GitHub Issues](https://github.com/bigoceans/ad-blocker/issues) 报告，附上：
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
- 仓库：https://github.com/bigoceans/ad-blocker
- Issue：报告 bug / 提功能建议
- PR：fork → 改 → PR（请附 verify 脚本 + 截图）

---

## 📝 更新日志

### v1.0.0（当前版本 · 2026-09-08）
- 全新「护眼模式」重构：全屏 multiply 暖色蒙版 + 5 种预设昏黄系色板 + 20-20-20 休息提醒
- 诚实护眼声明：明确说明 multiply 不改变蓝光发射量，推荐 OS 级护眼互补
- 变量名规范化：`cfgBaidu()` → `getScriptCfg()`（保留 alias 兜底），DOM 属性 `bd-*` → `nc-*`
- 油猴元数据规范化：4 处 `BIGOceana` → `bigoceans`、删未使用 `unsafeWindow` grant、删冗余 `connect *`
- 图标升级：64x64 自定义图标
- 描述精简：404 字 → 202 字
- 新增：搜索结果卡 favicon 优化、护眼色归位①组
- 修复：i18n 中英繁切换后黑名单/白名单显示英文的 bug
- 修复：验证码栏简中→英文→简中后变竖排的 bug

### 历史版本
详见 [CHANGELOG.md](./CHANGELOG.md)（规划中）

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
- 仓库: [ad-blocker](https://github.com/bigoceans/ad-blocker)
- Issues: [报告问题](https://github.com/bigoceans/ad-blocker/issues)

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

[![Star History Chart](https://api.star-history.com/svg?repos=bigoceans/ad-blocker&type=Date)](https://star-history.com/#bigoceans/ad-blocker)

---

**最后更新**：2026-09-08
**当前版本**：v1.0.0
**作者**：bigoceans
