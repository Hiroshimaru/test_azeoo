import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import PrimeVue from 'primevue/config'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(store)

app.mount('#app')
