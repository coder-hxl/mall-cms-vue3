<template>
  <div class="momentMain">
    <div class="editor">
      <moment-editor
        pageName="moment"
        :editorConfig="editorConfig"
      ></moment-editor>
    </div>

    <div class="collapse">
      <xl-collapse :collapseValues="momentList" valueType="html"> </xl-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import momentEditor from '@/components/moment-editor'
import XlCollapse from '@/base-ui/collapse'

import { useListStore } from '@/store'
import { formatUtcString } from '@/utils/date-format'

import { editorConfig } from './config/editor.config'

const listStore = useListStore()
listStore.getPageListAction({
  pageName: 'moment',
  queryInfo: {}
})

const momentList = computed(() => {
  return listStore.momentList.map((item) => {
    const createAt = formatUtcString(item.createAt)
    return {
      id: item.id,
      title: item.title,
      content: item.contentHtml,
      userName: item.userName,
      avatarUrl: item.avatarUrl,
      createAt
    }
  })
})
</script>

<style scoped lang="less">
.momentMain {
  .collapse {
    border-top: 50px solid #f0f2f5;
  }
}
</style>
