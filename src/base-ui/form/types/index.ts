import { Ref } from 'vue'
import { FormRules } from 'element-plus'

type IFormType = 'input' | 'password' | 'select' | 'picker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: Ref<string>
  colLayout?: any
  itemStyle?: any
  rules?: FormRules
}
