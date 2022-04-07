import { createPinia } from 'pinia'

import { useLoginStore } from './login/login'
import { useListStore } from './main/list/list'
import { useInitializeStore } from './main/initialize/initialize'
import { useDashboardStore } from './main/analysis/dashboard'

const store = createPinia()

export function setupStore() {
  useLoginStore().loadLocalLogin()
}

export default store
export { useLoginStore, useListStore, useInitializeStore, useDashboardStore }
