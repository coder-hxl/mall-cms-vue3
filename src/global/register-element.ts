import { App } from 'vue'

// 组件
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip
} from 'element-plus'

// icon
import {
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Expand,
  Fold,
  Avatar,
  CircleCloseFilled,
  CircleCheckFilled,
  Refresh,
  Search,
  Delete,
  Bell,
  CollectionTag,
  MoreFilled,
  Edit
} from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip
]
const componentsIcons = [
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Expand,
  Fold,
  CircleCloseFilled,
  CircleCheckFilled,
  Avatar,
  Refresh,
  Search,
  Delete,
  Bell,
  CollectionTag,
  MoreFilled,
  Edit
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }

  for (const component of componentsIcons) {
    app.component(component.name, component)
  }
}
