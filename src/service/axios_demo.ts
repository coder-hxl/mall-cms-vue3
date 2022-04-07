import axios from 'axios'

// axios的实例对象
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// // 2.get请求，并传入参数
// axios
//   .get('https://httpbin.org/get', {
//     params: {
//       name: '浮幻',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// // 3.post请求
// axios
//   .post('https://httpbin.org/post', {
//     data: {
//       name: 'code',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 额外补充promise类型
// promise本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios的配置选项
// 4.1. 全局配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 10000

// 4.2. 每一个请求单独配置
// axios
//   .get('/get', {
//     params: {
//       name: '浮幻',
//       age: 18
//     },
//     timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'code',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 5.axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: '浮幻', age: 18 } }),
    axios.post('/post', { data: { name: 'code', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6.axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求失败的拦截')
    return err
  }
)

// fn1: 数据响应成功(服务器正常的返回了数据 20x)
// fn2: 数据响应失败
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('响应失败的拦截')
    return err
  }
)
