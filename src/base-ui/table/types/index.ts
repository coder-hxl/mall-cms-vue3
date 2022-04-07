interface ITitle {
  text: string
  btnText: string
}

export interface ITable {
  title?: ITitle
  propList?: any[]
  childrenProps?: any
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  showFooter?: boolean
}
