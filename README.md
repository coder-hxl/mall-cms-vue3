# MALL-CMS-Vue3

## 关于

Mall-CMS-Vue3 是基于 Vue3、Pinia、VueRouter、Vite、ElementPlus、TypeScript、Echart5 等技术实现的后台管理系统。拥有系统总览（核心技术、商品统计）、系统管理（用户管理、部门管理、菜单管理、角色管理）、商品中心（商品分类、商品信息）、动态（动态主页、动态列表）。

> 如果对您有帮助，可以给 [MALL-CMS-Vue3 存储库](https://github.com/coder-hxl/mall-cms-vue3) 点个 star 支持一下！

## 技术栈

- 开发工具: Visual Studio Code
- 编程语言: TypeScript 4 + JavaScript
- 构建工具: Vite 2
- 前端框架: Vue 3
- 路由工具: Vue Router 4
- 状态管理: Pinia 2
- UI 框架: Element Plus
- 可视化: Echart 5
- 富文本: WangEditor
- 工具库: dayjs + countup.js
- CSS 预编译: Less
- HTTP 工具: Axios
- Git Hook 工具: husky
- 代码规范: EditorConfig + Prettier + ESLint
- 提交规范: Commitizen + Commitlint

## 介绍

进行模糊讲解，具体实现方式需到对应的源文件查看。

### 组件

#### 通用组件

##### form

该组件是一个表单组件。对 element-plus 的 form 组件进行 2 次封装。通过配置选项和插槽实现高度可配置，可配置表单类型、布局、表单的样式、是否显示该表单、规则等。

##### table

该组件是一个表格组件。对 element-plus 的 table 和 pagination 组件进行 2 次封装。通过配置选项和插槽实现高度可配置，可配置列表数据、标题、显示下标、显示选定列、列表总数、显示分页等。

**想了解更多通用组件请查看 src/base-ui**

#### 特殊组件

##### page-search

该组件用于高级检索功能。使用 [form](#form) 组件 ( element-plus 的 form 组件第 3 次封装)。通过配置选项和插槽实现高度可配置。可配置额外的属性以及事件回调函数。

- 根据配置选项动态绑定表单配置。

- 通过 emits 触发 Hooks ( 调用 page-content 组件实例的获取列表数据回调实现重置检索和进行检索功能 )。

##### page-content

该组件用于展示数据列表。使用 [table](#table) 组件 ( element-plus 的 table 和 pagination 组件第 3 次封装)。通过配置选项和插槽实现高度可配置。可配置额外的属性以及事件回调函数。

- 从 Store 中获取用户的操作权限进行权限控制。
- 绑定页数，实现分页操作。
- 根据搜索权限决定是否派发 Action 获取对应列表数据。
- 使用外部传入的插槽。
- 通过传入 Hooks 实现删除、编辑以及新建功能。
- 暴露获取列表数据回调，让外部通过 ref 属性接收 page-content 组件实例，让 page-search 组件进行检索时即可获取检索到的列表数据。

##### page-modal

该组件用于编辑或创建数据弹窗。使用 [form](#form) 组件 ( element-plus 的 form 组件第 3 次封装)。通过配置选项和插槽实现高度可配置。可配置额外的属性以及事件回调函数。通常和 page-content 搭配使用，会被 page-content 触发弹窗，并将根据创建或编辑按钮被点击选择回调。

- 如果是编辑按钮，则拿到编辑行数据进行表单内容回流，否则清空表单内容（进行创建数据）。
- 派发 Action 实现编辑和新建功能。

**想了解更多特殊组件请查看 src/components**

### 页面

#### Login

- 进行登录验证
- 请求初始化数据 (完整的 departments/role/menu )
- 请求用户信息
- 请求用户菜单
  - 动态注册路由
  - 获取菜单权限
- 跳转到 Main 页面

用户信息和用户菜单都将存入 LocalStorage 和 Store，页面所需数据将从 Store 中获取，存入 LocalStorage 避免用户刷新造成数据丢失，刷新时将 LocalStorage 的用户数据保存到 Store 中。

#### Main

- aside：将 Store 中的用户菜单数据进行展示，控制路由映射。

- container
  - header：按钮控制 aside 是否折叠、展示当前菜单名字、用户头像展示、更新头像、退出登录等功能。
  - main：由路由控制展示二级菜单 Url 对应的页面。
    - **系统总览**
      - 核心技术  (页面)：展示关于、技术栈、项目结构。通过 Tree 工具生成项目结构数据。
      - 商品统计  (页面)：请求的商品的统计数据、分类商品的个数、分类商品的销量、分类商品的收藏、不同城市的销量数据，并传给二次封装的 Echarts  组件进行可视化展示。
    - **系统管理**
      - 用户管理 (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 用户列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
      - 部门管理  (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 部门列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
      - 菜单管理  (页面)
        - 菜单列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
      - 角色管理  (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 角色列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
    - **商品管理**
      - 商品类别 (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 商品列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
      - 商品信息 (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 商品列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。
    - **动态**
      - 动态主页 (页面)
        - 富文本编辑器：通过 WangEditor 组件库创建富文本编辑器。
        - 动态展示：展示所有动态数据。
      - 动态列表 (页面)
        - 高级检索：生成配置选项传入 [page-search](#page-search) 组件实现。
        - 动态列表：生成配置选项传入 [page-content](#page-content) 组件实现。
        - 编辑弹窗：生成配置选项传入 [page-modal](#page-modal) 组件实现。

## API 文档

API 文档: https://documenter.getpostman.com/view/19782726/Uze1x5Af

## 后端

MALL-CMS-Vue3-API Github 地址: https://github.com/coder-hxl/mall-cms-vue3-api

MALL-CMS-Vue3-API Gitee 地址: https://gitee.com/coderhxl/mall-cms-vue3-api
