import { reactiveWidth } from '@/utils/reactive-width'

import type { Ref } from 'vue'
import type IXlEditorConfig from '@/base-ui/editor/types/types'

const TITLE_MAX_LENGTH = 30
const TEXT_MAX_LENGTH = 1000

export const editorConfig: IXlEditorConfig = {
  mode: reactiveWidth('simple', 'default') as Ref<'default' | 'simple'>,
  titleMaxLength: TITLE_MAX_LENGTH,
  toolbarConfig: {
    excludeKeys: [
      'fontSize',
      'fontFamily',
      'lineHeight',
      'group-justify',
      'group-indent',
      'fullScreen'
    ]
  },
  editorConfig: {
    placeholder: '请输入内容...',
    maxLength: TEXT_MAX_LENGTH
  }
}
