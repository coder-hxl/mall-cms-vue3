import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '角色',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px') as unknown as string,
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
