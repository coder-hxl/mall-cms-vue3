import { formatStringUct } from '@/utils/date-format'
import notification from '@/utils/notification'

import xlRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any = {}) {
  // 解决 elementPlus 日期时间转换问题
  const keys = Object.keys(queryInfo)
  for (const key of keys) {
    if ((key === 'createAt' || key === 'updateAt') && queryInfo[key]) {
      const target = queryInfo[key]

      queryInfo[key] = []
      queryInfo[key].push(formatStringUct(target[0]))
      queryInfo[key].push(formatStringUct(target[1]))
    }
  }

  return xlRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return xlRequest.delete<IDataType>({
    url,
    interceptors: {
      responseInterceptor(res) {
        notification.success('删除成功~')

        return res
      }
    }
  })
}

export function editPageData(url: string, editData: any) {
  return xlRequest.patch<IDataType>({
    url,
    data: editData,
    interceptors: {
      responseInterceptor(res) {
        notification.success('编辑成功~')

        return res
      }
    }
  })
}

export function newPageData(url: string, newData: any) {
  return xlRequest.post<IDataType>({
    url,
    data: newData,
    interceptors: {
      responseInterceptor(res) {
        notification.success('创建成功~')

        return res
      }
    }
  })
}
