# Order X 项目结构规划

## 技术栈选择

为了避免Tailwind CSS和JavaScript相关问题，我们做出以下技术选择：

### 核心框架
- **Next.js**: 使用14.1.0稳定版本
- **React**: 使用18.2.0
- **TypeScript**: 减少运行时错误，提高代码质量

### 样式方案
- **CSS Modules**: 替代Tailwind，避免配置问题
- **SCSS**: 用于变量管理和嵌套样式
- **CSS自定义属性**: 实现设计系统中的颜色和排版变量

### 国际化支持
- **next-intl**: 提供简单且性能良好的国际化解决方案
- **多语言路由**: 利用Next.js的路由系统实现 `/en/*` 和 `/zh/*` 路径
- **内容翻译**: 使用JSON文件存储翻译内容，支持英文和中文

### 动画与视觉效果
- **Framer Motion**: 用于页面转场和微交互
- **D3.js**: 用于数据可视化
- **Three.js**: 用于3D元素(按需)

### 状态管理
- **React Context**: 轻量级状态管理，避免引入额外库
- **localStorage**: 用于密码验证状态持久化

## 文件夹结构

```
orderx/
├── public/                # 静态资源
│   ├── images/            # 图片资源
│   ├── fonts/             # 字体资源
│   └── animations/        # 预制动画资源
│
├── src/                   # 源代码
│   ├── app/               # Next.js App Router结构
│   │   ├── [locale]/      # 语言前缀路由
│   │   │   ├── page.tsx   # 首页(密码保护)
│   │   │   ├── layout.tsx # 语言特定布局
│   │   │   ├── page.module.scss # 首页样式
│   │   │   └── content/   # 内容页面
│   │   │       ├── overview/     # 概述页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss  
│   │   │       ├── background/   # 背景与挑战页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss
│   │   │       ├── architecture/ # 核心架构与模块页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss
│   │   │       ├── user-journey/ # 用户旅程页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss
│   │   │       ├── technical/    # 技术实现页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss
│   │   │       ├── expansion/    # 扩展与未来页面
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.module.scss
│   │   │       └── launch/       # 启动计划页面
│   │   │           ├── page.tsx
│   │   │           └── page.module.scss
│   │   ├── layout.tsx     # 根布局
│   │   └── page.tsx       # 根页面(语言选择/重定向)
│   │
│   ├── components/        # 共享组件
│   │   ├── index.ts       # 组件导出索引
│   │   ├── content/       # 内容相关组件
│   │   │   ├── ContentLayout.tsx         # 内容页面布局组件
│   │   │   ├── ContentLayout.module.scss # 内容页面布局样式
│   │   │   ├── ContentSection.tsx        # 内容区块组件
│   │   │   └── ContentSection.module.scss # 内容区块样式
│   │   ├── navigation/    # 导航组件
│   │   │   ├── MainNavigation.tsx        # 主导航组件
│   │   │   ├── MainNavigation.module.scss # 主导航样式
│   │   │   ├── PageNavigation.tsx        # 页面导航组件
│   │   │   └── PageNavigation.module.scss # 页面导航样式
│   │   ├── auth/          # 认证相关组件(密码保护)
│   │   │   ├── PasswordProtection.tsx    # 密码保护组件
│   │   │   └── PasswordProtection.module.scss # 密码保护样式
│   │   ├── animations/    # 动画组件
│   │   │   ├── ParticleBackground.tsx    # 粒子背景动画组件
│   │   │   └── ParticleBackground.module.scss # 粒子背景动画样式
│   │   ├── charts/        # 数据可视化组件
│   │   │   ├── MetricCard.tsx            # 指标卡片组件
│   │   │   ├── MetricCard.module.scss    # 指标卡片样式
│   │   │   ├── Timeline.tsx              # 时间线组件
│   │   │   └── Timeline.module.scss      # 时间线样式
│   │   └── interactive/   # 交互组件
│   │       ├── QuoteCard.tsx             # 引用卡片组件
│   │       └── QuoteCard.module.scss     # 引用卡片样式
│   │
│   ├── styles/            # 全局样式
│   │   ├── globals.scss   # 全局样式
│   │   ├── variables.scss # 变量定义
│   │   └── animations.scss # 动画定义
│   │
│   ├── middleware.ts      # Next.js中间件 (国际化路由)
│   ├── i18n.ts            # 国际化配置
│   ├── i18n/              # 国际化工具函数
│   │   └── getMessages.ts # 获取翻译消息
│   │
│   └── messages/          # 国际化文本
│       ├── en.json        # 英文翻译
│       └── zh.json        # 中文翻译
│
├── docs/                  # 项目文档(原始)
│   └── Content/           # 原始内容
│       ├── orderx-overview.md    # 概述内容
│       ├── orderx-background.md  # 背景与挑战内容
│       ├── orderx-architecture.md # 核心架构内容
│       ├── orderx-user-journey.md # 用户旅程内容
│       ├── orderx-technical.md   # 技术实现内容
│       ├── orderx-expansion.md   # 扩展与未来内容
│       └── orderx-launch.md      # 启动计划内容
│
├── CHANGELOG.md           # 变更日志
├── PROGRESS.md            # 开发进度
├── DOCUMENT_INDEX.md      # 文档索引
├── PROGRESS_SUMMARY.md    # 进度总结
├── OrderXplan.md          # Order X 项目计划
└── PROJECT_STRUCTURE.md   # 项目结构文档
```

