import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '账号是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,30}$/,
      message: '账号的长度必须在1~30中~',
      trigger: 'blur'
    }
  ],
  realname: [
    {
      required: true,
      message: '真实姓名是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,20}$/,
      message: '真实的长度必须在1~20中~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  cellphone: [
    {
      required: true,
      message: '手机号是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
      message: '校验手机号码: 必须以数字开头, 除数字外, 可含有“-”',
      trigger: 'blur'
    }
  ],
  enable: [
    {
      required: true,
      message: '状态是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^0|1$/,
      message: '状态错误~',
      trigger: 'blur'
    }
  ]
}

const createRules = rules
const updateRules = {
  ...rules,
  password: {
    pattern: /^[a-z0-9]{3,}$/,
    message: '密码必须是3位以上的字母或者数字~',
    trigger: 'blur'
  }
}

export { createRules, updateRules }
