# 更新日志 · CHANGELOG

> 全网净化大师 NetClean 的**完整版本史**。
>
> 📖 **读者分层**：这里是**给维护者与源码读者看的完整记录** —— 每条变更都带根因、实现要点与踩坑，
> 包含 CSS 破损定位、flex `basis:0` 陷阱、IIFE 顶层 TDZ、变异测试等实现细节。
> 只想快速了解「这版改了什么」，看 [README.md](README.md) 的「📝 更新日志」摘要即可。
>
> 版本号严格单调递增；每个版本都会同步更新 README 徽章、本文件与 GreasyFork 发布说明。

---

### v1.5.0（当前版本 · 2026-10-28）

界面重构：控制面板改为「配色令牌 + 明暗双主题」，左栏底部双联开关，并修复一批交互失效。

**🎨 界面 / 交互**
- **明暗双主题**：`uiTheme`（light / dark）落到配置里，跟着云同步走。`PANEL_GLASS_CSS` 全量重写为令牌层：`:host` 定义 33 个 `--nc-*`（浅色），`:host(.zk-nc-dark)` 覆盖同 33 个（夜间）；规则体只引用 `var()`，因此夜间不可能漏元素。主题类同时挂宿主与面板盒子：宿主供 `:host(.zk-nc-dark)` 取令牌（同级弹层也能继承），盒子供 `.zk-nc-dark .x` 后代选择器。
- **左栏双联开关**：`.zk-ui-dock` 两块等宽等高卡片（`flex:1 1 0` + 66px）。左＝语言滑块（简/繁，62×26 胶囊 + 弹性滑块）；右＝明暗滑块（太阳⇄月牙用同一枚 SVG：`mask` 里一枚挖圆平移进来变月牙，光芒同时缩放淡出，位移/透明度全走 transition）。删除旧 `.zk-set-lang` 下拉与其死样式。
- **切换动画**：切主题时给盒子加 `.zk-nc-switching`，0.52s 亮度回落再复原（像灯被拨了一下）。
- **切主题询问**：`.zk-ask` 弹层（shadow 内、跟随主题）问「划词搜索条要不要跟着变」，可选「一起跟随 / 保持原样」+「不再提示」；勾过后写 `uiThemeAskOff=true`，之后静默同步 `selSearchTheme.mode`。⚠ 点复选框本身不当确认（只有点动作按钮才落盘）。
- **对比度**：浅色文字 `#0f2740`/`#3b5170`，输入框/下拉 1px 可见描边，开关 off 轨道 `#c3d3e3` + 内阴影，`input[type=checkbox]` 统一定制（选中蓝底白勾）。
- **自绘下拉**：原生 `<select>` 只当数据源（`opacity:0` + `pointer-events:none` 盖在胶囊下），外面加 `.zk-sel-face` 胶囊 + `.zk-sel-pop` 圆角浮层（fixed 定位、跟随令牌、上方放不下自动翻到上方）。支持 Enter/Space/↑/↓/Esc、点面板空白收起；其它代码改 `select.value` 时胶囊文本同步。包装前先离屏建好 DOM，异常时回滚并恢复原生控件。
- **底栏**：`#zk-set-settings-footer` 改圆角浮动卡片（margin + border-radius + 玻璃 + 阴影），不再与内容区单线拼接。
- **夜间补全**：子面板（`.zkss-etable` / `.zkss-note` / `.zkvd-row` / `.zkcs-note` / `.zkcs-notice` / `.zk-dash*` / `.zk-aw-info` / 名单条目）与帮助弹层、确认框、云备份管理、配置历史全部补了夜间配色；body 级浮层走 `html.nc-ui-dark`（由 `ncSyncUiDarkClass()` 同步），shadow 内浮层走 `:host(.zk-nc-dark)`。
- **删除写死的版本摘要**：`const updates = [...]`（近三版摘要）每版都要手工维护，已连同 `updHtml` 一起删除；第三瓣换成「本页体检」：`renderDiag()` 实时读 `HOST` / `ncSiteScopeMode()` / `NC_EARLY_EXIT` / 布尔开关数 / `STATS` / `NC_ERR_LOG`，输出状态条 + 键值表 + 最近 3 条错误，附「复制诊断报告」（复用反馈链路）与「完整更新日志」入口；打开时刷新，繁中经 `tTree` 补转。
- **关于页排版**：圆心详情从四段长文改为「导语 + 三张信息卡（能做什么 / 不会做什么 / 遇到问题）」，条目化、左对齐、删冗余；三扇形标签改为沿切线（`mid+90` 归一化到 (-90,90]）斜排。

**🐞 修复**
- **批量按钮全部失效**：`.zk-set-list-action-btn`（导入预设敏感站点 / 清空名单）渲染在 `.zk-set-group` 卡片里，而绑定代码用 `blBox.querySelectorAll`（`.zk-set-list` 内部）查 → 命中 0，点了毫无反应。改为 `blBox.closest('.zk-set-group')` 作用域。
- **繁体大面积漏转**：`S2T_FROM/TO` 只有 286 字手挑表，大量常用字（与 键 项 拦 势 馈 据 滤 划 脱 项…）没映射，且 `明暗` 繁简同形被误认为没转。改用 OpenCC(cn→tw) 离线生成的 **2741 字完整表** + 12 条词级例外（复制→複製 / 重复→重複 / 复选→複選 / 回复→回覆 / 复杂→複雜 / 干净→乾淨 / 签名→簽名 / 软件→軟體 …）；`tTree` 补 `title/aria-label/placeholder` 转换、跳过用户名单原文；新增 `twText()` 给「tTree 之后才渲染」的文本（底部统计、看板切天数、关于详情标题）兜底。
- **面板继承站点样式**：Shadow DOM 只隔离选择器，`text-align` 等可继承属性会从宿主漏进来（站点 `body{text-align:center}` 会让关于页整段居中错位）。面板根加 `text-align:left;direction:ltr;text-indent:0` 重置。
- **`scrollIntoView` 兼容**：jsdom / 部分内嵌 WebView 没有该方法，`.zkss-add` 里包 try/catch，避免中断后续 focus。

**✅ 验证**
- **45 个 verify 脚本 / 1211 项断言 / 失败 0 / EXIT=0**
- 新增 `verify_panel_theme.js`（48 项）、`verify_i18n_tw_coverage.js`（13 项）、`verify_ui_controls.js`（27 项）
- 变异测试 14 条（令牌漏配 / 等分失效 / 宿主不挂类 / 命名空间写错 / 复选框当确认 / 字表失效 / 动态文本不转繁 / 批量按钮作用域回退 / 下拉不写回 …）全部 RED
- 300+ 控件逐个点击审计（`_audit_buttons.js`）：除已修的批量按钮外，全部产生可观测副作用

### v1.4.0（2026-10-28）

linux.do 定版 + 精简 + 配置持久化修复。

**🔧 变更**
- 移除 `ldTopicMeta`（话题列表创建时间 / 回复数）及其 `ncLinuxDoTopicMap` / `ncCountFromText` / `NC_LD_DIAG` 依赖：`#data-preloaded` 结构不稳定，维护成本高于收益。
- 保留 `ldFloor`（帖子内楼层号）、`ldNewTab`（标题新标签）、`ldQuickShare`（快捷分享），三个开关默认关闭。
- 其余同 v1.3.3：`cleanCopy` 真实现、`autoUnfold`、`linkBypass`。
- **配置持久化修复**：`pagehide` / `visibilitychange` / `beforeunload` 落盘监听前置到配置模块（不再依赖启动阶段 6c）；开关 / 下拉 / 滑块松手立即 flush；关标签页前对聚焦控件补发 `change` 再落盘；关闭面板本身也落盘；云同步自动下载仅在云端明显更新时执行，本地无 `modifiedAt` 或本地不早于云端一律跳过，本地较新时下次启动补传；新增 `GM_addValueChangeListener` 跨标签页更新缓存，避免旧值回写。
- **审计 / 优化**：`processCSDN` 200ms + `csdnExpand` 400ms、`processLinuxDo` 300ms、`passiveAdBlock` 400ms 节流；错误环 `ncErrArgs` 只留前 3 参数 × 300 字；`kgpingbis` / `kgpingbiiframe` HELP 从「移除」改「隐藏」；About / `@description` 补 linux.do。

