# SPEC.md — SBTI 阳光版（积极人格测试）

## 1. Concept & Vision

**是什么**：一款积极向上的人格测试工具，致敬原版 SBTI 的结构，但将所有内容换成正能量风格。

**核心理念**：每个人都是世界上独一无二的光。测试不是为了评判你，而是帮助你发现自己内在的光芒。

**差异化**：原版 SBTI 走讽刺吐槽路线（"屌丝""小丑""愤世者"），阳光版走温暖治愈路线（"闪耀者""破局者""治愈者"）。不做负面标签，只做正向赋能。

**目标用户**：18-30岁互联网用户，喜欢有趣的心理测试，渴望自我认知和鼓励。

---

## 2. Design Language

### Aesthetic Direction
**"Golden Hour"（黄金时刻）**：日出或日落时分的温暖光芒感。联想到成长、希望、温暖。整体氛围是"被阳光拥抱的感觉"，而不是"被审视"。

具体风格参考：柔和的暖色调、渐变光晕、圆润的几何形状、有机流动感。视觉上避免冷色调和硬锐边缘。

### Color Palette
```
--bg:           #FFF9F0   /* 米白色背景，像被阳光照亮的纸 */
--surface:      #FFFFFF   /* 卡片白 */
--surface-warm: #FFF5E8   /* 暖白，用于分层 */
--text:         #2A1F10   /* 深棕，非纯黑，更温暖 */
--text-muted:   #8A7060   /* 暖灰棕 */
--line:         #F0E4D4   /* 暖线条 */
--soft:         #FEF3E2   /* 柔和暖色 */
--accent:       #F5A623   /* 琥珀金，主色，像日落光芒 */
--accent-deep:  #D4850F  /* 深琥珀 */
--accent-glow:  rgba(245, 166, 35, 0.15)  /* 光芒光晕 */
--success:      #7CB342   /* 柔和绿 */
--shadow:       rgba(180, 100, 20, 0.08) /* 暖色阴影 */
```

### Typography
- **Display**: `Noto Serif SC` — 中文衬线体，有文化感和温度，用于标题
- **Body**: `Noto Sans SC` — 清晰易读，用于正文和选项
- **Accent/Code**: `DM Mono` — 用于人格代码如 STAR、MOON 等
- **Size Scale**: 13/15/17/20/28/40/56px
- **Letter-spacing**: 标题 -0.03em（紧凑有力）

### Spatial System
- Base unit: 8px
- Card radius: 24px（圆润感）
- Button radius: 16px
- Section padding: 28px
- Gap between cards: 20px

### Motion Philosophy
- **Entrance**: 元素从 opacity 0 + translateY(16px) → 完全显示，300ms ease-out
- **Stagger**: 多元素时每项 delay 60ms，像阳光依次照亮
- **Hover**: transform scale(1.01) + shadow 增强，150ms ease
- **Progress bar**: 宽度动画 250ms ease，数值变化时平滑过渡
- **Screen transition**: fade + slide-up，300ms
- **Result reveal**: 依次揭示，每块间隔 150ms，像揭开礼物

### Visual Assets
- **Icon style**: 手绘风 emoji（🌟🚀🌿🔥🌊🌙🛡️🌬️☀️⚔️💎✨🧘🤝🦅🌅🧠💡🔆🧙）作为人格类型视觉锚点
- **Decorative**: CSS radial-gradient 光晕，像阳光从某个角落照进来
- **Background**: radial-gradient 从 --bg 到 --soft 的微妙渐变，带光晕装饰圆
- **无外部图片依赖**，全部用 CSS + emoji

---

## 3. Layout & Structure

### 页面结构（三屏）

```
┌─────────────────────────────────────┐
│  [Intro Screen]                     │
│  - 标题（大字，衬线体）             │
│  - 副标题 + tagline                │
│  - 开始按钮                         │
│  - 底部小字说明来源                 │
└─────────────────────────────────────┘
           ↓（点击开始）
┌─────────────────────────────────────┐
│  [Test Screen]                      │
│  - 顶部进度条 + 题号 X/30          │
│  - 题目列表（一次显示全部30道）      │
│  - 每题：题目 + 3个选项             │
│  - 底部：提示语 + 提交按钮          │
└─────────────────────────────────────┘
           ↓（提交）
┌─────────────────────────────────────┐
│  [Result Screen]                    │
│  - 人格卡片（emoji + 人格名 + 匹配度）│
│  - 人格解读正文                     │
│  - 十五维度评分（可展开）            │
│  - 友情提示（免责声明）             │
│  - 重新测试 / 回到首页               │
└─────────────────────────────────────┘
```

### Responsive Strategy
- Desktop: max-width 900px，居中
- Mobile: 全宽，padding 缩小，字体缩小一档
- 题目卡片：移动端单列，桌面端视觉更宽松

