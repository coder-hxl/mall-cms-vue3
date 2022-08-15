import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '类别',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px'),
    itemStyle: {},
    colLayout: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '类别名称',
        placeholder: '请输入类别名称'
      }
    ]
  }
}
