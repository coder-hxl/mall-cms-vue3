interface IMoment {
  id: number
  title: string
  contentHtml: string
  contentText: string
  userName: string
  avatarUrl: string
  createAt: string
  updateAt: string
}

export interface IListState {
  usersList: any[]
  usersCount: number
  departmentList: any[]
  departmentCount: number
  menuList: any[]
  menuCount: number
  roleList: any[]
  roleCount: number

  categoryList: any[]
  categoryCount: number
  goodsList: any[]
  goodsCount: number

  momentList: IMoment[]
  momentCount: number
}

export interface IGetters {
  pageListData(state: any): (pageName: string) => any
  pageListCount(state: any): (pageName: string) => any

  [key: string]: any
}

export interface IActions {
  getPageListAction(payload: any): Promise<void>
  deletePageDataAction(payload: any): Promise<any>
  editPageDataAction(payload: any): Promise<any>
  createPageDataAction(payload: any): Promise<any>
}

export type IListStateKey = keyof IListState
