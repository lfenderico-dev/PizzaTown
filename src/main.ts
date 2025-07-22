import './assets/tailwind.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

onMounted(() => {
  AOS.refresh()
})

AOS.init()

import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
