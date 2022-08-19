<template>
  <div>
    <xl-editor
      v-bind="editorConfig"
      @titleChange="handleTitle"
      @contentChange="handleContent"
      @submitClick="handleSubmit"
    ></xl-editor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import XlEditor from '@/base-ui/editor'

import { useListStore } from '@/store'

import IXlEditorConfig from '@/base-ui/editor/types/types'

const props = withDefaults(
  defineProps<{
    pageName: string
    editorConfig: IXlEditorConfig
  }>(),
  {}
)

const listStore = useListStore()
const valueTitle = ref('')
const valueHtml = ref('')
const valueText = ref('')

const handleTitle = (title: string) => {
  valueTitle.value = title
}
const handleContent = (content: string, text: string) => {
  valueHtml.value = content
  valueText.value = text
}

const handleSubmit = () => {
  listStore.createPageDataAction({
    pageName: props.pageName,
    newData: {
      title: valueTitle.value,
      contentHtml: valueHtml.value,
      contentText: valueText.value
    }
  })
}
</script>

<style scoped lang="less"></style>
