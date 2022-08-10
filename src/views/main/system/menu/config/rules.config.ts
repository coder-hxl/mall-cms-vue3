import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '名字是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,6}$/,
      message: '名字的长度必须在1~6中~',
      trigger: 'blur'
    }
  ],
  type: [
    {
      required: true,
      message: '类型是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[1|2|3]{1}$/,
      message: '类型只能是1, 2, 3其中一个~',
      trigger: 'blur'
    }
  ]
}

export default rules
