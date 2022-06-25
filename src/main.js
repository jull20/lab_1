import { createApp } from 'vue'
import App from './App'
import router from './router'
import './assets/tailwind.css'
// import Api from "@/pages/api.js"
import { Vue } from 'vue'

createApp(App).use(router) .mount('#app')

// new Vue ({
//     el: '#app',
//     data: Api,
//     render: h=> h(App)
// })




