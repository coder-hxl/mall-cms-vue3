<template>
  <div class="user-info">
    <div class="button-icon">
      <el-icon :size="20"><CollectionTag /></el-icon>
      <el-icon :size="20"><Bell /></el-icon>
    </div>

    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="32" :src="avatar"></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Avatar">{{ name }}</el-dropdown-item>
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
import notification from '@/utils/notification'

const loginStore = useLoginStore()
const name = computed(() => loginStore.userInfo.name)
const avatar = computed(() => loginStore.userInfo.avatarUrl)

const handleExitClick = () => {
  localCache.deleteCache('token')
  notification.success('退出登陆成功~')
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
