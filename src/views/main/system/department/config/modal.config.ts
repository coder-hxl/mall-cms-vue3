import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '部门',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px') as unknown as string,
    itemStyle: {},
    colLayout: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '部门名称',
        placeholder: '请输入部门名称'
      },
      {
        field: 'parentId',
        type: 'input',
        label: '上级部门',
        placeholder: '请输入上级部门'
      },
      {
        field: 'leader',
        type: 'input',
        label: '权限介绍',
        placeholder: '请输入权限介绍'
      }
    ]
  }
}