**✅ 验证**
- **43 个 verify 脚本 / 1152 项断言 / 失败 0 / EXIT=0**
- `verify_linuxdo.js` 22 → 17（去掉 `ldTopicMeta` 3 项 + preload 2 项）
- 新增 `verify_config_sync.js` 5 项（落盘监听 / 立即 flush / 云下载保护 / 跨标签页 / 关闭面板落盘）

### v1.3.3（2026-10-28）

功能增强版 —— 修好一直空转的「干净复制」，并新增「通用自动展开」「外链直达」两个默认关闭的开关。

**🆕 新增 / 修复**
- **干净复制（修复）**：`initCleanCopy` 原先只挂了一个空 copy 监听 + 一个没人消费的 `data-clean-url`；现新增 `ncCleanCopiedText()`：按行去掉末尾「本文链接 / 来源 / 作者 / 版权声明」等声明，并清掉 URL 里的 utm / spm / share_token 等追踪参数；在 copy 捕获阶段只改写 `text/plain`，HTML 保持原样。
- **通用自动展开（新，默认关闭）**：新增 `AUTO_UNFOLD_SITES` 站点表 + `processAutoUnfold()`，先覆盖简书（`.collapse-tips` / `.collapse-free-content`）、知乎（`.ContentItem-rightButton` / `.RichContent-inner--collapsed` + mask CSS）、B站专栏（`.opus-read-more` + 移除 `limit` / `show-read-text`）；CSDN 仍由 `csdnExpand` 负责，避免重复点击。
- **外链直达（新，默认关闭）**：新增 `ncDecodeRedirect()` + `processLinkBypass()`，在 `link.*` 域名读取 `target` / `url` / `to` 参数并 `location.replace`；拒绝 `javascript:`。
- **linux.do 增强（新，四个开关默认关闭）**：`processLinuxDo()` + `ncLinuxDoTopicMap()`：话题列表显示创建时间 / 回复数（读 `#data-preloaded` 的 `created_at` / `.topic-replies`，按 URL 缓存，零额外请求）；**帖子内每个回复显示「N 楼」**（`ldFloor`，读 `data-post-number`，楼主显示「楼主」）；标题新标签打开（`target=_blank` + `noopener`，并在 document 捕获阶段绕开 Ember link-to）；帖子页 `nc-ld-share` 分享按钮（标题 / 分类 / 标签 / 链接，`ncCopyText`）。
- 面板新增「① 通用防护」两项 + 「⑧ linux.do 增强」四项，`HELP` 各补「作用 / 原理 / 维护 / 风险」四段；`cleanCopy` 的 HELP 同步改为真实实现。

**✅ 验证**
- **41 个 verify 脚本 / 1090 项断言 / 失败 0 / EXIT=0**
- 新增 `verify_clean_copy.js` 15 项、`verify_linuxdo.js` 18 项
- `verify_i18n.js` S12 放宽（干净复制后新增了两个开关，组尾距离变大）

### v1.3.2（2026-10-27）

CSDN 白屏根因修复 + 反馈报告脱敏。

**🐞 根因（2026-10-27 确认）**
- `injectCSS` 的「通用悬浮」块有一条全站规则 `div[class*="-ad-"],div[class*="_ad_"]{display:none!important}`。
- CSDN 正文外层是 `div.main_father.simple-column-page.has-ad-slots`，class 含 `-ad-`；该规则把整篇文章 `display:none`。
- 规则**不受任何开关控制**，所以用户「关掉全部 CSDN 设置仍白」。
- 诊断路径：`#nc_skip=css` 能恢复、`#nc_skip=obs/net` 不能 → 锁定 CSS；jsdom 在真实 SSR DOM 上匹配到 `has-ad-slots` 外层（`hasCV=true`、text=30190）。

**🔧 修复**
- 删除 `div[class*="-ad-"]` / `div[class*="_ad_"]` 宽泛规则，只保留 `div.ad-container`。
- `csdnAd` CSS 不再包含 `.readall_box` / `.hide-article-box` / `.recommend-box` / `.article-info-box` / `.recommend-right`；`processCSDN` 的 csdnAd JS 列表同步移除。
- `passiveAdBlock` 三处 `.remove()` 改 `ncHideEl`（iframe / 大图 / 固定层），并加内容守卫：面积 > 视口 30% / 实质文本 > 80 字 / 含 `#content_views` 等一律跳过。
- `initRequestInterceptor` 在 `csdn.net` 直接让行（CSDN 反广告拦截会因 kunpeng 请求被拦而隐藏正文）。
- **SPA 相关推荐 / 搜索栏**：`csdnExpand` 增加 `.btn_mod` / `.btn_comment_readmore`，每个按钮用 `data-nc-opened` 只点一次；URL 变化后重试 400/1200/2500ms；`ncUserTyping()` 在输入框 / 搜索栏聚焦时跳过程序化点击，修复「滚到底部点搜索栏，展开又收回」。
- 新增 `#nc_skip=css/obs/net/video/sel/copy` 排查开关；反馈报告新增「正文容器 display/text」与 `NC_PASSIVE_DIAG`。
- 脱敏补漏：`captchaPreciseId` / `captchaYunmaDev` / `captchaApiFast` / `captchaApiPrecise` / `selSearchTrans.customUrl` / `proxyUrl` / `cloudSync.server` → `***`。

**✅ 验证**
- **39 个 verify 脚本 / 1053 项断言 / 失败 0 / EXIT=0**
- `verify_csdn_safe_hide.js` 8 → 18（H1~H18）；`verify_feedback_diag.js` 10 → 17（F1~F16 + F4b）
- 变异：加回宽泛 `-ad-` 规则 → H17 红；CSDN 网络拦截让行 → H16 红；等

### v1.3.1（2026-10-26）

反馈渠道接线版 —— 把 v1.3.0 的反馈面板接到 Gitee 与腾讯问卷，两条一键路径。

**🔗 反馈渠道**
- `NC_FEEDBACK.gitee` / `NC_FEEDBACK.form` 填入实际地址（Gitee 新建 Issue / 腾讯问卷）。
- 新增 `ncBuildDiagnostics({ compact: true })`：≤1200 字精简诊断（版本 / 页面 / UA / 关键开关 / CSDN 诊断 / 页面体检 / 最近 5 条错误），适合问卷粘贴与 URL 预填。
- 新增 `ncBuildFormUrl()`：按腾讯问卷预填语法拼 `Q4` 网址 / `Q5` 浏览器 / `Q6` 管理器 / `Q7` 版本 / `Q8` 开关 / `Q9` 精简报告；文本走 `encodeURIComponent`；编码后超 1600 字符则省略 `Q9`，改用剪贴板。
- 新增 `ncOpenFeedback(channel)`：`gitee` = 复制完整报告 + 打开 Gitee；`form` = 复制精简报告 + 打开问卷。
- 反馈区两个按钮改为「🔗 完整报告 → Gitee」「📝 精简报告 → 问卷」，并加提示文案。
- 回归：`verify_feedback_diag.js` 新增 F11~F15（地址 https / 无敏感串 / compact / 预填 Q4~Q9 / 一键按钮）。

**✅ 验证**
- 全量回归 **39 个 verify 脚本 / 1036 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）
- 变异测试 M1（表单地址改 http）→ F11 红、M2（去掉 compact）→ F15 红

### v1.3.0（2026-10-26）

问题反馈 / 诊断报告版 —— 新增「本地生成的诊断报告 + 多渠道反馈」，零自动上传、自动脱敏。

**🆕 问题反馈 / 诊断报告**
- **关于页反馈区**：描述现象 → 自动收集版本 / 环境 / 开关快照 / 最近 50 条错误 / 页面体检（含 CSDN 选择器诊断）→ 复制或下载 .txt。
- **截图粘贴预览**：Win+Shift+S / Cmd+Shift+4 截图后在反馈区 Ctrl+V 预览、下载；脚本无法读取屏幕（浏览器安全）。
- **隐私**：报告只在本机生成，**不做任何 GM_xmlhttpRequest / fetch 上传**；`ncSafeCfgSnapshot` 对 password / token / key / secret 脱敏，名单只报条数；URL 默认只留 origin+pathname。
- **渠道**：`NC_FEEDBACK.gitee`（Gitee Issues）/ `NC_FEEDBACK.form`（腾讯问卷等匿名表单）为主，GitHub / GreasyFork 作海外备选；未配置时按钮提示「尚未配置」，「复制报告」始终可用。
- **兜底**：油猴菜单新增「🐞 复制诊断报告」（`feedbackCopy`），面板打不开也能复制。
- **错误环**：启动时 hook `error` / `unhandledrejection` / `console.error` / `console.warn`，最多 50 条；跨域脚本可能只得到 `Script error.`（浏览器安全限制）。

