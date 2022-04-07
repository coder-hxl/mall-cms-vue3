import xlRequest from '../index'

import { IDataType } from '../types'
import { IAccount, ILoginResult } from './type'

enum LoginAPI {
  accountLogin = '/login',
  loginUserInfo = '/users/',
  userMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return xlRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xlRequest.get<IDataType>({
    url: LoginAPI.loginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return xlRequest.get<IDataType>({
    url: LoginAPI.userMenu + id + '/menu',
    showLoading: false,
    interceptors: {
      responseInterceptor(config) {
        // 对服务器返回的data里的icon进行递归截取, 原因: 此版本element-plus的icon改版了
        function setIcon(data: any) {
          for (const item of data) {
            if (item.icon) {
              item.icon = item.icon.slice(8)
            }

            if (item.children) {
              setIcon(item.children)
            }
          }
        }

        setIcon(config.data)

        return config
      }
    }
  })
}
