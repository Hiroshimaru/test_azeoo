import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events"

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App)

app.use(Vue3TouchEvents, {
    swipeTolerance: 50
})
app.use(router)
app.use(PrimeVue, { ripple: true })
app.component('Button', Button)

app.mount('#app')