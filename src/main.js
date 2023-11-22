import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ProjectBreadcrumb from '@/components/ProjectBreadcrumb.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('ProjectBreadcrumb', ProjectBreadcrumb)
app.use(createPinia())
app.use(router)

app.mount('#app')
