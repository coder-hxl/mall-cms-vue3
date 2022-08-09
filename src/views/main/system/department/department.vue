<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
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
import PageModal from '@/components/page-modal/src/page-modal.vue'

import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

const initializeStore = useInitializeStore()
const modalConfigRef = computed(() => {
  const parentId = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'parentId'
  )

  parentId!.options = initializeStore.entireDepartment.map((item: any) => ({
    title: item.name,
    value: item.id
  }))

  const leader = modalConfig.formConfig!.formItems.find(
    (item) => item.field === 'leader'
  )

  leader!.options = initializeStore.entireUser.map((item: any) => ({
    title: item.name,
    value: item.name
  }))

  return modalConfig
})

const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
  usePageModal()
</script>

<style scoped></style>
