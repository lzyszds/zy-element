import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ZyElement from "zy-element";


createApp(App)
  .use(ZyElement)
  .mount('#app')
