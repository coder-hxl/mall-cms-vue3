<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :width="dialogWidth"
      :title="modalConfig.title"
      destroy-on-close
      center
    >
      <xl-form v-bind="modalConfig.formConfig" v-model="formItems"></xl-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useListStore } from '@/store'

import XlForm from '@/base-ui/form'

import { reactiveWidth } from '@/utils/reactive-width'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  outerInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
})

const listStore = useListStore()

const dialogVisible = ref(false)
const formItems = ref<any>({})
const dialogWidth = reactiveWidth('90%', '30%')

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formConfig.formItems) {
      formItems.value[item.field] = newValue[item.field]
    }
  }
)

// 点击确定按钮的逻辑
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    listStore.editPageDataAction({
      pageName: props.pageName,
      editData: { ...formItems.value, ...props.outerInfo },
      id: props.defaultInfo.id
    })
  } else {
    //新建
    listStore.createPageDataAction({
      pageName: props.pageName,
      newData: { ...formItems.value, ...props.outerInfo }
    })
  }
}

defineExpose({
  dialogVisible
})
</script>

<style scoped lang="less"></style>
