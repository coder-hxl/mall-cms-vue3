import { createApp } from 'vue'
import { globalRegisterApp } from './global'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'

const app = createApp(App)

app.use(globalRegisterApp)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
