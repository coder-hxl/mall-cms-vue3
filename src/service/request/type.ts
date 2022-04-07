import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface XLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface XLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XLRequestInterceptors<T>
  showLoading?: boolean
}

export { XLRequestInterceptors, XLRequestConfig }
