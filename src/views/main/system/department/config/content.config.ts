import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: { text: '部门列表', btnText: '创建部门' },
  showFooter: false,
  showIndexColumn: true,
  propList: [
    {
      label: 'Id',
      prop: 'id',
      minWidth: '60'
    },
    {
      label: '部门名称',
      prop: 'name',
      minWidth: '100'
    },

    {
      label: '负责人',
      prop: 'leader',
      minWidth: '100'
    },
    {
      label: '上级部门',
      prop: 'parentName',
      minWidth: '100'
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