**✅ 验证**
- 全量回归 **39 个 verify 脚本 / 1031 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）
- 新增 `verify_feedback_diag.js`（10 项：脱敏 / 零自动上传 / UI / 菜单 / 截图入口）
- 因新增第 6 个菜单项，`verify_menu_labels.js` 的菜单计数断言 5 → 6；`verify_i18n.js` 增加 `menu.feedbackCopy` 的 en 文案

### v1.2.2（2026-10-26）

CSDN 白屏修复版 —— 不新增功能，只修一个「打开 CSDN 首页整页空白」的回归。

**🐞 CSDN 首页白屏（用户复现）**
- **症状**：CSDN 首页在开启全部 CSDN 功能后，顶部导航正常、正文信息流整块空白；控制台报 `Uncaught HierarchyRequestError: Failed to execute 'appendChild' on 'Node': This node type does not support this method.`
- **定位**：报错来自 CSDN 自己的 Vue 2 运行时（`csdnimg.cn/release/cmsfe/public/js/chunk/common.*.js` 的 patch `appendChild`）。Vue 的虚拟 DOM 仍引用着被外部脚本 `remove()` 掉的真实节点，patch 时就会把子节点 append 到已失效 / 文本节点上 → 抛错 → 信息流渲染中断。
- **修复**：新增 `ncHideEl(el)`，CSDN 广告 / 登录浮层 / kunpeng iframe 一律改为 `display:none!important` 非破坏性隐藏，不再 `remove()`；并把语义模糊的 `.template-box` 从 `csdnAd` 的 CSS 与 JS 列表中移除（它可能是首页 / 文章的信息流模板，误删即整块空白），仅在 `csdnClean`（限定 `blog.csdn.net` 文章页）保留。
- **验证**：新增 `verify_csdn_safe_hide.js`（8 项：`ncHideEl` 行为 + `processCSDN` 无 `remove()` + `csdnAd` 不含 `.template-box` + `csdnClean` 作用域）；变异测试 M1（退回 `remove()`）→ H4 红、M2（CSS 加回 `.template-box`）→ H7 红。

**✅ 验证**
- 全量回归 **38 个 verify 脚本 / 1021 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）

### v1.2.1（2026-10-26）

用户反馈修复版 —— 只含两项用户直接感知的 bug 修复，**不含新功能开关**。

**🐞 CSDN 设置面板「闪烁一下就退出」修复（用户反馈）**
- **症状**：CSDN 页面开启全部 CSDN 功能后，点油猴菜单「打开控制面板」，面板刚弹出就闪退消失。
- **根因**：`openSettings` 的「点击外部关闭」监听（`onDocClick`，挂在 `document` 捕获阶段）把**本脚本自己的合成点击**也判成「点了面板外部」。在 `cfg.csdnExpand` 开启时，`processCSDN` 会对 CSDN 的「展开阅读 / 展开代码块」按钮做 `el.click()`；该**程序化点击**冒泡到 `document` 捕获阶段，被 `onDocClick` 误判 → 立即 `close()` 移除面板。时序上：面板挂载 → `setTimeout(0)` 绑定 `onDocClick` → 120ms 后 MutationObserver 触发 `processCSDN` 自动点击 → 面板被关，表现为「闪一下就退」。
- **修复**：`onDocClick` 开头加 `if (e.isTrusted === false) return;` —— 只有**真实用户点击**（`e.isTrusted === true`）才触发外部点击关闭；脚本自身的 `.click()` 一律忽略。该守卫同时覆盖贴片广告跳过、验证码识别等其它场景的程序化点击，不会再误关面板。
- **验证**：`verify_settings_keep_open.js` 重写为两套场景（常规站点 + CSDN 文章页 `csdnExpand:true`），端到端复现「`processCSDN` 自动点击不关面板」（B2）；`verify_e2e_v1.js`、`verify_nc_modal_keep_open.js` 的「外部点击关闭」断言同步改为经面板内关闭按钮验证关闭能力（jsdom 无法伪造 `isTrusted=true` 的真实点击）。

**🐞 划词工具条 / 翻译卡「贴边溢出屏幕」修复（用户反馈）**
- **症状**：在页面最左侧（或最右侧）选中一个词 / 一个网址时，划词工具条最开头的按钮看不见 —— 半个工具条被推到屏幕外。
- **根因**：`placeBar` 把工具条中心点设为 `rect.left + rect.width / 2`，再用 `transform: translateX(-50%)` 居中，但**从未按工具条自身宽度夹取中心点**。选区贴近视口边缘时 `centerX - barWidth/2` 为负 → 左侧溢出；翻译卡 `transPanel` 的 `left` 有同样缺陷。
- **修复**：新增顶层纯函数 `ncClampBarX(centerX, barW, viewportW, margin)`，按浮层实际宽度（`offsetWidth`）把中心点夹到 `[barW/2+8, clientWidth-barW/2-8]`；浮层比视口还宽时居中；`offsetWidth` 取不到（未布局）时原样返回、保持旧行为。工具条与翻译卡均接入。
- **验证**：`verify_selection_debug_b04.js` 新增 C1~C9（纯函数白盒单测 + `placeBar` / `transPanel` 调用点性质断言）；变异测试 M1（placeBar 退回不夹取）→ C8 红、M2（`minCx` 失效）→ C3/C6/C7 红。

**✅ 验证**
- 全量回归 **37 个 verify 脚本 / 1013 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）
- **2 组变异测试全部被捕获**（M1 / M2 划词夹取）

### v1.2.0（2026-09-16）

工程护栏 + 可观测性版 —— 主题是「把已经做对的事变成不会退步的事」。本版**不含新功能开关**，改动集中在死代码清理、迁移链到期收口、重复实现收敛、静默失败补日志与**回归基建修补**。

**🧹 死键与死代码（审计 P2-1 / P2-2）**
- **`legalAcceptedVersion` 只写不读**：法务门控在更早版本就已改为「免责声明**正文指纹**」判定（`legalAcceptedHash`），该键再也没有读取点，但两处同意入口仍在写。本版删除两处写入，并把 `verify_legal_gate.js` 的 F 用例从「写入版本号」改成**反向断言**（`!('legalAcceptedVersion' in st)`）——「无」也必须被断言，否则只挡「多了」不挡「少了」。
- **`allconfigtime` 只写不读**：B4 引入 `configVersion + MIGRATIONS` 后它就是纯遗留。
- **`CONFIG_TIME = 1770000000` 魔法数**：唯一使用点就是上面那行写入，随之删除。

**🔗 配置迁移链到期排空（1.2.0 发版阻断项）**
- `MIGRATIONS[0].deprecateAt = '1.2.0'` 是 B4 设计里**由作者自己声明的清理期限**，而 `verify_b4_config_migrations.js` 的 S6 会强制「不存在 `deprecateAt <= 当前 VERSION` 的滞留迁移」。升到 1.2.0 时 S6 立刻判红 —— 这是设计使然，不是 bug。
- 处置：**排空 `MIGRATIONS` 为空数组**（机制与守卫完整保留，供以后追加），并把该迁移里唯一有价值的动作（删除老配置中再无代码读取的 `baiduAutoNext`）**降级为启动时的无条件幂等清理** —— 否则从 ≤1.0.7 直升 1.2.0 的用户会永久残留该字段。
- **顺带修一个真实缺陷**：原 `ncRunMigrations` 只在「有迁移执行」时才回写版本号；链排空后老配置的 `configVersion` 会**永远停在 0**，每次启动都白跑一遍「从 0 找迁移」。现补兜底：`if (v < CONFIG_SCHEMA_VERSION) { v = CONFIG_SCHEMA_VERSION; ran++; }`。
- S6 从 `deps.length > 0 && overdue.length === 0` 放宽为 `overdue.length === 0`（空数组是合规终态）；同时把 S3b/S3c 改为**条件校验**（非空时才校 `from/to`/`deprecateAt`），避免把「正常排空」误判成「写坏了」—— 既挡滞留，也挡写坏。

