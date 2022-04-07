import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/list/list'

import { IInitializeSate } from './types'

export const useInitializeStore = defineStore({
  id: 'initialize',
  state: (): IInitializeSate => ({
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  getters: {},
  actions: {
    changeDepartment(list: any[]) {
      this.entireDepartment = list
    },
    changeRole(list: any[]) {
      this.entireRole = list
    },
    changeMenu(list: any[]) {
      this.entireMenu = list
    },
    async getInitializeAction() {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuResult.data

      this.changeDepartment(departmentList)
      this.changeRole(roleList)
      this.changeMenu(menuList)
    }
  }
})
