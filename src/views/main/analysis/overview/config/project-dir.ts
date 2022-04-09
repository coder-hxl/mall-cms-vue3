export const projectDir = `
|-- README.md
|-- commitlint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   -- favicon.ico
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- base.less
|   |   |   -- index.less
|   |   -- img
|   |       |-- login-bg.svg
|   |       |-- logo.svg
|   |       -- not-found.svg
|   |-- base-ui
|   |   |-- breadcrumb
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   -- breadcrumb.vue
|   |   |   -- types
|   |   |       -- index.ts
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- card.vue
|   |   |-- count-up
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- count-up.vue
|   |   |-- echart
|   |   |   |-- data
|   |   |   |   -- china.json
|   |   |   |-- hooks
|   |   |   |   -- useEchart.ts
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- base-echart.vue
|   |   |-- editor
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- editor.vue
|   |   |-- form
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   -- form.vue
|   |   |   -- types
|   |   |       -- index.ts
|   |   -- table
|   |       |-- index.ts
|   |       |-- src
|   |       |   -- table.vue
|   |       -- types
|   |           -- index.ts
|   |-- components
|   |   |-- nav-header
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       |-- cpns
|   |   |       |   -- user-info.vue
|   |   |       -- nav-header.vue
|   |   |-- nav-menu
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- nav-menu.vue
|   |   |-- page-content
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- page-content.vue
|   |   |-- page-echarts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-echart.vue
|   |   |   |   |-- line-echart.vue
|   |   |   |   |-- map-echart.vue
|   |   |   |   |-- pie-echart.vue
|   |   |   |   -- rose-echart.vue
|   |   |   |-- types
|   |   |   |   -- index.ts
|   |   |   -- utils
|   |   |       |-- convert-data.ts
|   |   |       -- coordinate-data.ts
|   |   |-- page-modal
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   -- page-modal.vue
|   |   |   -- types
|   |   |       -- index.ts
|   |   |-- page-search
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- page-search.vue
|   |   -- page-statistical
|   |       |-- index.ts
|   |       -- src
|   |           -- page-statistical.vue
|   |-- env.d.ts
|   |-- global
|   |   |-- index.ts
|   |   |-- register-element.ts
|   |   -- register-properties.ts
|   |-- hooks
|   |   |-- use-page-modal.ts
|   |   |-- use-page-search.ts
|   |   -- use-permission.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   -- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   -- dashboard.ts
|   |       |   -- overview
|   |       |       -- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   -- category.ts
|   |       |   -- goods
|   |       |       -- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   -- chat.ts
|   |       |   -- list
|   |       |       -- list.ts
|   |       -- system
|   |           |-- department
|   |           |   -- department.ts
|   |           |-- menu
|   |           |   -- menu.ts
|   |           |-- role
|   |           |   -- role.ts
|   |           -- user
|   |               -- user.ts
|   |-- service
|   |   |-- axios_demo.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   -- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   -- dashboard.ts
|   |   |   -- list
|   |   |       -- list.ts
|   |   |-- request
|   |   |   |-- config.ts
|   |   |   |-- index.ts
|   |   |   -- type.ts
|   |   -- types.ts
|   |-- store
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   -- types.ts
|   |   -- main
|   |       |-- analysis
|   |       |   |-- dashboard.ts
|   |       |   -- types.ts
|   |       |-- initialize
|   |       |   |-- initialize.ts
|   |       |   -- types.ts
|   |       -- list
|   |           |-- list.ts
|   |           -- types.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- date-format.ts
|   |   -- map-menus.ts
|   -- views
|       |-- login
|       |   |-- config
|       |   |   -- rules-config.ts
|       |   |-- cpns
|       |   |   |-- login-account.vue
|       |   |   |-- login-panel.vue
|       |   |   -- login-phone.vue
|       |   |-- hook
|       |   -- login.vue
|       |-- main
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   -- dashboard.vue
|       |   |   -- overview
|       |   |       |-- config
|       |   |       |   -- technology-stacks.ts
|       |   |       -- overview.vue
|       |   |-- main.vue
|       |   |-- product
|       |   |   |-- category
|       |   |   |   |-- category.vue
|       |   |   |   -- config
|       |   |   |       |-- content.config.ts
|       |   |   |       |-- modal.config.ts
|       |   |   |       -- search.config.ts
|       |   |   -- goods
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |   |-- modal.config.ts
|       |   |       |   -- search.config.ts
|       |   |       -- goods.vue
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   -- chat.vue
|       |   |   -- list
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |   -- modal.config.ts
|       |   |       -- list.vue
|       |   -- system
|       |       |-- department
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   -- search.config.ts
|       |       |   -- department.vue
|       |       |-- menu
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   -- modal.config.ts
|       |       |   -- menu.vue
|       |       |-- role
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   -- search.config.ts
|       |       |   -- role.vue
|       |       -- user
|       |           |-- config
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   -- search.config.ts
|       |           -- user.vue
|       -- not-found
|           -- not-found.vue
|-- tsconfig.json
|-- tsconfig.node.json
-- vite.config.ts
`
