import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')