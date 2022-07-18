import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

// Firebase ENV
import app from './firebase'

import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@lottiefiles/lottie-player'

createApp(App)
    .use(app as any)
    .use(createPinia())
    .use(router)
    .mount('#app')
