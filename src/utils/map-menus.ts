import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.globEager('../router/main/*/*/*.ts')
  for (const key in routeFiles) {
    const route = routeFiles[key].default
    allRoutes.push(route)
  }

  // 2.根据菜单获取需要添加的routes
  function _recurseGetRoute(userMenus: any[]) {
    for (const menu of userMenus) {
      if (menu.type === 1) {
        _recurseGetRoute(menu.children ?? [])
      } else if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumb: IBreadcrumb[] = []

  for (const menu of userMenus) {
    if (menu.type === 1) {
      const MapBreadcrumbs = pathMapBreadcrumbs(
        menu.children ?? [],
        currentPath
      )
      if (MapBreadcrumbs) {
        breadcrumb.push({ name: menu.name })
        breadcrumb.push(...MapBreadcrumbs)
        return breadcrumb
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      breadcrumb.push({ name: menu.name })
      return breadcrumb
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recursePermissions = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursePermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recursePermissions(userMenus)

  return permissions
}

export function mapMenusLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseMenuLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseMenuLeaf(menu.children ?? [])
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseMenuLeaf(menuList)

  return leafKeys
}

export { firstMenu }
