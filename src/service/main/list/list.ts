import { formatStringUct } from '@/utils/date-format'
import xlRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  // 解决 element 日期时间转换问题
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
    url
  })
}

export function editPageData(url: string, editData: any) {
  return xlRequest.patch<IDataType>({
    url,
    data: editData
  })
}

export function newPageData(url: string, newData: any) {
  return xlRequest.post<IDataType>({
    url,
    data: newData
  })
}
