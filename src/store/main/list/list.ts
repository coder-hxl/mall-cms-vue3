import { defineStore } from 'pinia'

import {
  getPageListData,
  deletePageData,
  editPageData,
  newPageData
} from '@/service/main/list/list'

import { IListState, IGetters, IActions, IListStateKey } from './types'

export const useListStore = defineStore<string, IListState, IGetters, IActions>(
  {
    id: 'list',
    state: () => ({
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
      goodsCount: 0,
      // 动态
      momentList: [],
      momentCount: 0
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
      async getPageListAction(payload: any) {
        // 1.获取pageUrl
        const pageName: string = payload.pageName
        const pageUrl = `/${pageName}/list`

        // 2.在页面发送请求
        const pageResult = await getPageListData(pageUrl, payload.queryInfo)
        const { list, totalCount } = pageResult.data

        // 3.将数据存储到state中
        const changeList = `${pageName}List` as IListStateKey
        const changeCount = `${pageName}Count` as IListStateKey
        this[changeList] = list
        this[changeCount] = totalCount
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
  }
)
