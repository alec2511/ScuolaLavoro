import {createApp} from 'vue'
import router from './router/index'
import App from '../src/App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
.use(router)
.mount('#app')
