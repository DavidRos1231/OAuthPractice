import vue3GoogleLogin from 'vue3-google-login'
import { createApp } from 'vue'
import App from './App.vue'

const ID_CLIENTE ="295238377589-c0a6jvcesvghq4hbgjk12qkefr2d70pi.apps.googleusercontent.com"

createApp(App)
.use(vue3GoogleLogin, {clientId:ID_CLIENTE})
.mount('#app')