**♻️ 重复实现收敛**
- **P2 响应体提取**：`String(r.responseText == null ? (r.response == null ? '' : r.response) : r.responseText)` 在云同步各 provider 里 **6 处逐字节重复**（Gist / Dropbox / OneDrive / GDrive / Yandex）→ 统一为顶层 `ncReadResp(r)`，**表达式逐字节照搬**，属纯提取、零行为变更。
  - ⚠ 收尾时踩了一个小坑：helper 体内也含同一字面量，直接 `replace_all` 会**自我递归**；正确做法是按 `content:` / `content =` 前缀分两次替换，再把「表达式只剩 1 处」写成反向断言。
- **H6 云端 JSON 解析加固**：审计只举了 GDrive 两处，逐条复查后**实际是 10 处**（Gist×4 / Dropbox / OneDrive / GDrive×3 / Yandex）。新增顶层 `ncSafeJsonParse(text, fallback)`：无 fallback 时抛出**可读错误**（「服务器返回内容不是合法 JSON（可能被网关拦截或授权已失效）」），传 fallback 时回退默认值。这些调用点原本都包在 `try/catch → { ok:false, msg:e.message }` 里，只是用户会看到 `Unexpected token < in JSON at position 0` 这种无从下手的报错。

**🩺 关键静默失败补日志（H3，5 处）**
- 广告选择器计数、云同步失败状态落盘、云同步失败提示发送、云同步成功状态落盘、B站 `player/v2` 响应改写。
- 全部走 `dbg()`（`window.__NC_DEBUG` 开关），正常运行零输出、零开销。选这 5 处的标准是「失败后用户完全无感且后果有语义」。

**❌ H4「console 噪声收敛」经核实后撤销**
- 审计称「32 处 `console.*` 无守卫，少数在正常流程可命中」，并点名 L1820 / L8245。**逐条扫描 45 处 `console.*` 后结论是：全部位于 `catch` 块内（错误上报，应当保留），或位于显式调试函数 `window.__NC_SEL_DEBUG()` 内（调用它本身就是调试动作）。** L1820 在「modal 未挂载」失败分支且紧邻 `zkAlert`（用户已被告知），L8245 明确在 catch 内。
- 按 PLAN 自己写的规则「catch 内 `console.error` 保留」，本项**无合法整改目标**，故不做 —— 记录在此以免下轮重复怀疑。

**❌ P3「ncAllVideos 空结果绕过缓存」经回归后回滚**
- 原判断：守卫 `if (NC_VIDEO_CACHE.list.length && now - t < 600)` 在无视频页恒不成立 → 每次调用都全量扫 DOM，「正是缓存要防的事」。
- 实际动手简化成「只看时间戳」后，`verify_v110_video_speed_ui.js` 的 **R5b 立即报红**（插入 `<video>` 后悬浮球未脱离待机）。根因：**`list.length` 不是疏忽，而是刻意的「不缓存负面结果」** —— 页面初始无视频、稍后由 SPA / 懒加载插入 `<video>` 的场景下，缓存空结果会让悬浮球延迟最长 600ms 才出现。缓存存在的意义本来就是给「确认有视频」的滑块拖动路径加速。
- 已回滚，并在新增守卫里加 **A11 反向断言**把它钉死，防止以后又被「顺手优化」掉。

**🧪 回归基建修补（本轮最值得记的一条）**
- 发现 **21 个守卫脚本硬编码主脚本路径、不读 `NC_SCRIPT` 环境变量**。后果：变异测试写出的 `__mut.js` **永远不会被这些守卫读到**，它们一直在对**干净源码**做断言 → 恒绿，等于没有防线。（自己踩到时表现得很迷惑：变异明明落盘了、`from` 也确实命中，S7/S8 却仍然 ✅。）
- 现已全部接入 `NC_SCRIPT` 覆盖，整套 37 个守卫**真正可变异测试**。
- 新增 `verify_v120_cleanup.js`（27 项）：覆盖本版全部改动，含静态反向断言 + 运行期行为测试（用大括号配平从源码里抽出 `ncReadResp` / `ncSafeJsonParse` 直接跑，避开脆弱的块注释正则）。
- 断言计数时注意：`ncReadResp(r)` 的**函数声明本身**也含该字样，计数须用后行断言 `(?<!function )` 排除定义式。

**✅ 验证**
- 全量回归 **37 个 verify 脚本 / 997 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）
- **14 组变异测试全部被捕获**，其中 3 组为跨守卫（验证 b4 的 S7/S8 与 legal_gate 的 F 反向断言确实会红）

### v1.1.0（2026-09-15）

功能增删评审（REVIEW_feature_scope.md）落地版本：**修掉死功能与不实宣传、收敛冗余开关、新增站点级覆盖与选择器自救通道**，并把配置迁移从「魔法数时间戳」换成语义化版本链。

**修正 / 收敛**
- **A1 视频倍速（死功能）**：`initVideoSpeedControl()` 早已写好并接入启动列表，唯独缺面板控件 → 用户永远改不了。本版补齐 UI，并在后续追加中把固定档 `select` 升级为 **0.1x~16x 滑块（1x 居中）+ 可拖动悬浮球**。
- **A2 内容屏蔽 10 开关 → 1 总开关**：十个按站开关共用同一份名单，先收敛为 `contentBlock` + 生效站点多选，随后（见「同版追加」）进一步把多选也去掉 —— 只剩 `contentBlock` 一个布尔开关，站点例外改由每个开关行通用的「仅本站」覆盖承担。
- **A3 被动扫描三态**：`passiveGlobal` 并入 `kgpingbis`（关闭 / 仅已知站点 / 全站），消除两条说明自相矛盾。
- **A5 Roadmap 清理**：移除 3 项已交付条目，「更多护眼预设色」收窄为补 3 色。
- **A6 验证码模块冻结扩张**：显式标记为冻结，不再新增引擎 / 站点规则，并加回归断言锁住开关数不再增长。

**新增**
- **B2 站点级功能覆盖 `siteOverrides`**：把暗黑那套「按站点让行 / 强制接管」泛化为通用机制，面板每个布尔开关行右侧新增「仅本站」按钮 —— 把粗粒度「整站暂停」细化为「按功能按站点」。
- **B3 规则选择器外置 `customSelectors`**：站点改版导致内置选择器失效时，用户可自行补充选择器（分号或换行分隔），无需等作者发版。
- **B4 配置 schema 版本 + 迁移链**：`CONFIG_TIME` 魔法数 → `configVersion` + `MIGRATIONS`，每条迁移带 `deprecateAt`，到期由回归断言强制清理。
- **B5 护眼时间表**：按起止时间自动开关护眼模式，支持跨午夜，每分钟检查一次。
- **B8 「宣传 ↔ 实现」一致性断言**：双向挡住「README 宣传但面板没有」与「面板有开关但代码没读」。

> 说明：评审表把 A4（`scopeWhitelist` 合并为互斥模式）排在 v1.2，但本版在「同版追加」里已把它一并落地 —— 站点级最终收敛为「一个模式单选 + 一份名单」，见下方「名单管理结构性收敛」。
> 本版同样把评审表排在 v2.0 的 **B6**（统计汇总）提前落地 —— 见下方「同版追加」里的「关于」页数据看板。
> 本版还顺手把 **B7** 一并做掉：版本史从 README 抽出为**独立的 [CHANGELOG.md](CHANGELOG.md)**（即本文件），README 只保留最近两版的用户向摘要。

**同版追加（反馈驱动 · 逐条闭环）**

