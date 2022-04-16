import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '类型',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px') as unknown as string,
    itemStyle: {},
    colLayout: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '类型名称',
        placeholder: '请输入类型名称'
      }
    ]
  }
}
