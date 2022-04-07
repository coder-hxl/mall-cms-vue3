import { defineStore } from 'pinia'

import {
  getAmountGoodsList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboard } from './types'

export const useDashboardStore = defineStore({
  id: 'dashboard',
  state: (): IDashboard => ({
    amountGoodsList: [],
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  }),
  getters: {},
  actions: {
    changeAmountGoodsList(data: any[]) {
      this.amountGoodsList = data
    },
    changeCategoryGoodsCount(data: any[]) {
      this.categoryGoodsCount = data
    },
    changeCategoryGoodsSale(data: any[]) {
      this.categoryGoodsSale = data
    },
    changeCategoryGoodsFavor(data: any[]) {
      this.categoryGoodsFavor = data
    },
    changeAddressGoodsSale(data: any[]) {
      this.addressGoodsSale = data
    },
    async getDashboardDataActions() {
      const amountListResult = await getAmountGoodsList()
      this.changeAmountGoodsList(amountListResult.data)
      const categoryCountResult = await getCategoryGoodsCount()
      this.changeCategoryGoodsCount(categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      this.changeCategoryGoodsSale(categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      this.changeCategoryGoodsFavor(categoryFavorResult.data)
      const addressSaleResult = await getAddressGoodsSale()
      this.changeAddressGoodsSale(addressSaleResult.data)
    }
  }
})
