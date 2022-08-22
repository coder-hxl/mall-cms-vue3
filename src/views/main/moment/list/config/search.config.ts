import { IForm } from '@/base-ui/form'
import { reactiveWidth } from '@/utils/reactive-width'

export const searchFormConfig: IForm = {
  labelWidth: reactiveWidth('70px', '120px'),
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    lg: 8,
    md: 12,
    xs: 24
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'Id',
      placeholder: '请输入id'
    },
    {
      field: 'title',
      type: 'input',
      label: '标题',
      placeholder: '请输入标题'
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
