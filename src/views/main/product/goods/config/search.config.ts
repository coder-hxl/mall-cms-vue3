import { IForm } from '@/base-ui/form'
import { reactiveWidth } from '@/utils/reactive-width'

export const searchFormConfig: IForm = {
  labelWidth: reactiveWidth('70px', '120px') as unknown as string,
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    }
  ]
}
