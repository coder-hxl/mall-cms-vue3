import XlRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'
import notification from '@/utils/notification'

const xlRequest = new XlRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers ? (config.headers.Authorization = `Bearer ${token}`) : ''
      }

      // 去掉字符串前后空格
      for (const key in config.data) {
        const value = config.data[key]
        if (typeof value === 'string') {
          config.data[key] = value.trim()
        }
      }

      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      const data = error.response.data
      notification.error(`${data.code} ${data.data}`)

      return error
    }
  }
})

export default xlRequest
