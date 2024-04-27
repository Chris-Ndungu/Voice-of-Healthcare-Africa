import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Button from 'primevue/button'
import Galleria from 'primevue/galleria'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(router)

app.component('ButtonPrime', Button)
app.component('GalleriaPrime', Galleria)

app.mount('#app')
