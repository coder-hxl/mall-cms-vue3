function getRules(type: 'create' | 'update') {
  const rules: any = {
    name: [
      {
        required: true,
        message: '账号是必填内容~',
        trigger: 'blur'
      },
      {
        pattern: /^[a-z0-9]{2,20}$/,
        message: '用户名必须是2~20个字母或者数字~',
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
        pattern: /^[a-z0-9]{1,60}$/,
        message: '真实姓名必须是1~60个字母或者数字~',
        trigger: 'blur'
      }
    ],
    password: [
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
      }
    ],
    enable: [
      {
        required: true,
        message: '状态是必填内容~',
        trigger: 'blur'
      },
      {
        pattern: /^[0-1]{1,1}$/,
        message: '状态错误~',
        trigger: 'blur'
      }
    ]
  }

  if (type === 'create') {
    rules.password.push({
      required: true,
      message: '密码是必填内容~',
      trigger: 'blur'
    })
  }
  return rules
}

export default getRules
