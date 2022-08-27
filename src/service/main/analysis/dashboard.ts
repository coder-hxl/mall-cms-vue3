import xlRequest from '../../index'

import { IDataType } from '../../types'

enum dashboardAPI {
  amountGoodsList = '/goods/amount/list',
  categoryGoodsCount = '/category/goods/count',
  categoryGoodsSale = '/category/goods/sale',
  categoryGoodsFavor = '/category/goods/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountGoodsList() {
  return xlRequest.get<IDataType>({
    url: dashboardAPI.amountGoodsList
  })
}
export function getCategoryGoodsCount() {
  return xlRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return xlRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return xlRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return xlRequest.get<IDataType>({
    url: dashboardAPI.addressGoodsSale
  })
}
