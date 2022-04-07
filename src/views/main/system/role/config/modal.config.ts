import { IPageModal } from '@/components/page-modal'

export const modalConfig: IPageModal = {
  title: '角色',
  formConfig: {
    itemStyle: {},
    colLayout: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '角色名',
        placeholder: '请输入角色名'
      },
      {
        field: 'intro',
        type: 'input',
        label: '角色介绍',
        placeholder: '请输入角色介绍'
      }
    ]
  }
}
