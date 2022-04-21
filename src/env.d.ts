/// <reference types="vite/client" />
import type { DefineComponent } from 'vue'

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  // 扩充全局 property
  interface ComponentCustomProperties {
    $filter: {
      formatTime(value: string): string
    }
  }
}
