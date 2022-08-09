import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/list/list'

import { IInitializeSate } from './types'

export const useInitializeStore = defineStore({
  id: 'initialize',
  state: (): IInitializeSate => ({
    entireUser: [],
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  getters: {},
  actions: {
    changeUser(list: any[]) {
      this.entireUser = list
    },
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
      const userResult = await getPageListData('/users/list')
      const { list: userList } = userResult.data

      const departmentResult = await getPageListData('/department/list')
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData('/role/list')
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData('/menu/list')
      const { list: menuList } = menuResult.data

      this.changeUser(userList)
      this.changeDepartment(departmentList)
      this.changeRole(roleList)
      this.changeMenu(menuList)
    }
  }
})
