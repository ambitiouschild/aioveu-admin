# aioveu-admin

<p align="center">
    <img src="https://img.shields.io/badge/Vue-3.3.4-brightgreen.svg"/>
    <img src="https://img.shields.io/badge/Vite-4.4.11-green.svg"/>
    <img src="https://img.shields.io/badge/Element Plus-2.4.2-blue.svg"/>
    <a src="https://github.com/hxrui" target="_blank">
        <img src="https://img.shields.io/github/stars/aioveutech/aioveu-mall.svg?style=social&label=Stars"/>
    </a>
    <a href="https://gitee.com/aioveutech/aioveu-mall" target="_blank">
        <img src="https://gitee.com/aioveutech/aioveu-mall/badge/star.svg"/>
    </a> 
    <br/>
    <img src="https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg"/>
    <a href="https://github.com/ambitiouschild" target="_blank">
        <img src="https://img.shields.io/badge/Author-可我不敌可爱-orange.svg"/>
    </a>
</p>
<p align="center">
<a target="_blank" href="http://admin.aioveu.tech">在线预览</a> |  <a target="_blank" href="https://juejin.cn/post/7228990409909108793">官方文档</a> 
</p>



## 项目介绍

[aioveu-admin](https://github.com/ambitiouschild/aioveu-admin) 是基于 [vue3-element-admin](https://gitee.com/aioveuorg/vue3-element-admin) 升级的 Vue3 版本有来商城管理前端工程；使用前端主流技术栈 Vue3 + Vite4 + TypeScript5 + Vue Router + Pinia + Volar + Element Plus 等；实现功能包括不限于动态权限路由、按钮权限控制、国际化、主题大小切换等。

## 项目优势

- 基于 vue-element-admin 升级的 Vue3 版本 ，极易上手，减少学习成本；
- 一套完整适配的微服务权限系统线上接口，企业级真实前后端接入场景，非 Mock 数据；
- 功能全面：国际化、动态路由、按钮权限、主题大小切换、Echarts、wangEditor；
- TypeScript 全面支持，包括组件和 API 调用层面；
- 主流 Vue3 生态和前端技术栈，常用组件极简封装；
- 从 0 到 1 的项目文档支持；
- 全栈技术支持: 微服务接口、Vue3 管理前端、uni-app 移动端和 K8S 持续集成交付；

## 技术栈

| 技术栈       | 描述                                   | 官网                                 |
| ------------ | -------------------------------------- | ------------------------------------ |
| Vue3         | 渐进式 JavaScript 框架                 | https://v3.cn.vuejs.org/             |
| TypeScript   | JavaScript 的一个超集                  | https://www.tslang.cn/               |
| Vite         | 前端开发与构建工具                     | https://cn.vitejs.dev/               |
| Element Plus | 基于 Vue 3，面向设计师和开发者的组件库 | https://element-plus.gitee.io/zh-CN/ |
| Pinia        | 新一代状态管理工具                     | https://pinia.vuejs.org/             |
| Vue Router   | Vue.js 的官方路由                      | https://router.vuejs.org/zh/         |

## 项目预览

在线预览地址: [admin.aioveu.tech](http://admin.aioveu.tech)

| ![控制台](https://www.aioveu.tech/files/blog/dashboard.png) | ![国际化](https://www.aioveu.tech/files/blog/i18n.gif)    |
| ----------------------------------------------------------- | --------------------------------------------------------- |
| ![菜单管理](https://www.aioveu.tech/files/blog/menu.png)    | ![角色管理](https://www.aioveu.tech/files/blog/role.png)  |
| ![商品管理](https://www.aioveu.tech/files/blog/goods.png)   | ![库存设置](https://www.aioveu.tech/files/blog/stock.png) |

## 项目地址

|                    | Github                                                       | Gitee                                                        | GitCode                                                      |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 开源组织           | [可我不敌可爱](https://aioveu.com)                           | [可我不敌可爱](https://aioveu.com)                           | [可我不敌可爱](https://aioveu.com)                           |
| 技术团队           | [可我不敌可爱](https://aioveu.com)                           | [可我不敌可爱](https://aioveu.com)                           | [可我不敌可爱](https://aioveu.com)                           |
| 后端               | [aioveu-server](https://github.com/ambitiouschild/aioveu-server) | [aioveu-server](https://github.com/ambitiouschild/aioveu-server) | [aioveu-server](https://github.com/ambitiouschild/aioveu-server) |
| 管理前端           | [aioveu-admin](https://github.com/ambitiouschild/aioveu-admin) | [aioveu-admin](https://github.com/ambitiouschild/aioveu-admin) | [aioveu-admin](https://github.com/ambitiouschild/aioveu-admin) |
| 小程序/H5/移动端   | [aioveu-app](https://github.com/ambitiouschild/aioveu-app)   | [aioveu-app](https://github.com/ambitiouschild/aioveu-app)   | [aioveu-app](https://github.com/ambitiouschild/aioveu-app)   |
| vue3-element-admin | aioveu-vue3-element-admin                                    |                                                              | -                                                            |

## 📁目录结构

```
aioveu-admin/
├── node_modules/                    # 项目依赖包
├── public/                         # 公共资源
│   ├── favicon.ico                 # 网站图标
│   └── index.html                  # 主入口HTML文件    
├── src/                             # 前端源代码
│   ├── api/                         # API接口封装
│   │   ├── auth/                 # 认证相关接口
│   │   ├── file/                  # 文件相关接口
│   │   ├── oms/                  # 订单管理接口
│   │   ├── pms/                  # 商品管理接口
│   │   ├── sms/                  # 营销管理接口
│   │   ├── system/                  # 系统管理接口
│   │   └── ums/                # 用户管理接口
│   ├── assets/                      # 静态资源
│   │   ├── icons/                  # SVG图标
│   │   ├── images/                 # 图片资源
│   │   ├── fonts/                  # 字体文件
│   │   └── styles/                 # 全局样式
│   │       └── variables.scss      # SCSS变量
│   ├── components/                  # 公共组件
│   │   ├── AppLink.vue                  # 增强的路由链接组件
│   │   ├── Breadcrumb.vue                   # 面包屑导航
│   │   ├── Dictionary.vue                   # 字典组件
│   │   ├── GithubCorner.vue                   # GitHub角标组件
│   │   ├── Hamburger.vue                   # 折叠菜单按钮
│   │   ├── IconSelect.vue                   # 图标选择器
│   │   ├── LangSelect.vue                   # 语言选择器
│   │   ├── Pagination.vue                   # 分页组件
│   │   ├── SizeSelect.vue                   # 尺寸选择器
│   │   ├── SvgIcon.vue                   # SVG图标组件
│   │   ├── Upload.vue                   # 文件上传组件
│   │   └── WangEditor.vue                 # 富文本编辑器
│   ├── directives/                   # 自定义指令
│   │   └── permission/                  # 权限指令
│   │       └── index.ts                   # 权限指令入口
│   ├── enums/                       # 枚举定义
│   │   ├── DeviceEnum.ts              # 设备枚举
│   │   ├── LanguageEnum.ts            # 语言枚举 
│   │   ├── LayoutEnum.ts              # 菜单布局枚举
│   │   ├── MenuTypeEnum.ts            # 菜单类型枚举
│   │   ├── SidebarStatusEnum.ts       # 侧边栏状态枚举
│   │   ├── SizeEnum.ts                # 布局大小枚举
│   │   └── ThemeEnum.ts               # 主题枚举
│   ├── lang/                        # 国际化语言包
│   │   ├── package/                 # 语言包
│   │   │   ├── en.ts                  # 英文语言包
│   │   │   └── zh-cn.ts               # 中文语言包
│   │   └── index                   # 本地化入口文件
│   ├── layout/                      # 布局组件
│   │   ├── components/                 # 布局子组件
│   │   │   ├── Appmian/                  # 主内容区域
│   │   │   │   └── index.vue                   # 
│   │   │   ├── NavBar/                   # 顶部导航栏
│   │   │   │   ├── components                 # 
│   │   │   │   │   ├── NavbarLeft.vue                   # 
│   │   │   │   │   └── NavbarRight.vue                   # 
│   │   │   │   └── index.vue                   # 
│   │   │   ├── Settings/                  #系统设置 
│   │   │   │   ├── components/                 # 
│   │   │   │   │   ├── LayoutSelect.vue                   # 
│   │   │   │   │   └── ThemeColorPicker.vue                   # 
│   │   │   │   └── index.vue                   # 
│   │   │   ├── Sidebar/                  # 侧边栏
│   │   │   │   ├── components/                 # 
│   │   │   │   │   ├── SidebarLogo.vue                   # 
│   │   │   │   │   ├── SidebarMenu.vue                   # 
│   │   │   │   │   ├── SidebarMenuItem.vue                   # 
│   │   │   │   │   ├── SidebarMenuItemTitle.vue                   # 
│   │   │   │   │   └── SidebarMixTopMenu.vue                   # 
│   │   │   │   └── index.vue                   # 
│   │   │   └── TagsViews/               # 标签页导航
│   │   │   │   └── index.vue                   # 
│   │   └── index.vue                   # 布局主入口
│   ├── plugins/                    # 插件
│   │   ├── i18n.ts                   # 国际化插件
│   │   ├── icons.ts                   # 全局图标注册
│   │   ├── index.ts                   # 插件入口文件
│   │   └── permisssion.ts                   # 路由权限控制
│   ├── router                      # 路由配置
│   │   └── index.ts                   # 路由主入口
│   ├── store/                       # Vuex/Pinia状态管理
│   │   ├── modules/                  # 模块化状态 
│   │   │   ├── app.ts                  # 应用状态
│   │   │   ├── permission.ts                  # 权限状态
│   │   │   ├── settings.ts                  # 系统设置状态
│   │   │   ├── tagsView.ts                  # 标签页状态
│   │   │   └── user.ts                  # 用户状态
│   │   └── index.ts                # Store入口文件
│   ├── styles/                        # 全局样式（位置调整）
│   │   │   ├── index.scss                  # 全局样式入口
│   │   │   ├── reset.scss                  # 样式重置
│   │   │   ├── variables.module.scss                  # SCSS变量（模块化）
│   │   │   └── variable.scss                  # 全局SCSS变量
│   ├── types/                       # TypeScript类型定义
│   │   │   ├── auto-imports.d.ts                  #自动导入声明 
│   │   │   ├── components.d.ts                  # 组件类型声明
│   │   │   ├── env.d.ts                  # 环境变量类型
│   │   │   ├── global.d.ts                  # 全局类型声明
│   │   │   └── shims-vue.d.ts                  # Vue类型补充
│   ├── utils/                       # 工具函数
│   │   │   ├── color.ts                  # 颜色处理工具
│   │   │   ├── filter.ts                  # 全局过滤器
│   │   │   ├── i18n.ts                  # 国际化工具
│   │   │   ├── index.ts                  # 工具主入口
│   │   │   ├── nprogress.ts                  # 进度条控制
│   │   │   └── request.ts                  # Axios请求封装
│   ├── views/                       # 页面视图组件
│   │   │   ├── dashboard/                  #仪表盘
│   │   │   │   ├── components/                 # 
│   │   │   │   │   ├── barChart.vue                   # 柱状图
│   │   │   │   │   ├── FunnelChart.vue                   # 漏斗图
│   │   │   │   │   ├── PieChart.vue                   # 饼图
│   │   │   │   │   ├── RadarChart.vue                   # 雷达图 
│   │   │   │   └── index.vue                   # 主视图
│   │   │   ├── demo/                  # 功能示例
│   │   │   │   ├── multi-level/                  # 多级菜单
│   │   │   │   │   ├── children                # 
│   │   │   │   │   │   ├── children                # 
│   │   │   │   │   │   │   ├── level3-1.vue                # 三级菜单
│   │   │   │   │   │   │   └── level3-2.vue                # 三级菜单
│   │   │   │   │   │   └── level2.vue                # 二级菜单
│   │   │   │   │   └── level1.vue                   # 一级菜单
│   │   │   │   ├── api-doc.vue                   #  API文档
│   │   │   │   ├── icon-selector.vue                   # 图标选择
│   │   │   │   ├── signature.vue                   # 签名组件
│   │   │   │   ├── upload.vue                   # 文件上传
│   │   │   │   └── wang-editor.vue                   # 富文本编辑
│   │   │   ├── error-page/                   # 错误页面
│   │   │   │   ├── 401.vue                   # 未授权
│   │   │   │   └── 404.vue                   # 未找到
│   │   │   ├── login/                  # 登录页 
│   │   │   │   └── index.vue                   # 
│   │   │   ├── oms/                  # 订单管理
│   │   │   │   └── order/                   # 订单管理
│   │   │   │       └── index.vue                   # 订单列表
│   │   │   ├── pms/                  # 商品管理
│   │   │   │   ├── brand/                   # 品牌管理
│   │   │   │   │   └──  index.vue                   # 
│   │   │   │   ├── category/                   # 分类管理
│   │   │   │   │   ├── components/                  # 
│   │   │   │   │   │   ├── Attrtbute.vue                  # 分类属性
│   │   │   │   │   │   └── Category.vue                  # 分类树
│   │   │   │   │   └── index.vue                   # 主视图
│   │   │   │   ├── goods/                   # 商品管理
│   │   │   │   │   ├── components/                 # 
│   │   │   │   │   │   ├── GoodsAttribute.vue                  # 商品属性
│   │   │   │   │   │   ├── GoodsCategory.vue                  # 商品分类
│   │   │   │   │   │   ├── GoodInfo.vue                  # 商品信息
│   │   │   │   │   │   └── GoodStock.vue                  # 商品库存
│   │   │   │   │   ├── detail.vue                   # 商品详情
│   │   │   │   │   └── index.vue                   # 商品列表
│   │   │   ├── redirect/                  # 重定向页
│   │   │   │   └── index.vue                   # 
│   │   │   ├── sms/                  # 营销管理
│   │   │   │   ├── advert/                 # 广告管理 
│   │   │   │   │   └── index.vue                   # 
│   │   │   │   └── coupon                   # 优惠券管理
│   │   │   │       └── index.vue                   # 
│   │   │   ├── system/                 #系统管理
│   │   │   │   ├── dept/                 # 部门管理
│   │   │   │   │   └── index.vue                   # 
│   │   │   │   ├── dict/                  # 字典管理
│   │   │   │   │   ├── DictData.vue                   # 字典数据
│   │   │   │   │   └── index.vue                   # 主视图
│   │   │   │   ├── menu/                  # 菜单管理
│   │   │   │   │   └── index.vue                   # 
│   │   │   │   ├── role/                  # 角色管理
│   │   │   │   │   └── index.vue                   # 
│   │   │   │   ├── user/                  # 用户管理
│   │   │   │   │   ├── components/                   # 
│   │   │   │   │   │   └── dept-tree.vue                   # 部门树
│   │   │   │   │   └── index.vue                   # 用户列表
│   │   │   └── ums/                  # 会员管理
│   │   │       └── member/                   # 会员管理
│   │   │           └── index.vue                   # 会员列表
│   ├── App.vue                     # 根组件
│   ├── main.ts                     # 应用入口文件
│   └── setting.ts                     # 全局配置
├── tests/                          # 测试目录
│   ├── unit/                       # 单元测试
│   └── e2e/                        # E2E测试
├── .editorconfig                   # 编辑器配置
├── .env                            # 基础环境变量
├── .env.development                # 开发环境变量
├── .env.production                 # 生产环境变量
├── .eslintignore                   # ESLint忽略配置
├── .eslintrc.cjs                   # ESLint规则配置
├── .eslintrc-auto-import.json      # 自动导入配置
├── .gitignore                      # git忽略文件
├── .prettierignore                 # Prettier忽略配置
├── .prettierrc.cjs                 # Prettier格式化配置
├── .stylelintignore                # Stylelint忽略配置
├── .stylelintrc.cjs                # Stylelint样式检查配置 
├── commitlint.config.cjs           # CommitLint提交规范配置
├── package.json                    # 项目配置和依赖管理
├── vite.config.ts                  # Vite构建配置（Vue3推荐使用Vite）
├── index.html                      # 项目入口HTML（通常放在根目录）
├── tsconfig.json                   # TypeScript配置
├── tsconfig.node.json              # Node端TS配置
└── README.md                       # 项目说明文档
└── end    
```



1. **关键文件补充**：
   - `src/App.vue`：Vue应用根组件
   - `src/main.ts`：应用入口文件
   - `vite.config.ts`：Vite构建配置（Vue3推荐使用Vite）
   - `tsconfig.json`：补充完整文件名
2. **目录优化**：
   - 新增 `src/components/` 存放公共组件
   - 新增 `tests/` 目录用于单元测试
   - `plugins/` 目录名修正拼写（原plgins）
   - 细化 `assets/` 子目录分类
3. **推荐补充**：
   - `README.md`：项目文档
   - `.env`：基础环境变量
   - `index.html` 明确放在根目录
4. **典型Vue3特征**：
   - Vite作为构建工具（非webpack）
   - TypeScript支持
   - 现代工具链（ESLint+Prettier+Stylelint+Commitlint）

此结构遵循Vue3官方推荐实践，同时保持了项目原有设计意图，适合中后台管理系统使用。

此结构遵循 Vue3 官方推荐的最佳实践，同时优化了后台管理系统的典型功能模块划分，保留了原有业务模块结构，增强了项目的可维护性和扩展性。



‌**TypeScript（TS）与JavaScript（JS）的核心区别在于类型系统和编译机制**‌：TS是JS的超集，增加了静态类型检查和编译时错误捕获，适合大型项目维护；JS作为动态类型语言直接运行，适用于快速开发。‌‌‌‌



## [基于 vite 创建](推荐)

`vite` 是新一代前端构建工具，官网地址：[https://vitejs.cn](https://vitejs.cn/)，`vite`的优势如下：

- 轻量快速的热重载（`HMR`），能实现极速的服务启动。
- 对 `TypeScript`、`JSX`、`CSS` 等支持开箱即用。
- 真正的按需编译，不再等待整个应用编译完成。
- `webpack`构建 与 `vite`构建对比图如下：



## 区别：

1、TS对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。

2、TS代码需要通过[编译器](https://zhida.zhihu.com/search?content_id=523142721&content_type=Answer&match_order=1&q=编译器&zhida_source=entity)编译为JS，然后再交由JS解析器执行。

3、TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。

4、相较于JS而言，TS拥有了[静态类型](https://zhida.zhihu.com/search?content_id=523142721&content_type=Answer&match_order=1&q=静态类型&zhida_source=entity)，更加严格的语法，更强大的功能；

​     TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；

​     TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；

​      同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。



## 启动部署

### 环境准备

- 安装 Node

  版本：16+

- 开发工具

  WebStorm

- 必装插件

  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)

### 项目启动

> 默认后端接口地址 http://localhost:9999 ，如需替换接口地址，替换 .env.development 的代理目标地址 VITE_APP_TARGET_URL 的值为您的接口地址。

1. pnpm install
2. pnpm run dev
3. 浏览器访问 http://localhost:9527

### 项目部署

- 本地打包

  ```
  npm run build:prod
  ```

  生成的静态文件位于项目根目录 dist 文件夹下

- nginx.cofig 配置

  ```
  server {
      listen     80;
      server_name  localhost;
  
      location / {
          root /usr/share/nginx/html/web;
          index index.html index.htm;
      }
  
      # 代理转发请求至网关，prod-api标识解决跨域问题
      location /prod-api/ {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_pass https://api.aioveu.tech/;
      }
  }
  
  ```

## 交流群 🚀

> 关注「可我不敌可爱」公众号，获取交流群二维码。
>
> 如果交流群的二维码过期，加我微信，备注「前端」、「后端」或「全栈」即可。
>
> 为了避免营销广告人群混入，此举无奈，望理解！

| 公众号                                                       | 交流群                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://cdn.jsdelivr.net/gh/ambitiouschild/ambitiouschild/coding.gif " height="180px"> | <img src="https://cdn.jsdelivr.net/gh/ambitiouschild/ambitiouschild//images/可我不敌可爱公众号二维码2.jpg" height="180px"> |





## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
