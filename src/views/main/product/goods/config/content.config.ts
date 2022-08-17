import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: { text: '商品列表', btnText: '创建商品' },
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: '商品名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '原价格',
      prop: 'oldPrice',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      label: '现价格',
      prop: 'newPrice',
      minWidth: '80',
      slotName: 'newPrice'
    },
    {
      label: '商品描述',
      prop: 'description',
      minWidth: '200'
    },
    {
      label: '状态',
      prop: 'enable',
      minWidth: '60',
      slotName: 'status'
    },
    {
      label: '商品图片',
      prop: 'imgUrl',
      minWidth: '100',
      slotName: 'img'
    },
    {
      label: '库存',
      prop: 'inventoryCount',
      minWidth: '80'
    },
    {
      label: '出售',
      prop: 'saleCount',
      minWidth: '80'
    },
    {
      label: '收藏',
      prop: 'favorCount',
      minWidth: '80'
    },
    {
      label: '地址',
      prop: 'address',
      minWidth: '80'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '160',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '160',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handle'
    }
  ]
}
