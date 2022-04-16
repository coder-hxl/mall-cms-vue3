import { IPageModal } from '@/components/page-modal'
import { reactiveWidth } from '@/utils/reactive-width'

export const modalConfig: IPageModal = {
  title: '菜单',
  formConfig: {
    labelWidth: reactiveWidth('90px', '120px') as unknown as string,
    itemStyle: {},
    colLayout: {},
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '菜单名',
        placeholder: '请输入菜单名'
      },
      {
        field: 'type',
        type: 'input',
        label: '类型',
        placeholder: '请输入类型'
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
        label: '种类',
        placeholder: '请输入种类'
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
