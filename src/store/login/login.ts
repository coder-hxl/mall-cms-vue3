import { defineStore } from 'pinia'

import { useInitializeStore } from '../main/initialize/initialize'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import router from '@/router'

import localCache from '@/utils/cache'
import { mapMenusToRouter, mapMenusToPermissions } from '@/utils/map-menus'

import { ILoginState } from './types'
import { IAccount } from '@/service/login/type'

export const useLoginStore = defineStore({
  id: 'login',
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
  }),
  getters: {},
  actions: {
    changeToken(token: string) {
      this.token = token
    },
    changeUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    changeUserMenus(userMenus: any[]) {
      this.userMenus = userMenus

      // userMenus => routes
      const routes = mapMenusToRouter(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      this.permissions = mapMenusToPermissions(userMenus)
    },
    loadLocalLogin() {
      // 将本地缓存的用户数据保存到state中
      const token = localCache.getCache('token')
      if (token) {
        this.changeToken(token)
        // 发起初始化的请求(完整的departemts/role)
        useInitializeStore().getInitializeAction()
      }

      const userInfo = localCache.getCache('userInfo')
      userInfo && this.changeUserInfo(userInfo)

      const userMenus = localCache.getCache('userMenus')
      userMenus && this.changeUserMenus(userMenus)
    },
    async accountLoginAction(payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      this.changeToken(token)
      localCache.setCache('token', token)

      // 发起初始化的请求(完整的departemts/role)
      useInitializeStore().getInitializeAction()

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.changeUserInfo(userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      this.changeUserMenus(userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    async phoneLoginAction(payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
})
