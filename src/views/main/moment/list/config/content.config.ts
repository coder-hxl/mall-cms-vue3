import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: { text: '用户列表', btnText: '创建用户' },
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: 'Id',
      prop: 'id',
      minWidth: '60'
    },
    {
      label: '动态',
      prop: 'contentText',
      minWidth: '300'
    },
    {
      label: '用户名',
      prop: 'name',
      minWidth: '60'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handle'
    }
  ]
}
