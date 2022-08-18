<template>
  <div class="xl-editor">
    <div class="editor-box">
      <Toolbar
        :defaultConfig="toolbarConfig"
        :editor="editorRef"
        :mode="mode"
        class="editor-box-toolbar"
      />
      <Editor
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        class="editor-box-editor"
        @onCreated="handleCreated"
        @onMaxLength="handleMaxLength"
        @onChange="handleChange"
      />
    </div>
    <div class="submit">
      <el-button
        type="primary"
        :disabled="isSubmitDisabled"
        class="submit-btn"
        @click="handleSubmit"
      >
        发布
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, shallowRef, ref } from 'vue'
import { Toolbar, Editor } from '@wangeditor/editor-for-vue'

import { useListStore } from '@/store'
import notification from '@/utils/notification'

import { IToolbarConfig, IEditorConfig, IDomEditor } from '@wangeditor/editor'

import '@wangeditor/editor/dist/css/style.css'

const props = withDefaults(
  defineProps<{
    pageName: string
    mode?: 'default' | 'simple'
  }>(),
  {
    mode: 'default'
  }
)
const listStore = useListStore()
const editorRef = shallowRef()
const valueHtml = ref()
const isSubmitDisabled = ref(true)

const toolbarConfig: Partial<IToolbarConfig> = {}
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
  maxLength: 1000
}

const handleSubmit = () => {
  listStore.createPageDataAction({
    pageName: props.pageName,
    newData: {
      content: valueHtml.value
    }
  })
}

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleMaxLength = (editor: IDomEditor) => {
  notification.error('超出限制数~')
}

const handleChange = (editor: IDomEditor) => {
  const text = editor.getText().trim()

  if (text) {
    isSubmitDisabled.value = false
  } else {
    isSubmitDisabled.value = true
  }
}

// 组件销毁前，销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style scoped lang="less">
.xl-editor {
  .editor-box {
    position: relative;
    .editor-box-toolbar {
      position: sticky;
      top: -20px;
      border-bottom: 1px solid rgb(231, 231, 231);
      z-index: 1000;
    }
    .editor-box-editor {
      height: 800px !important;
      text-align: left;
      overflow-y: hidden;
    }
  }
  .submit {
    position: sticky;
    bottom: -20px;
    height: 50px;
    line-height: 49px;
    text-align: right;
    border-top: 1px solid rgb(231, 231, 231);
    background-color: #fff;
    .submit-btn {
      margin: 0 40px;
    }
  }
}
</style>
