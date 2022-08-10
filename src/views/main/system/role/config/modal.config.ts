import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

import rules from './rules.config'

export const modalConfig: IPageModal = {
  title: '角色',
  formConfig: {
    labelWidth: reactiveWidth('70px', '120px'),
    itemStyle: {},
    colLayout: {},
    rules: rules,
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
