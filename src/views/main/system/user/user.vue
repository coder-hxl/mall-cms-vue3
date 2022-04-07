<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="users"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInitializeStore } from '@/store'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

// pageModal相关的逻辑
// 1.处理密码框的逻辑
const editCallback = () => {
  const password = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'password'
  )
  password!.isHidden = true
}
const newCallback = () => {
  const password = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'password'
  )
  password!.isHidden = false
}

// 2.动态添加部门和角色选项
const initializeStore = useInitializeStore()
const modalConfigRef = computed(() => {
  const department = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'departmentId'
  )
  department!.options = initializeStore.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })

  const role = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'roleId'
  )
  role!.options = initializeStore.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })

  return modalConfig
})

// 3.调用hook获取公共变量和函数
const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
  usePageModal(editCallback, newCallback)
</script>

<style scoped lang="less"></style>
