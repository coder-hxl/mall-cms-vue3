import type { ComponentCustomProperties } from 'vue'

declare module 'vue' {
  // 扩充全局 property
  interface ComponentCustomProperties {
    $filter: {
      formatTime(value: string): string
    }
  }
}
