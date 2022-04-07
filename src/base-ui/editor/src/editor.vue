<template>
  <div class="xl-editor">
    <div style="border: 1px solid #ccc">
      <Toolbar
        :editorId="editorId"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :editorId="editorId"
        :defaultConfig="editorConfig"
        :defaultContent="defaultContent"
        :mode="mode"
        style="height: 600px; overflow-y: hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import {
  Toolbar,
  Editor,
  getEditor,
  removeEditor
} from '@wangeditor/editor-for-vue'

import { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'

import '@wangeditor/editor/dist/css/style.css'

const props = withDefaults(
  defineProps<{
    editorId: string
    mode?: 'default' | 'simple'
    defaultText?: string
  }>(),
  {
    mode: 'default',
    defaultText: `道阻且长 行则将至 coderhxl`
  }
)

const defaultContent = [
  { type: 'paragraph', children: [{ text: props.defaultText }] }
]

const editorConfig: Partial<IEditorConfig> = {}

const toolbarConfig: Partial<IToolbarConfig> = {}

// 组件销毁前，销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(props.editorId)
  if (editor === null) return

  editor.disable()
  removeEditor(props.editorId)
})
</script>

<style scoped lang="less"></style>
