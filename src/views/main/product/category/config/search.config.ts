import { IForm } from '@/base-ui/form'
import { reactiveWidth } from '@/utils/reactive-width'

export const searchFormConfig: IForm = {
  labelWidth: reactiveWidth('70px', '120px') as unknown as string,
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      field: 'createAt',
      type: 'picker',
      label: '创建时间',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    },
    {
      field: 'updateAt',
      type: 'picker',
      label: '更新时间',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
}