- **视频倍速 UI 重做**：固定档下拉 → **0.1x~16x 滑块横条**（0~100 分段指数刻度，1x 精确落在正中，两端各自等比：左半 0.1x→1x、右半 1x→16x）+ 右侧「1x」一键复位（指数刻度下想手动拖回正中很难拖准）。拖动即时写 `playbackRate`，松手才落盘。
- **视频倍速悬浮球**（新开关 `videoSpeedFloat`，默认关）：自动识别本页是否在播放视频，有则在页面角落生成**可拖动**小球，点开可调倍速 / 切静默播放 / 恢复 1x；位置用独立 GM key 记忆（不污染 `allconfig`）。**检测穿透 shadow DOM** —— B站等自研播放器把 `<video>` 放在影子根里，`document.querySelector('video')` 返回 null，这正是「开了悬浮球却看不到」的根因；同时排除脚本自身 UI 里的 `<video>`（帮助弹层 / 关于列表会渲染 `<video>` 字样），否则无视频页面会被误判为有视频。
- **内容屏蔽归位**：⑧ 内容屏蔽（关键词 / 网址）整节从「净化增强」迁到**「名单管理」**，与该页③内容级名单同框 —— 此前开关与名单分居两处，用户按直觉去名单管理找开关会扑空。
- **名单管理结构性收敛（A4 提前落地 + A2 收尾）**：这是本版最后一轮、也是动得最深的一轮。原先「名单管理」里有 **6 份表单 + 4 个总开关**，其中站点级那一对是**方向相反的两份名单 + 两个开关**（「暂停名单」= 别在这些站跑 /「仅在名单内网站运行」= 只在这些站跑），开关还分居两个分类。现收敛为：
  - **站点级**：`siteScopeMode`（全部站点 / 仅名单内生效 / 名单内不生效）+ **一份** `siteScopeList`，同一张卡里选模式、编名单；
  - **内容级**：内容屏蔽只剩 `contentBlock` **一个布尔开关**，`contentBlockScope`（生效站点多选）删除 —— 站点例外统一交给每个开关行右侧的「仅本站」按钮（`siteOverrides`），与全站暂停各司其职；
  - 净结果：名单 **6 份 → 5 份**（`listSections` 实测 5 个 key，见 `verify_pause_merge.js` S10 / I4），面板里 `{ k: 'xxx' }` 形态的开关条目 **73 个**、`DEFAULT_CONFIG` 布尔叶子 **64 个**。
  - **不做配置迁移**：合并后的旧字段（`whiteurl` / `scopeWhitelist` / `perfWhitelist` / `scriptBlacklist` / `scriptBlacklistEnabled` / `contentBlockScope`）与其迁移代码**整体删除**，`verify_pause_merge.js` 逐条断言「源码中已零引用」。
  - 同步维护：急救面板解封动作改为**按当前模式决定方向**（`only` → 把本站加入名单 / `except` → 把本站移出名单）、状态卡把两行口径并成一行「站点级生效范围」、菜单「🚫 只暂停当前网站」现在会**连带把模式切到「名单内不生效」**（原先只加名单不改模式，等于点了没反应）。
- **修复一处真实 CSS 破损**：`.zk-set-select,.zk-set-text{padding:8px 12px;` 未闭合，把其后 `.zk-set-sites` / `.zk-set-site` 两条规则及 select 自身的 border/radius/max-width 全吞进同一声明块，浏览器按错误恢复**整段丢弃** → 面板下拉/输入框没有边框、没有统一宽度，这是「菜单各项对不齐」的直接元凶之一。
- **对齐全量收敛**：① 面板右列控件固定宽 + 行尾留 68px 固定「仅本站」通道（布尔行放真按钮、非布尔行放等宽空槽）→ 所有行控件右边界落在同一条竖线上；② 两个自定义面板（划词搜索 / 云同步）表单标签改为**固定 132px 左对齐列** + 控件固定 320px 列，长标签不再把控件推到不同起点；③ 侧栏界面语言选择器由原生箭头改为**自绘箭头**暗色胶囊（原先系统浅灰三角在深色侧栏上很割裂）。
- **帮助弹层 HTML 转义（安全 + 排版双修）**：HELP 文案里会写 `<video>`、`<div.serp-item>` 这类技术写法，未转义直接进 `innerHTML` 会被解析成**真实的空 `<video>` 元素**（约 300×150），并把紧随其后的整段说明吞成它的 fallback 内容 —— 表现就是「点开帮助后一大片空白 + 排版错乱」。现 `openHelp()` 与「关于」功能索引统一走 `escHtml`。
- **「生效站点」竖排（排版错乱）根因修复**：这类行的说明列宽走 `flex:1`（展开为 `flex:1 1 0%`，**basis 为 0**，靠 grow 抢空间），而站点点选组（`.zk-set-sites`）的 basis 是 max-content≈570px —— 同排时剩余空间被点选组吃光，说明列被压成 **0 宽**，中文于是逐字换行成竖排（「生」「效」「站」「点」各占一行）。修法：该类行加 `zk-set-row-sites` 标记类，CSS 改为「说明在上、选项独占下一行」。已用 Chrome headless 实测：修复前 `info w=0` → 修复后 `w=595`。（同版最后一轮的「名单管理结构性收敛」进一步把站点点选控件**整族删除** —— `contentBlockScope` 不再存在，这条修复改由反向断言「sites 控件族已彻底移除」锁住。）
- **B6 「关于」页数据看板（统计汇总落地）**：在「关于」页**最上方**腾出一整块看板，把拦截数据可视化。四张关键数字卡（累计拦截 / 今日拦截 / 节省时间估算 / 覆盖站点）+ **扇形图**（按拦截来源四维度：网络请求 / 样式规则 / 视频贴片 / 脚本注入，含圆心总数与带百分比的图例）+ **折线柱状趋势图**（近 7 / 30 / 90 天可切换，横轴日期、纵轴自适应刻度）。
  - **数据层重做**：原先 `STATS` 里 `css` 与 `skippedAds` **对同一次拦截各加一遍**（重复计数），`dom` 只被签到功能写过（语义完全错位）—— 本版统一收敛到**唯一计数入口** `ncBumpStats(n, kind)`，四处（`STATS` / `totalBlocked` / `siteBlocked` / 按天序列）一次分发；`STATS` 收窄为 `{ skippedAds, byKind }`。
  - **按天序列**：新增独立 GM key `adc_stats_daily_v1`（不污染两个旧的扁平计数 key），**90 天滚动保留**，写入路径与启动路径都会裁掉超期键、非法日期键（如 `2026-02-31`）与 `n` 非数字的脏记录。
  - **节省时间口径**：取 **3.5 秒/条** —— 业界 attention residue 研究常引 2~4 秒区间（关一个广告的发现→移动→点击→关闭→转回注意力，部分还带无法跳过的倒计时），取偏保守值。面板**明确标注「估算值」并给出区间出处**，不假装是精确测量。
  - **纯内联 SVG 自绘**：单文件脚本不能引外部图表库，扇形用 `path` + `A` 弧指令、折线用 `polyline` + `viewBox` 自适应宽度，风格与暗色面板统一（浅蓝渐变卡）。
  - **两种边界态都有话术**：初次使用（无任何数据）显示「等待数据填充」+ 引导说明，并**不出空扇形 / 空折线**；`adStats` 关闭时给降级提示而非空白或报错。
  - **切换天数只重绘看板**：天数按钮只绑定在看板 host 内、复用同一节点重写 `innerHTML`，**不重建整个「关于」页**（功能索引 82 项与滚动位置都不受影响）。
- **新增回归** `verify_b6_stats_dashboard.js`（118 项）：静态 S1~S44 锁数据层 key / 四维度 / 旧字段**彻底移除** / 看板挂载点在简介之上 / 空态与关闭态话术 / i18n 与 HELP 对齐；运行时 R1~R8 覆盖空态、有数据态（4 卡 + 4 扇区 + 圆心两行 + 图例百分比 + 折线 + 默认近 7 天）、节省时间换算（1200×3.5s → 「1 小时 10 分」）、90 天滚动与脏键裁剪、跨天补零不画崩、天数切换幂等、关闭降级，以及**数据层白盒契约**（`ncBumpStats` 三处同步 / 维度归类 / 非法 kind 兜底 / 非正数忽略 / 序列补 0 / 写入路径裁剪）。
- **新增回归** `verify_v110_video_speed_ui.js`（41 项）：滑块映射/复位、悬浮球生成与待机态、shadow DOM 穿透识别、**自家 UI `<video>` 排除**、帮助弹层转义，以及「净化增强已无 contentBlock」「sites 点选控件整族已移除」「`contentBlockScope` 已彻底删除」等**反向**断言（含变异测试）。
- **新增回归** `verify_pause_merge.js`（59 项）与 `verify_earlyexit_panel.js`（59 项）：前者锁「一个模式 + 一份名单」的静态结构（旧字段零引用、5 份表单、sites 控件族消失）与三态闸门的运行时行为；后者锁早退站点上「控制面板 / 急救面板」仍可用，含 `only` 模式放行内置已知站点、以及**老配置残留键不再触发早退**的反向场景。

