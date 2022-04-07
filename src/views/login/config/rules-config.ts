// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '账号是必填内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
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
  num: [
    {
      required: true,
      message: '手机号是必填内容~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必填内容~',
      trigger: 'blur'
    }
  ]
}
