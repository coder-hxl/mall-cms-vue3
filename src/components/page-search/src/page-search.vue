<template>
  <div class="page-search">
    <xl-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button size="large" @click="handleResetClick">
            <el-icon>
              <Refresh />
            </el-icon>
            重置</el-button
          >
          <el-button type="primary" size="large" @click="handleQueryClick">
            <el-icon>
              <Search />
            </el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </xl-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import XlForm from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])

// 双向绑定的属性应该是由配置文件的field来决定
// 1.优化一: formData中属性应该动态来决定
const formItems = props.searchFormConfig.formItems ?? []
const formOriginalData: any = {}
for (const item of formItems) {
  formOriginalData[item.field] = ''
}
const formData = ref(formOriginalData)

// 2.优化二: 当用户点击重置
const handleResetClick = () => {
  formData.value = formOriginalData
  emits('resetBtnClick')
}

// 3.优化三: 当用户点击搜索
const handleQueryClick = () => {
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.page-search {
  display: flow-root;
  .header {
    color: red;
  }

  .handle-btns {
    text-align: right;
    padding: 0 50px 20px 0;
  }

  .el-icon {
    margin-right: 4px;
  }
}
</style>
