<template>
  <div class="nav-header">
    <el-icon>
      <component :is="icon" @click="changeIcon"></component>
    </el-icon>
    <div class="content">
      <xl-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLoginStore } from '@/store'
import { useRoute } from 'vue-router'

import userInfo from './cpns/user-info.vue'
import XlBreadcrumb from '@/base-ui/breadcrumb'

import { pathMapBreadcrumbs } from '@/utils/map-menus'

let isFold = false
const icon = ref('Expand')
const emit = defineEmits(['foldChange'])

const changeIcon = () => {
  isFold = !isFold
  if (isFold) {
    icon.value = 'Fold'
  } else {
    icon.value = 'Expand'
  }

  emit('foldChange', isFold)
}

// 面包屑数据: [{name: , path: }]
const loginStore = useLoginStore()
const route = useRoute()
const breadcrumbs = computed(() => {
  const userMenus = loginStore.userMenus
  const routePath = route.path

  return pathMapBreadcrumbs(userMenus, routePath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  height: 30px;

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
