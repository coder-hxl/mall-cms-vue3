<template>
  <div class="xl-editor">
    <div class="editor-box">
      <Toolbar
        :defaultConfig="toolbarConfig"
        :editor="editorRef"
        :mode="mode"
        class="editor-box-toolbar"
      />

      <div class="editor-box-title">
        <input
          v-model="valueTitle"
          type="text"
          placeholder="请输入标题~"
          @input="handleTitle"
        />
      </div>

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
const valueTitle = ref('')
const valueHtml = ref('')
const valueText = ref('')
const isSubmitDisabled = ref(true)

const toolbarConfig: Partial<IToolbarConfig> = {
  excludeKeys: [
    'fontSize',
    'fontFamily',
    'lineHeight',
    'group-justify',
    'group-indent',
    'fullScreen'
  ]
}
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
  maxLength: 1000
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

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleMaxLength = (editor: IDomEditor) => {
  notification.error('内容超出限制数~')
}

const verifyValue = (title: string, text: string) => {
  if (title.length >= 5) {
    notification.error('标题超出限制数~')
  }

  if (title.trim() && text) {
    isSubmitDisabled.value = false
  } else {
    isSubmitDisabled.value = true
  }
}

const handleTitle = () => {
  const title = valueTitle.value
  const text = valueText.value.trim()

  verifyValue(title, text)
}

const handleChange = (editor: IDomEditor) => {
  const title = valueTitle.value.trim()
  const text = editor.getText().trim()
  valueText.value = text

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
