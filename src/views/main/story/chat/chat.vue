<template>
  <div class="chat">
    <xl-editor editorId="chat" :mode="editorMode"></xl-editor>
  </div>
</template>

<script setup lang="ts">
import XlEditor from '@/base-ui/editor'
import { reactiveWidth } from '@/utils/reactive-width'

const editorMode = reactiveWidth('simple', 'default') as unknown as
  | 'default'
  | 'simple'
</script>

<style scoped></style>
