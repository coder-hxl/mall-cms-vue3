import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '名字是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,20}$/,
      message: '名字的长度必须在1~20中~',
      trigger: 'blur'
    }
  ]
}

export default rules
