import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: { text: '动态列表', btnText: '' },
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: 'Id',
      prop: 'id',
      minWidth: '60'
    },
    {
      label: '标题',
      prop: 'title',
      minWidth: '180'
    },
    {
      label: '用户名',
      prop: 'userName',
      minWidth: '150'
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
