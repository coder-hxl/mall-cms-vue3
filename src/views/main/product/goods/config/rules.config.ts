import { FormRules } from 'element-plus'

const rules: FormRules = {
  name: [
    {
      required: true,
      message: '名字是必填内容~'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9+]{1,100}$/,
      message: '名字的长度必须在1~100中~'
    }
  ],
  newPrice: [
    {
      required: true,
      message: '现价格是必填内容~'
    },
    {
      pattern: /^[0-9]{1,}$/,
      message: '价格只能是数字~'
    }
  ],
  description: [
    {
      required: true,
      message: '描述是必填内容~'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9+]{1,255}$/,
      message: '描述的长度必须在1~255中~'
    }
  ],
  enable: [
    {
      required: true,
      message: '状态是必填内容~'
    },
    {
      pattern: /^0|1$/,
      message: '请检查状态是否正确填写~'
    }
  ],
  imgUrl: [
    {
      required: true,
      message: '图片路径是必填内容~'
    },
    {
      pattern:
        /^(http|https):\/\/[\w\-_\u4E00-\u9FA5:/]+(\.[\w\-_\u4E00-\u9FA5]+)+([\u4E00-\u9FA5\w\-.,@?^=%&:/~+#]*[\u4E00-\u9FA5\w\-@?^=%&/~+#])?$/,
      message: '描述的长度必须在1~255中~'
    }
  ],
  inventoryCount: [
    {
      required: true,
      message: '库存是必填内容~'
    },
    {
      pattern: /^[0-9]{1,}$/,
      message: '库存必须是数字~'
    }
  ],
  saleCount: [
    {
      required: true,
      message: '出售是必填内容~'
    },
    {
      pattern: /^[0-9]{1,}$/,
      message: '出售必须是数字~'
    }
  ],
  favorCount: [
    {
      required: true,
      message: '收藏是必填内容~'
    },
    {
      pattern: /^[0-9]{1,}$/,
      message: '收藏必须是数字~'
    }
  ],
  address: [
    {
      required: true,
      message: '地址是必填内容~'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,255}$/,
      message: '地址的长度必须在1~255中~'
    }
  ]
}

export default rules