- 全量回归 **36 个 verify 脚本 / 968 项断言 / 失败 0 / EXIT=0**（含口径守卫 `verify_doc_consistency.js` 25 项）

### v1.0.10（2026-09-14）

全项目体检后的清整版 —— 死代码、重复实现、死声明、收口缺口一次清干净，并把一个「写了却从未被调用」的校验函数接回正轨。**无功能增删**，行为保持。

**🧹 死代码与重复实现清理**

- 删除 4 个从未被引用的函数：`currentCloudProviderName`（云服务商名助手）、`ssSaveEngines` / `ssSaveTheme` / `ssSaveTrans`（划词面板旧封装残留 —— 面板实际走 `cfg.selSearchXxx = …; persist()` 就地写）
- **HTML 转义助手唯一化**：原先全脚本有 **2 份 `escHtml` + 3 份 `escAttr` + 1 份 `escapeHtml`**，且覆盖率不一致 —— 云同步那份 `escHtml` **不转引号**，一旦被用在 HTML 属性上下文就会造成属性注入。现收敛为顶层唯一实现（覆盖 `& < > " '` 五个字符），并保留 `escAttr` / `escapeHtml` 两个语义别名，调用点写法完全不变、行为更安全
- 微博视频下载按钮的链接由 `innerHTML` 字符串拼接改为 `a.href` DOM 赋值 —— `tech.src` 是**页面数据**，不转义就拼进 HTML 等于把页面数据当代码执行

**🔗 变废为宝：引擎条目校验接回导入路径**

- `sanitizeEngine()` 此前写在 `initSelectionSearch()` **内部**（局部作用域），而配置导入路径在模块外 —— 够不到，于是它**从未被调用过**
- 现提到顶层并新增 `ncNormalizeImportedConfig()`，在**文件导入 / 云端自动下载 / 云端恢复**三处接线，补齐这道一直缺失的防线（`deepMerge` 对数组是「整体覆盖」语义，`selSearchEngines` 的内容此前完全不校验）
- 校验口径刻意**只要求 `id`、不强制 `name`** —— 面板「➕ 添加」是先生成 id 再让用户慢慢填名字；若强制 name 非空，用户刚加的空名引擎会在导入 / 恢复后被静默删掉

**⏱ 定时器收口：`setTimeout` 纳入统一管理**

- 此前只有 `setInterval` 被收口（pagehide 统一清理），`setTimeout` 不在管理内 —— 行为不对称：页面被 bfcache 缓存再恢复时，陈旧的一次性定时器仍可能触发
- 现新增 `ncTimeout` / `_ncTimeouts`，与 `ncInterval` 同款：同 id 去重、pagehide 统一清理、集中可观测；一次性定时器**自然触发后自我注销**，避免句柄表随 toast 这类高频调用无界增长
- ⚠ 实现要点：管理器**整体前移到脚本顶部**。shadow 手法（`const setTimeout = ncTimeout`）要求「先执行 shadow 再调用」，而文件里存在**顶层立即执行**的 `setTimeout`，原地加会踩 TDZ 直接崩。配置落盘的 400ms 防抖虽也走 `ncTimeout`，但页面隐藏时「阶段 6c」的 `_flushBeforeHide` 会直接 `flushConfig()` 强制落盘，**不丢配置**

**🔑 GreasyFork 元数据合规**

- 删除 `@match file:///*`（脚本无任何本地文件功能，自述是「本地调试用」，属 GF 代码规则里最易被要求删除的一类）
- **保留 `@match *://*/*`**：它不是冗余 —— `yandex.com` 支持与「仅在名单内网站运行」的早退兜底都依赖它
- 删除 2 条死 `@connect`：`baiducontent.com` / `zhihu.com`（全脚本无请求目标；`zhihu.com` 只用于 `inHost` 页面匹配）
- 补 `@match *://*.yandex.com/*`，让 README「内置站点」与实现对齐

**🌐 i18n 补齐**

- 补 `item.t.captchaYunmaDev`：该字段原先只有 `item.d` 没有 `item.t`，导致「云码开发者标识」的**标题**在 en / 繁中下回落简中（同分组其他 10 项都有翻译）

**🐛 其它修复**

- 2 处调试日志加守卫（`[openCloudBackupManager] mounted …`、自动同步跳过日志），改为仅在 `?ncdebug` 下输出
- 5 处关键路径的空 `catch` 补 `dbg()`：配置历史写入、云同步时间戳回写、使用条款同意状态落盘、暗黑归属保存、通用存储写入 —— 这些静默失败会直接表现为功能失效（回滚不可用 / 每次进页面重复征询条款）
- 「20+ 站点」文案改为确定数并与 `@match` 条数对齐；新增「声称数 == 实际 `@match` 条数」的性质断言，以后忘改文案回归会变红

**✅ 验证**

- 全量回归 **27 个 verify 脚本 / 673 项断言 / 失败 0 / EXIT=0**
- 新增 `verify_v1010_hygiene.js`（**33 项**）：A 元数据合规 / B i18n 补齐 / C 死代码清除 / D 校验接线 / E 转义唯一化 / F 定时器收口（含「shadow 必须先于首次调用」的位置断言）/ G 版本双同步
- 新增 `verify_doc_consistency.js`（**17 项**）：把「脚本 / README / UPDATE_NOTES / GREASYFORK_INFO」四处的**版本、发布日期、体积、计数**口径固化成断言。背景就是本版收尾时发现 README 页脚还写着「当前版本：v1.0.8」「最后更新：2026-09-11」，而同一份文档的徽章与更新日志已是 v1.0.10 —— 口径漂移此前没有任何断言兜着，能一直烂下去
- **变异测试 6 处**（还原 `file:///*`、改错站点数、加回死函数、恢复强制 name、注释掉 shadow、加回局部 `escAttr`）→ 断言全部变红

---

### v1.0.9（2026-09-12）

迁移提示代码层整体移除 + 全量排查收尾 —— 把 v1.0.8 的「名单整合迁移说明」过渡逻辑从源码里彻底清掉，并按模块 / UI / 源码 / 文本 / 性能 / BUG 六维度再过一轮。

**🧹 迁移说明代码层删除（v1.0.8 承诺的过渡期满收回）**

- 「净化增强 / 验证码识别 / 性能与高级」三处的黄色迁移说明卡 + 「前往名单管理 →」跳转按钮 + 右侧 ✕，**全部从代码里删掉**，新老用户都不再显示
- 配套删除：老用户身份快照（`ncHadOldLayout` / `ncSnapshotOldLayout`）、生命周期函数族（`ncJumpNoteShouldShow` / `MarkShown` / `Dismiss` / `ncIsOldUser`）、独立状态 key（`ncJumpNoteState`）、`buildGroupNote()` 渲染函数、相关 click 处理器与分类激活计数、4 组 CSS（`.zk-set-section-note` / `.zk-set-navline` / `.nc-jump-x` / `.nc-nav-link` / `.zk-set-note-bar` / `.zk-set-note-spacer` / `.nc-jump-btn`）
- 上一版藏在 `captcha` 分组的「免责声明」原本因与迁移 `note` 字段同名被覆写、从未真正渲染；现改为并入 `captchaEnabled` 的描述并补完整 zh-CN / en 双语（zh-TW 由运行时 s2t 自动转繁）
- 列表分类（`lists`）的冗余分组说明 `note` 一并删掉（信息已分散在各 listSection 的 `desc` 里，没必要留半截死字段）

**🔍 全量排查（六维度）**

- **模块边界**：所有迁移相关导出 / 状态 / 渲染分支均已无引用；`cats.forEach` 分类激活处收尾简化（不再留空 `if` 块）
- **UI 残留**：无迁移相关 CSS / DOM 属性残留；9 个分类分组结构完整
- **源码**：所有定时器走统一 `ncInterval` 收口（pagehide 全局清理）；所有 MutationObserver 走 `ncObserve`
- **文本**：i18n 词条 + 数据 fallback 双轨一致；免责声明双语补齐；`item.d.captchaEnabled` 字典更新（zh-CN 138 字 → 200 字、en 83 字 → 173 字）
- **性能**：删除 ≈1KB 死代码与 8 条 CSS 选择器；DOM 渲染分支数下降
- **BUG 修复**：修复 v1.0.8 引入的 captcha 免责声明因对象覆盖导致永不显示的潜在 BUG

