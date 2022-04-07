<template>
  <div class="xl-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">{{ title }}</div>
      </template>
      <div>
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="less">
.xl-card {
  .card-header {
    text-align: left;
  }
}
</style>
