<template>
  <div class="xl-editor">
    <div class="editor-box">
      <Toolbar
        :defaultConfig="toolbarConfig"
        :editor="editorRef"
        :mode="mode.value"
        class="editor-box-toolbar"
      />

      <div class="editor-box-title">
        <input
          v-model="valueTitle"
          type="text"
          placeholder="请输入标题~"
          @input="titleChange"
        />
      </div>

      <Editor
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode.value"
        class="editor-box-editor"
        @onCreated="handleCreated"
        @onMaxLength="handleMaxLength"
        @onChange="contentChange"
      />
    </div>

    <div class="submit">
      <el-button
        type="primary"
        :disabled="isSubmitDisabled"
        class="submit-btn"
        @click="submitClick"
      >
        发布
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, shallowRef, ref, Ref } from 'vue'
import { Toolbar, Editor } from '@wangeditor/editor-for-vue'

import notification from '@/utils/notification'

import { IDomEditor } from '@wangeditor/editor'
import { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'

import '@wangeditor/editor/dist/css/style.css'

const props = withDefaults(
  defineProps<{
    toolbarConfig: Partial<IToolbarConfig>
    editorConfig: Partial<IEditorConfig>
    mode?: Ref<'default' | 'simple'>
    titleMaxLength?: number
  }>(),
  {
    mode: () => ref('default'),
    titleMaxLength: undefined
  }
)

const emit = defineEmits(['submitClick', 'titleChange', 'contentChange'])

const editorRef = shallowRef()
const valueTitle = ref('')
const valueHtml = ref('')
const valueText = ref('')
const isSubmitDisabled = ref(true)

const submitClick = () => {
  emit('submitClick')
}

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleMaxLength = (editor: IDomEditor) => {
  notification.error(`内容限制在 ${props.editorConfig.maxLength} 以内~`)
}

const verifyValue = (title: string, text: string) => {
  if (
    props.titleMaxLength != undefined &&
    title.length >= props.titleMaxLength
  ) {
    isSubmitDisabled.value = true
    return notification.error(`标题限制在 ${props.titleMaxLength} 以内~`)
  }

  if (title.trim() && text) {
    isSubmitDisabled.value = false
  } else {
    isSubmitDisabled.value = true
  }
}

const titleChange = () => {
  const title = valueTitle.value
  const text = valueText.value.trim()

  emit('titleChange', valueTitle.value)
  verifyValue(title, text)
}

const contentChange = (editor: IDomEditor) => {
  const title = valueTitle.value
  const text = editor.getText().trim()
  valueText.value = text

  emit('contentChange', valueHtml.value, valueText.value)
  verifyValue(title, text)
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
    .editor-box-toolbar {
      border-bottom: 1px solid rgb(231, 231, 231);
    }
    .editor-box-title {
      margin: 14px 16px 0 16px;

      input {
        width: 100%;
        height: 40px;
        border: none;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 1px solid rgb(231, 231, 231);
        outline: none;
      }
    }
    .editor-box-editor {
      height: 400px !important;
      text-align: left;
      overflow-y: hidden !important;
    }
  }
  .submit {
    padding: 16px 0;
    text-align: right;
    border-top: 1px solid rgb(231, 231, 231);
    background-color: #fff;
    .submit-btn {
      margin: 0 40px;
    }
  }
}
</style>
