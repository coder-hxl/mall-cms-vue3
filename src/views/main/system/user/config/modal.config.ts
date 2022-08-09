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
        field: 'name',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        field: 'realname',
        type: 'input',
        label: '真实姓名',
        placeholder: '请输入真实姓名'
      },
      {
        field: 'password',
        type: 'password',
        label: '用户密码',
        placeholder: '请输入用户密码',
        isHidden: false
      },
      {
        field: 'cellphone',
        type: 'input',
        label: '电话号码',
        placeholder: '请输入电话号码'
      },
      {
        field: 'enable',
        type: 'select',
        label: '状态',
        placeholder: '请选择状态',
        options: [
          { title: '启动', value: 1 },
          { title: '禁用', value: 0 }
        ]
      },
      {
        field: 'departmentId',
        type: 'select',
        label: '部门',
        placeholder: '请选择部门',
        options: []
      },
      {
        field: 'roleId',
        type: 'select',
        label: '角色',
        placeholder: '请选择角色',
        options: []
      }
    ]
  }
}
