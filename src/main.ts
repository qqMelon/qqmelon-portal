import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Firebase ENV
import app from './firebase'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@lottiefiles/lottie-player'

createApp(App)
    .use(app as any)
    .use(router)
    .mount('#app')
