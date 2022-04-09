// 1.方式一: 手动的切换不同的环境（不推荐）
// const BASE_URL = 'https: //code.org/dev'
// const BASE_NAME = 'dev'

// const BASE_URL = 'https: //code.org/prod'
// const BASE_NAME = 'prod'

// const BASE_URL = 'https: //code.org/test'
// const BASE_NAME = 'test'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生产环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV == 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'https://coderhxl.com/test'
}

export { BASE_URL, TIME_OUT }
