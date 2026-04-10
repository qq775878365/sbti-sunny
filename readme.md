# SBTI 人格测试（阳光版）✨

> 你比你想象的更耀眼。

[👉 在线体验](https://qq775878365.github.io/sbti-sunny/)

## 项目简介

积极向上的人格测试工具，致敬原版 [SBTI](https://github.com/UnluckyNinja/SBTI-test)。

原版风格偏吐槽和自嘲（"屌丝""小丑""愤世者"），**阳光版**保留了同样的测试结构和评分逻辑，但将所有题目与人格描述重新诠释为温暖治愈的积极风格——希望每个人做完测试，都能带着一点对自己的新发现和一点好心情。

## 测试维度

| 模型 | 维度 |
|------|------|
| 自我模型 | S1 自尊自信 · S2 自我清晰度 · S3 核心价值 |
| 情感模型 | E1 依恋安全感 · E2 情感投入度 · E3 边界与依赖 |
| 态度模型 | A1 世界观倾向 · A2 规则灵活度 · A3 人生意义感 |
| 行动驱力 | Ac1 动机导向 · Ac2 决策风格 · Ac3 执行模式 |
| 社交模型 | So1 社交主动性 · So2 人际边界感 · So3 表达与真实 |

## 人格类型（25种）

🌟 **STAR 闪耀者** · 🚀 **RISE 破局者** · 🌿 **HEAL 治愈者** · 🔥 **BLAZ 燃烧者** · 🌊 **FLOW 流动者** · 🌙 **MOON 月光者** · 🌱 **GROW 成长者** · 🛡️ **GUAR 守护者** · 🌬️ **WIND 追风者** · ☀️ **WARM 温暖者** · ⚔️ **HART 勇敢者** · 💎 **SHIN 发光者** · ✨ **SPARK 星火者** · 🧘 **CALM 平静者** · 🤝 **BOND 联结者** · 🦅 **SOAR 高飞者** · 🌅 **DAWN 破晓者** · 🧠 **MIND 思想者** · 💡 **GLOW 微光者** · 🔆 **RADI 辐射者** · 🧙 **SAGE 智贤者** 等...

## 技术栈

- **纯前端**：零构建工具，零外部依赖
- **单 HTML 文件**：GitHub Pages 直接托管
- **字体**：Google Fonts（Noto Serif SC + Noto Sans SC + DM Mono）
- **动画**：CSS Keyframes + Staggered reveals
- **算法**：向量距离匹配（曼哈顿距离）

## 本地运行

```bash
# 直接用浏览器打开
open pages/index.html

# 或用任意静态服务器
python -m http.server 8080
# 访问 http://localhost:8080/pages/
```

## 项目结构

```
sbti-sunny/
├── pages/
│   └── index.html       # GitHub Pages 入口（内联 CSS + JS）
├── src/
│   ├── styles.css       # 开发用样式文件
│   └── app.js          # 开发用逻辑文件
├── SPEC.md              # 设计规范文档
└── README.md
```

## 部署到 GitHub Pages

推送到 GitHub 仓库的 `main` 分支后会自动部署到：
`https://<username>.github.io/<repo-name>/`

或：在仓库 Settings → Pages → Source 选择 `gh-pages` 分支。

## License

MIT