**✅ 验证**

- 全量回归 **25 个 verify 脚本 / 623 项断言 / 失败 0 / EXIT=0**
- `verify_pause_merge.js` S9–S11c 新增 7 条断言：明确断言「无迁移说明残留」（note 对象 / 跳转入口 / 卡片 / 导航 CSS / click 处理器 / 生命周期函数 / 状态 key / 常量）
- 变异测试确认新断言非恒真（任意删除 → 立即变红）

---

### v1.0.8（2026-09-11）

名单集中管理 + 批量导入 —— 把散落在各分类里的白 / 黑名单收拢成独立入口，并让「一次添加很多条」成为一等公民。

**📋 新增「名单管理」分类（方案 C：全量整合）**

- 原先分散在「净化增强 / 验证码识别 / 性能与高级」三个分类里的 6 份名单表单，统一收拢到新的**顶层分类「📋 名单管理」**：
  - 站点级：`暂停名单`（whiteurl）、`仅在名单内网站运行`（perfWhitelist）
  - 验证码级：`验证码白名单`（captchaWhitelist）、`验证码黑名单`（captchaBlacklist）
  - 内容级：`屏蔽网址`（pingbiurl）、`屏蔽关键词`（pingbikw）
- 原分类不删功能、不清空状态，仅在原位保留一个 **「前往名单管理 →」跳转按钮**，老用户原有使用路径不断裂
- **总开关默认关闭**：暂停名单统一为「总开关为开 + 命中名单」才生效（与脚本黑名单合并后的语义一致），升级后行为与升级前**完全一致**，不会突然把银行站注入脚本、也不会让常用站突然失效
- **消除命名二义**：原 `perfWhitelist` 也带「白名单」二字，和暂停名单混在一起无法区分；现改名为「仅在名单内网站运行」，并在开关标签层清理所有 «白名单» 歧义命名

**📥 名单批量导入（6 份名单全部支持）**

- **文件导入**：支持选择 `.txt` / `.csv` / `.tsv`，或直接把文件**拖进文本框**；2MB 上限，UTF-8 读取（编码异常时给出"另存为 UTF-8"的引导）
- **多行粘贴**：一个输入框吃下「一行一个」「逗号 / 分号 / Tab 分隔」多种格式，也可一键**读取系统剪贴板**（浏览器拒绝授权时降级为提示手动 Ctrl+V）
- **自动归一化（域名类）**：`https://www.icbc.com.cn/path?x=1` → `icbc.com.cn`，自动去协议 / 路径 / 查询串 / 端口 / `www.` / 通配符
- **CSV 表格模式**：当超过 60% 的行含多列时，判定为表格，自动**跳过表头行**（`url` / 网址 / 链接 / 关键词等常见表头词）并**只取第一列**，避免把备注列也导进去
- **智能分隔**：含 `://` 的行不按逗号拆（URL 里的逗号不会被误切）；`#` 开头的行视为注释跳过
- **实时预览**：边粘贴边显示「已识别 N 条（M 条已在名单中 / K 条已归一化 / 已跳过表头行）」
- **聚合式确认**：过短条目、以及可能让站点完全失效的「致命条目」，各只弹**一次**汇总确认（而非每条弹一次），并提供解封出口
- **安全底线**：< 2 字的关键词直接硬拦并如实上报忽略条数；单份名单 999 条上限（超出截断并告知）
- **结果可撤销**：导入完成提示条 5 秒内可点「撤销」精确回滚本次导入（含重复跳过、过短忽略等的完整说明）

**ℹ️ 「关于」固定排在左栏最末**

- 「关于」是收尾用的信息类分组（版本号 / 隐私声明 / 免责声明 / 问题反馈），不属于功能分类序列，现**固定钉在左栏最下方**，且**不参与拖拽重排**（拖拽项被置为不可拖 + 悬停给出「固定在最下方」说明）
- **顺带修掉一个真实 bug**：老用户此前已拖拽保存过菜单顺序，升级后新增的「名单管理」原会被 append 到末尾，把「关于」挤到倒数第二（左栏变成 `…cloud > 关于 > 名单管理`）；现改为「新分类插回它在自然顺序里的位置」，「关于」始终收尾

**🐛 修复**

- **暂停名单迁移污染配置历史**：全新用户（无任何可迁移对象）首次启动时，迁移逻辑仍会无条件写配置并落一条历史快照，导致用户看到莫名其妙的「配置已修改」记录；现改为「无迁移对象则直接跳过、不写配置」

---

### v1.0.7（2026-09-11）

稳定性与体验大扫除 —— 按「代码 / 文案 / UI / 交互」四维度全量排查，修正 37 项。

**稳定性**

- 云同步「上传 / 下载 / 测试连接」三按钮：补齐防连点、`try/catch` 异常兜底（不再卡死在「正在上传…」）
- 云备份管理弹窗的导入 / 下载 / 删除 / 备份按钮同样补齐防连点
- 列表编辑（白名单 / 引擎 / 站点等）：增加数据越界校验，避免快速操作误删相邻条目
- 划词翻译按钮加防连点锁，慢网络下不再叠加多张结果卡
- 修复暗黑模式系统主题监听**重复注册**导致的内存泄漏
- 修复站点图标在 CSP 严格网站（GitHub 等）加载失败：改走跨域请求通道
- **修复「误压暗标记无法撤销」**：扫描标记改为按规则版本取值，脚本更新后旧标记可被自动复检撤销
- 修正暗黑模式「让行」范围：精修站点不受影响（百度首页中间白盒修复不回退），非精修站点保留搜索框容器级让行

**暗黑模式观感**

- 修复非精修站点上划词工具条、翻译结果卡被整页反色成「负片」的问题
- 修复新手引导页在整页反色时花屏、设置面板标题栏在暗黑站点上出现刺眼白横带
- 收紧图片二次反转规则：单色线条图标不再被反成亮色

**文案与引导**

- 引导页标题更正为「全网净化大师 NetClean」，功能卡名称与设置面板分类逐一对齐
- 识别失败、云备份打开失败等提示改为说人话，不再出现 `file://` / CSP / Console 等技术术语
- 统一术语口径：暗黑模式 / 干净复制 / 云端配置同步
- 油猴菜单去掉 `【】` 方括号噪音，并新增「⏸ 暂停 / 恢复」快捷入口（不必再进面板）
- 视频下载站点「删除」「恢复默认」补齐二次确认

**无障碍与移动端**

- 按钮补齐键盘焦点态（`:focus-visible`），验证码浮球与划词工具条可键盘操作（Tab + Enter/Space）
- 移动端适配刘海屏 / 底部手势条安全区（`env(safe-area-inset-*)`）

**产品完整度（面向大众的查漏补缺）**

- **启动流程加幂等守卫**：引导页「同意」与老用户直通两条路径重复触发时，不再重复注册菜单 / 重复初始化监听器
- **暂停与恢复行为统一**：快捷键、油猴菜单、设置面板三条入口行为一致；暂停后顶部常驻角标（可点击恢复），不再几秒后消失让人以为"一直在拦广告"
- **暂停文案修正**：由误导性的「刷新页面后生效」改为「已暂停，刷新页面后自动恢复」（该状态本就是内存态、刷新即恢复）
- 新增油猴菜单「🚫 暂停 / 恢复本站」：一键把当前站点加入暂停名单，不必再进面板手输域名
- 油猴菜单排序优化：高频的「控制面板 / 暂停恢复」前置，急救入口不再霸占第一位
- **云码平台开发者凭证改为用户自填**：移除源码中的硬编码标识，面板新增填写项与获取指引（可选、留空不影响识别）
- **云同步失败不再静默**：自动同步连续失败会提示一次，面板显示「上次同步：成功 / 失败（原因）」；自动下载加了覆盖保护，本机新改动不会被云端旧数据冲掉
- 暗黑模式从「性能与高级」归位到「净化增强」与护眼模式同框（显示类功能聚拢，更好找）
- 「关于」页新增产品简介区块（能做什么 / 不做收集 / 出问题了怎么办 / 反馈渠道）
- 网络请求补漏：4 处跨域请求补上超时与超时回调，弱网下不再永久卡住
- 帮助文档：清理残留的错误版本号，补云同步、视频平台广告过滤（YouTube / 优酷 / 腾讯）等条目说明

