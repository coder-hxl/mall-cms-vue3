import { Ref } from 'vue'
import { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'

interface IXlEditorConfig {
  toolbarConfig: Partial<IToolbarConfig>
  editorConfig: Partial<IEditorConfig>
  mode?: Ref<'default' | 'simple'>
  titleMaxLength?: number
}

export default IXlEditorConfig
