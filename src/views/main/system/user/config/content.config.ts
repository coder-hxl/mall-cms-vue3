import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: { text: '用户列表', btnText: '创建用户' },
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: '用户名',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '真实姓名',
      prop: 'realname',
      minWidth: '100'
    },
    {
      label: '手机号码',
      prop: 'cellphone',
      minWidth: '100'
    },
    {
      label: '状态',
      prop: 'enable',
      minWidth: '100',
      slotName: 'status'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handle'
    }
  ]
}
