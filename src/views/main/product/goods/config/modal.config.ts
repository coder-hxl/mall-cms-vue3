import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '创建商品',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px') as unknown as string,
    colLayout: {},
    itemStyle: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '商品名称',
        placeholder: '请输入商品名称'
      },
      {
        field: 'oldPrice',
        type: 'input',
        label: '原价格',
        placeholder: '请输入原价格'
      },
      {
        field: 'newPrice',
        type: 'input',
        label: '现价格',
        placeholder: '请输入现价格'
      },
      {
        field: 'imgUrl',
        type: 'input',
        label: '商品图片',
        placeholder: '请输入商品图片'
      },
      {
        field: 'inventoryCount',
        type: 'input',
        label: '库存',
        placeholder: '请输入库存'
      },
      {
        field: 'favorCount',
        type: 'input',
        label: '收藏数',
        placeholder: '请输入收藏数'
      },
      {
        field: 'address',
        type: 'input',
        label: '地址',
        placeholder: '请输入地址'
      },
      {
        field: 'desc',
        type: 'input',
        label: '描述',
        placeholder: '请输入描述'
      }
    ]
  }
}
