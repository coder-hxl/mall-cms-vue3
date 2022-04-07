<template>
  <div class="xl-page-statistical">
    <div class="header">
      <slot name="header">
        <div>{{ title }}</div>
        <el-tooltip
          v-if="tooltip"
          :content="tooltip"
          placement="top"
          effect="light"
        >
          <el-icon><more-filled /></el-icon>
        </el-tooltip>
      </slot>
    </div>

    <div class="content">
      <slot name="content">
        <xl-count-up v-bind="countUpData"></xl-count-up>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import XlCountUp from '@/base-ui/count-up'

const props = withDefaults(
  defineProps<{
    title?: string
    tooltip?: string
    targetId?: string
    targetData?: number
  }>(),
  {
    title: '',
    tooltip: '',
    targetId: '',
    targetData: 0
  }
)

const countUpData = computed(() => {
  return {
    targetId: props.targetId,
    endVal: props.targetData,
    options: {
      duration: 3
    }
  }
})
</script>

<style scoped lang="less">
@h: 40px;

.xl-page-statistical {
  padding: 0 20px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @h;
    border-bottom: 1px solid #e4e7ed;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: @h;
    padding: 10px 0;
    font-size: 22px;
    font-weight: 600;
  }
}
</style>