## 已实现页面

目前已经实现的页面:

1. **密码保护首页**:
   - 实现粒子背景动画效果
   - 添加密码哈希验证
   - 密码: FFAI1054

2. **概述页面(Overview)**:
   - 完整实现分为两页的内容展示
   - 添加互动问题组件
   - 实现响应式布局和移动端优化

3. **背景与挑战页面(Background)**:
   - 完整实现分为两页的内容展示
   - 添加卡片式内容布局
   - 实现移动端适配和分页控制

4. **核心架构与模块页面(Architecture)**:
   - 完整实现分为三页的内容展示
   - 创建模块卡片展示六个核心模块
   - 实现响应式表格展示数据
   - 添加系统集成框架图表展示模块间连接关系
   - 针对移动端优化表格和图表显示

5. **用户旅程页面(User Journey)**:
   - 完整实现分为两页的内容展示
   - 创建用户流程步骤展示
   - 添加互动提示和高亮关键点
   - 实现移动端自适应布局

6. **技术实现页面(Technical)**:
   - 完整实现分为三页的内容展示
   - 添加技术路线图和时间线
   - 创建关键技术挑战与解决方案展示
   - 优化代码示例显示

7. **扩展与未来页面(Expansion)**:
   - 完整实现分为两页的内容展示
   - 创建扩展路径可视化
   - 添加生态系统图表
   - 实现响应式设计适配不同设备

8. **启动计划页面(Launch)**:
   - 完整实现分为三页的内容展示
   - 创建90天行动时间线（麦肯锡风格专业咨询级设计）
   - 添加成功指标和KPI表格
   - 集成GoatxOrderX战略合作内容
   - 实现高级数据可视化和专业引用卡片
   - 优化移动端布局，改进表格显示和卡片排列

## 国际化实现策略

我们已实现完整的英文版支持，中文版待开发：

1. **语言检测与切换**:
   - 初次访问时基于浏览器语言自动选择语言
   - 提供明显的语言切换按钮
   - 语言偏好保存到localStorage

2. **翻译管理**:
   - 所有界面文本存储在JSON翻译文件中
   - 内容页文本通过数据文件管理，分别提供英文和中文版本
   - 使用翻译键名系统确保翻译完整性

3. **优先级**:
   - **【重要策略】先完成英文版本内容，将全部英文版功能开发完成后再添加中文支持**
   - 完成主要功能后添加中文支持
   - 保持两种语言版本内容结构一致，便于维护

## 密码保护实现策略

我们已实现一个简单的密码保护机制：

1. **客户端验证**:
   - 使用localStorage存储验证状态
   - 密码哈希验证: FFAI1054对应哈希值1368206822

2. **验证界面特性**:
   - 未验证时只显示密码输入界面
   - 输入正确密码后使用Framer Motion创建流畅过渡动画
   - 添加打字机效果
   - 使用粒子背景效果

3. **安全考虑**:
   - 这是一个前端验证，目的是提供视觉效果
   - 实际内容保护应考虑服务器端验证

## 页面导航系统

已实现的页面导航系统包括：

1. **主导航(MainNavigation)**:
   - 顶部导航栏，显示当前页面位置
   - 支持折叠/展开菜单
   - 优化的语言切换功能（右侧EN/CN下拉菜单）
   - 响应式设计，适配移动端和桌面端
   - 居中导航项，优化间距和视觉层次

2. **页面导航(PageNavigation)**:
   - 页面底部导航，支持跳转到下一个内容单元
   - 视觉指示当前位置
   - 滑动切换效果
   - 添加悬停动画效果

3. **内容分页系统**:
   - 长内容页面实现手动分页
   - 添加页面指示器和分页控制按钮
   - 优化移动端阅读体验
   - 渐变过渡效果

## 视觉优化与交互元素

已实现的视觉和交互元素：

1. **视觉增强**:
   - 卡片式布局
   - 渐变边框
   - 悬停效果
   - 阴影层次
   - 高对比度配色
   - 麦肯锡风格专业时间线
   - 模块化引用卡片
   - 专业级数据表格样式

2. **互动元素**:
   - 选择型互动问题
   - 响应式反馈
   - 系统集成框架图表
   - 渐变按钮悬停效果
   - 时间线阶段动画过渡
   - 卡片缩放和高亮效果

3. **GoatxOrderX整合元素**:
   - 引用样式卡片（GOAT引用风格）
   - 领导力引用设计
   - 核心理念展示区块
   - 模块列表网格布局
   - GOAT转型描述样式
   - 时间线阶段指示器

4. **移动优化设计**:
   - 自适应卡片布局（双列转单列）
   - 表格横向滚动优化
   - 触摸友好的交互尺寸
   - 响应式间距和排版

## 潜在问题与待改进

1. 解决SCSS变量定义问题，特别是在MainNavigation.module.scss中出现的未定义变量错误
2. 系统集成框架图表实现目前过于依赖手动CSS定位，未来应考虑使用专业图表库(如D3.js、react-flow、mermaid.js等)或SVG实现更灵活、更易维护的系统关系图
3. 国际化配置中存在与最新版next-intl不兼容的部分，需要更新到新的API（requestLocale）
4. 部分页面加载性能需要优化
5. webpack缓存问题导致的构建错误需要解决 