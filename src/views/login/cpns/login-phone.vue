<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="65px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" show-password />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { useLoginStore } from '@/store'
import { rules } from '../config/rules-config'
import localCache from '@/utils/cache'

const loginStore = useLoginStore()

const phone = reactive({
  num: localCache.getCache('phone_num') ?? '',
  code: localCache.getCache('phone_code') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (isKeepPassword) {
        localCache.setCache('phone_num', phone.num)
        localCache.setCache('phone_code', phone.code)
      } else {
        localCache.deleteCache('phone_num')
        localCache.deleteCache('phone_code')
      }

      loginStore.phoneLoginAction({ ...phone })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