**本轮补充（同日实施，版本号仍保持 v1.0.7）**

- **新手引导门控改造**：引导页「取消」改为「暂不使用」并说明"刷新后可重新查看"；点「同意」会写入**版本号 + 免责声明指纹**，此后仅在条款正文实质变化时才重新征询，不再每次开新会话反复弹窗打扰
- **配置历史与回滚**：本地保留最近 8 份配置快照，「配置同步」页新增「🕘 配置历史」，可一键回滚到任意快照（回滚前自动把当前版本压入历史，操作可逆）
- **删除可撤销**：删除名单条目 / 清空黑名单后，提示条 5 秒内可点「撤销」找回，误删不再不可逆
- **拦截计数角标**：右下角常驻小盾牌 + 实时拦截数（默认关闭，可在「统计与显示」开启）；点角标查看「本次访问 / 累计拦截 / 当前站点」明细并直达设置，首次拦截时提示一次
- **提示体系统一**：验证码模块的顶部提示统一走全局提示样式（不再自带一套），并按**串行队列**逐条播放（连续操作不再互相覆盖）；与底部轻提示分容器，互不抢占
- **修复早退站点打不开设置面板（P0）**：白名单域名 / 脚本黑名单站点 / 「仅白名单域名启用」三种情形下，点油猴菜单「控制面板」会抛 `ReferenceError: Cannot access 'HELP' before initialization`。根因是启动早退闸直接 `return`，跳过了闸门之后所有顶层声明的初始化；已改为"置标记 + 文件末尾统一早退"
- 「关于」页外链更新：GreasyFork 指向脚本反馈区，并新增 GitHub Issues 问题反馈入口
- **油猴菜单文案重做（可读性大修）**：
  - **补齐 emoji 变体选择符**：`⚙` `⏸` `▶` 默认是"文本呈现"，在部分字体下会被渲染成 `○` `II` `▷`，菜单里几乎认不出；现已全部补 `U+FE0F`，并同步修正面板标题、页面注入入口、顶部胶囊、轻提示、面板按钮等所有展示位
  - **菜单名随状态刷新**：未暂停时显示「⏸️ 暂停全部网站净化」，已暂停时自动变成「▶️ 恢复全部网站净化」，**菜单同时充当状态指示器**，不再需要猜"现在到底是暂停还是运行"、也不再需要预判"点下去会发生什么"
  - **消灭"孪生菜单"**：原「暂停 / 恢复全网净化」与「暂停 / 恢复本站」前 8 字完全相同、差异词在末尾，是最小差异对却风险不同（一个影响全部网站），极易点错；现改为「⏸️ 暂停全部网站净化」/「🚫 只暂停当前网站」，差异词前置
  - **暗黑归属第三态可见**：该项是「自动 → 交给网站 → 脚本接管 → 自动」三态循环，旧文案只写了两个状态，导致「恢复自动判断」这一态在菜单里无处可见；现三态分别命名为「🌙 暗黑模式：交给网站自理 / 改由脚本接管 / 恢复自动判断」
  - **急救入口更直白**：「🧹 状态 / 恢复」更名为「🔍 本页为什么没净化？」，让用户一眼明白这是排查入口而非开关；帮助文档与确认弹窗里的旧菜单名同步更新
  - **兼容性兜底**：优先用 Tampermonkey 5.0+ 的 `options.id` 原地改名（不改变菜单顺序）；不支持时回退「注销 + 重注册」；两者都不支持时保持首次文案且绝不重复注册（已补 `@grant GM_unregisterMenuCommand`）

### v1.0.6（2026-09-10）

跨域白名单拉网补齐 —— 修复「云端配置管理点任何按钮都报网络请求失败」及同类问题。

- **根因延续**：与 v1.0.5 划词翻译事故同根——新版 Tampermonkey（Chrome 152 / MV3）对 `@connect` 未声明域名静默拦截（老版本只弹一次授权框，升级后授权状态被洗掉）
- **拉网排查全部 20 个跨域请求点**，补齐 7 个缺失域名：
  - 云同步：`jianguoyun.com`（坚果云）/ `github.com`（Gist）/ `dropboxapi.com`（Dropbox）/ `microsoft.com`（OneDrive）/ `yandex.net`（Yandex Disk）
  - 验证码：`jfbym.com`（云码）/ `like996.icu`（精准引擎）
- **错误文案区分**：7 处云同步请求的 onerror 现在区分「服务器无响应（跨域授权被拒/断网/地址错）」与「HTTP 状态码」，排查方向不再混淆
- 若仍遇"网络请求失败"，请检查：`chrome://extensions/` → Tampermonkey → 详情 → 网站访问权限 =「在所有网站上」；TM 设置 → 安全 → @connect 检查 =「询问」；自建 WebDAV 域名首次使用时在油猴弹窗中允许

### v1.0.5（2026-09-09）

划词翻译大修 + 全量代码复盘。起因：用户划「售价」报「iciba 未收录 + Google 兜底网络错误」。

#### 🌐 翻译链路修复与增强
- **根因**：`@connect` 白名单缺 `dict.iciba.com` / `translate.googleapis.com`——新版 Tampermonkey（Chrome 152 / MV3）收紧跨域策略后请求被拦，iciba 失败又被吞成"未收录"，误导排查方向
- **补全翻译类 @connect**：dict.iciba.com / translate.googleapis.com / content-dictionaryextension-pa.googleapis.com / api.dictionaryapi.dev / api-free.deepl.com / api.mymemory.translated.net / www.googleapis.com（网盘同步）
- **新增 MyMemory 免费引擎**（免密钥、国内直连，实测「售价」→ Selling price 双向 0.99 匹配），进翻译引擎下拉框
- **Google / MyMemory 兜底竞速**：iciba 查不到（短语/未收录词）时两引擎同时发起、谁先返回用谁——国内 MyMemory 秒回，海外 Google 快，两端都不劣化；显式选择 google/mymemory 引擎时直连不代做主
- **兜底富卡片**（`renderTransRich`）：Google `dt=bd` 词典块（词性/词条/反向翻译）+ MyMemory 多译者候选（匹配度/来源）全量渲染，与 iciba 卡同信息密度，不再是干巴巴一行
- **错误不再混淆**：iciba/百度词典请求失败如实报"请求失败+原因"，与"词典未收录"彻底区分；百度词典 error_code 带 error_msg 上抛（如 54001 签名错误），配置错密钥能当场看到原因
- **未知引擎显式报错**：`translateWith` 遇到未知引擎 id 抛"未知翻译引擎"，不再静默当 Google 跑
- 有道老接口实测已死（302 要求签名）、LibreTranslate 公共实例强制要 key（403）、Edge 免费接口在用户网络不可达——均未采用

#### 🔍 全量复盘修复（子代理审查 16 项，落地 8 项）
- P0：`baiduDictLookup` 吞错误（密钥错被当"无词条"）
- P2：`ncForceDarkScan` 恒 false 死分支清理（语义澄清：精修站点有意参与扫描）
- P2：isWord 路径 iciba 失败静默 → 记入 dbg 日志
- P3：`history.pushState/replaceState` 补丁加幂等守卫（重复执行不再套娃）
- P3：验证码轮询 setInterval 带 id 注册（意外重复初始化不再叠加）
- 其余 2 项（ENGINE_NAMES/translateWith 缺 mymemory）在引擎扩展中已同步解决；设置面板 label 硬编码中文的 i18n 项留作后续（涉及面大，行为无影响）
- HELP 字典 `selTransEngine` 同步最新引擎列表 / 竞速逻辑 / @connect 说明 / MyMemory 额度

### v1.0.4（2026-09-09）

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
- i18n 简繁切换后黑名单/白名单列表的回归 bug
- 验证码栏简→繁→简后变竖排的回归 bug
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

## 版本号规则

- 采用语义化版本 `主版本.次版本.修订号`：
  - **主版本**：不兼容的配置结构变更 / 需要用户重新适配的大改；
  - **次版本**：向后兼容的功能新增与收敛；
  - **修订号**：向后兼容的 bug 修复、清理与文案调整。
- 脚本内 `@version` 与 `const VERSION` **双同步**，由回归断言 `verify_doc_consistency.js` 锁住，不会漂移。
- 每个版本对应的**回归规模**（verify 脚本数 / 断言数）都记在该版本条目末尾，数字取自实测。
