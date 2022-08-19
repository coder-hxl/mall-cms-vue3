<template>
  <div class="momentMain">
    <moment-editor
      pageName="moment"
      :editorConfig="editorConfig"
    ></moment-editor>
  </div>
</template>

<script setup lang="ts">
import momentEditor from '@/components/moment-editor'
import { editorConfig } from './config/editor.config'
</script>

<style scoped></style>
