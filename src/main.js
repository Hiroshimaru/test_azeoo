import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import PrimeVue from 'primevue/config'
import Noir from './assets/styles/themeNoir.js'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
})
app.use(store)

app.mount('#app')
