import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '用户',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px'),
    itemStyle: {},
    colLayout: {},
    rules: {},
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
        label: '用户名',
        placeholder: '请输入用户名'
      }
    ]
  }
}
