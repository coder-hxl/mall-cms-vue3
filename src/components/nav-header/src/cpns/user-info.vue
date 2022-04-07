<template>
  <div class="user-info">
    <div class="button-icon">
      <el-icon :size="20"><CollectionTag /></el-icon>
      <el-icon :size="20"><Bell /></el-icon>
    </div>

    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="32"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Avatar">{{ name }}</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
          <el-dropdown-item>帮助</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item
            divided
            icon="CircleCloseFilled"
            @click="handleExitClick"
          >
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLoginStore } from '@/store'
import router from '@/router'

import localCache from '@/utils/cache'

const loginStore = useLoginStore()
const name = computed(() => loginStore.userInfo.name)

const handleExitClick = () => {
  localCache.deleteCache('token')
  router.push('/main')
}
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .button-icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .el-icon {
      padding: 8px 10px;
      cursor: pointer;
    }
    .el-icon:hover {
      background: #f6f6f6;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>
