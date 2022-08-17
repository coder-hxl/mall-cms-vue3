import { IForm } from '@/base-ui/form'
import { reactiveWidth } from '@/utils/reactive-width'

export const searchFormConfig: IForm = {
  labelWidth: reactiveWidth('70px', '120px'),
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'description',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '状态',
      options: [
        { title: '启动', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存数',
      placeholder: '请输入库存数'
    },
    {
      field: 'saleCount',
      type: 'input',
      label: '出售数',
      placeholder: '请输入出售数'
    },
    {
      field: 'fovorCount',
      type: 'input',
      label: '收藏数',
      placeholder: '请输入收藏数'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    }
  ]
}
