import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

import rules from './rules.config'

export const modalConfig: IPageModal = {
  title: '菜单',
  formConfig: {
    labelWidth: reactiveWidth('90px', '120px'),
    itemStyle: {},
    colLayout: {},
    rules: rules,
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '菜单名',
        placeholder: '请输入菜单名'
      },
      {
        field: 'type',
        type: 'select',
        label: '类型',
        placeholder: '请输入类型',
        options: [
          { title: 1, value: 1 },
          { title: 2, value: 2 },
          { title: 3, value: 3 }
        ]
      },
      {
        field: 'url',
        type: 'input',
        label: '路径',
        placeholder: '请输入路径'
      },
      {
        field: 'sort',
        type: 'input',
        label: '排序',
        placeholder: '请输入排序'
      },
      {
        field: 'parentId',
        type: 'input',
        label: '上级菜单Id',
        placeholder: '请输入上级菜单Id'
      }
    ]
  }
}
