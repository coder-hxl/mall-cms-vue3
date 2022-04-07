import { defineStore } from 'pinia'

import {
  getPageListData,
  deletePageData,
  editPageData,
  newPageData
} from '@/service/main/list/list'

import { IListState } from './types'

export const useListStore = defineStore({
  id: 'list',
  state: (): IListState => ({
    // 系统管理
    usersList: [],
    usersCount: 0,
    departmentList: [],
    departmentCount: 0,
    menuList: [],
    menuCount: 0,
    roleList: [],
    roleCount: 0,
    // 商品中心
    categoryList: [],
    categoryCount: 0,
    goodsList: [],
    goodsCount: 0
  }),
  getters: {
    pageListData(state: any) {
      return (pageName: string) => {
        return state[`${pageName}List`]
      }
    },
    pageListCount(state: any) {
      return (pageName: string) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 系统管理
    changeUsersList(list: any[]) {
      this.usersList = list
    },
    changeUsersCount(count: number) {
      this.usersCount = count
    },
    changeDepartmentList(list: any[]) {
      this.departmentList = list
    },
    changedepartmentCount(count: number) {
      this.departmentCount = count
    },
    changeMenuList(list: any[]) {
      this.menuList = list
    },
    changeMenuCount(count: number) {
      this.menuCount = count
    },
    changeRoleList(list: any[]) {
      this.roleList = list
    },
    changeRoleCount(count: number) {
      this.roleCount = count
    },
    // 商品中心
    changeCategoryList(list: any[]) {
      this.categoryList = list
    },
    changeCategoryCount(count: number) {
      this.categoryCount = count
    },
    changeGoodsList(list: any[]) {
      this.goodsList = list
    },
    changeGoodsCount(count: number) {
      this.goodsCount = count
    },

    async getPageListAction(payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.在页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      // 3.将数据存储到state中
      switch (pageName) {
        // 系统管理
        case 'users':
          this.changeUsersList(list)
          this.changeUsersCount(totalCount)
          break
        case 'department':
          this.changeDepartmentList(list)
          this.changedepartmentCount(totalCount)
          break
        case 'menu':
          this.changeMenuList(list)
          this.changeMenuCount(totalCount)
          break
        case 'role':
          this.changeRoleList(list)
          this.changeRoleCount(totalCount)
          break
        // 商品中心
        case 'category':
          this.changeCategoryList(list)
          this.changeCategoryCount(totalCount)
          break
        case 'goods':
          this.changeGoodsList(list)
          this.changeGoodsCount(totalCount)
          break
      }
    },
    async deletePageDataAction(payload: any) {
      // 1.获取url
      const { pageName, id } = payload
      const url = `${pageName}/${id}`

      // 2.发送删除网络请求
      await deletePageData(url)

      // 3.重新发送请求
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction(payload: any) {
      const { pageName, editData, id } = payload
      const url = `/${pageName}/${id}`

      await editPageData(url, editData)

      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction(payload: any) {
      const { pageName, newData } = payload
      const url = `/${pageName}`

      await newPageData(url, newData)

      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})
