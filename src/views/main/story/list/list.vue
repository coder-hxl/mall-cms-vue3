<template>
  <div class="list">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInitializeStore } from '@/store'

import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
  usePageModal()

const initializeStore = useInitializeStore()
const modalConfigRef = computed(() => {
  const department = modalConfig.formConfig?.formItems.find(
    (item) => item.field === 'departmentId'
  )
  department!.options = initializeStore.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })

  const roleId = modalConfig.formConfig?.formItems.find(
    (item) => item.field === 'roleId'
  )
  roleId!.options = initializeStore.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })

  return modalConfig
})
</script>

<style scoped lang="less"></style>
