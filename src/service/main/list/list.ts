import xlRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
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
