<template>
  <div class="xl-count-up">
    <slot>
      <div :id="targetId"></div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'

const props = withDefaults(
  defineProps<{
    targetId: string
    endVal: number
    options: CountUpOptions
  }>(),
  {
    options: () => ({})
  }
)

const countInstance = computed(() => {
  return new CountUp(props.targetId, props.endVal, props.options)
})
nextTick(() => {
  countInstance.value.start()
})
</script>

<style scoped lang="less"></style>
