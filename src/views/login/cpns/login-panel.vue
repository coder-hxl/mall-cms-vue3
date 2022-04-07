<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTap" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="label">
            <el-icon><user-filled /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="label">
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" label="记住我" />
      <div class="account-control-other">
        <el-link type="primary">无法验证？</el-link>
        <el-link type="primary">忘记密码？</el-link>
      </div>
    </div>

    <el-button type="primary" class="login-btn" @click="handleloginClick"
      >立刻登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 1.定义属性
const isKeepPassword = ref(true)
const currentTap = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

// 2.定义方法
const handleloginClick = () => {
  if (currentTap.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.loginAction(isKeepPassword.value)
  }
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 340px;
  .title {
    text-align: center;
  }

  .label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .account-control-other {
      height: 32px;
      line-height: 32px;
    }
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
