import App from '@/App.vue'
import { Pinia } from '@/store'
import { createSSRApp } from 'vue'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia)
  return { app, Pinia }
}