---

## 4. Features & Interactions

### Intro Screen
- 页面加载时标题有 fade-in + slide-up 动画（延迟100ms）
- "开始测试"按钮 hover：微微上浮 + 阴影加深
- 底部来源说明：链接到原版 GitHub

### Test Screen
- 进入时题目列表依次 fade-in（stagger 40ms/题）
- 选择选项：label 背景变亮 + border 变accent色，200ms
- 已选择的选项有 accent 色的圆点标记
- 进度条实时更新（smooth transition）
- 全部选择后，提交按钮从 disabled 变为可用，带 pulse 动画提示
- 提示文字随进度动态变化：
  - 0-5题："每一道题都是认识自己的机会 ✨"
  - 6-15题："继续，你做得很好 🌟"
  - 16-25题："快完成了，看见自己 💫"
  - 30题："全部完成！准备好看结果了吗？ ✨"

### Result Screen
- Reveal 动画序列（总时长 ~1.2s）：
  1. 人格 emoji + 代码名（0ms）
  2. 人格中文名（200ms）
  3. 匹配度徽章（400ms）
  4. 解读正文（600ms）
  5. 维度评分（800ms，stagger 每项 50ms）
  6. 底部提示 + 按钮（1000ms）
- 十五维度可折叠/展开（默认折叠显示前5项）
- "重新测试"：清空选择，滚动回顶部，重新 shuffle 题目

### Error & Edge Cases
- 用户刷新页面：状态丢失，提示"重新开始"（单页应用正常行为）
- 所有交互即时响应，无网络请求，无 loading 状态

---

## 5. Component Inventory

### Button
- **Primary**: bg=--accent-deep, text=white, 圆角16px, padding 14px 20px
  - Hover: translateY(-2px), shadow 加深
  - Disabled: opacity 0.5, cursor not-allowed
- **Secondary**: bg=white, border=--line, text=--accent-deep
  - Hover: bg=--soft

### Question Card
- bg=--surface, border=--line, radius=20px, padding 20px
- 题号 badge：圆角 pill，bg=--soft，text=--accent-deep
- 题目文字：--text，15px，行高1.7
- 选项 label：bg transparent，hover时 bg=--soft，border=--line → --accent

### Option Label
- 左侧：圆形单选框（accent色）
- 右侧：选项文字
- States:
  - Default: border --line, bg white
  - Hover: border --accent-light, bg --soft
  - Selected: border --accent, bg --soft, 左侧圆点 accent 色

### Progress Bar
- 底色：--line，圆角
- 填充：渐变 --accent → --accent-deep，250ms transition
- 旁边文字：--text-muted，13px

### Result Card (人格展示)
- 大 emoji（80px）+ 人格代码（DM Mono, 40px, bold）
- 人格中文名（28px, serif）
- 匹配度徽章：pill 形状，bg=--soft, accent色文字
- 背景：微渐变 + 右上角光晕装饰

### Dimension Item
- 一行：维度名 + 等级标签（L/M/H）+ 分数
- 底部：解读文字，--text-muted
- L=暖橙 / M=琥珀 / H=金色 三种不同强调色

### Footer Note
- 暖灰色小字，居中
- 圆角浅色背景

---

## 6. Technical Approach

### Architecture
- **零构建工具**：纯原生 HTML + CSS + JavaScript
- **单 HTML 文件**：`pages/index.html` 内联 CSS 和 JS，GitHub Pages 直接托管
- **模块化源码**：`src/app.js`（逻辑）、`src/styles.css`（样式）
- **打包**：开发时两个文件，发布前合并到 `pages/index.html`

### 技术实现
- CSS: CSS Variables for theming, CSS Grid + Flexbox, CSS animations
- JS: Vanilla ES6+，无框架依赖
- 数据: 30道题 + 25种人格 + 15维度，全部硬编码在 JS 中

### 评分算法（与原版一致）
1. 每题选 A/B/C → 对应分值 1/2/3
2. 每个维度（15个）的两题分数相加 → 维度原始分
3. 维度分映射：≤3=L, 4=M, ≥5=H → 得到15位字符串（如 "HHM-HMH..."）
4. 用向量距离算法，计算用户向量与每种人格向量的曼哈顿距离
5. 距离最小 + exact match 最多 → 最匹配人格
6. 匹配度 = (1 - distance/maxPossible) × 100

### File Structure
```
sbti-sunny-v2/
├── SPEC.md
├── README.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages 自动部署
├── src/
│   ├── styles.css
│   └── app.js
└── pages/
    └── index.html             # 发布入口（内联 CSS+JS）
```

### Deployment
- GitHub Pages：从 `pages/index.html` 托管
- 触发：push 到 main 分支自动部署
