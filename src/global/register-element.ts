import { App } from 'vue'

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

const componentsIcons = [
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
]

export default function (app: App) {
  for (const component of componentsIcons) {
    app.component(component.name, component)
  }
}
