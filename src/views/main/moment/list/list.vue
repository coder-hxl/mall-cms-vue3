<template>
  <div class="momentList">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="moment"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="moment"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

// 3.调用hook获取公共变量和函数
const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
  usePageModal()
</script>

<style scoped lang="less"></style>
