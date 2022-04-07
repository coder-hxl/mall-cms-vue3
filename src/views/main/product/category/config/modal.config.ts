import { IPageModal } from '@/components/page-modal'

export const modalConfig: IPageModal = {
  title: '类型',
  formConfig: {
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
