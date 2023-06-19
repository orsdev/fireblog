import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import router from "./router";
import { ToastPlugin } from './plugins';

import "./assets/css/main.css";
import "vue-toastification/dist/index.css";
import { auth } from './firebase';

const toastOptions = {
  timeout: 6000,
};

let app: any;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia());
    app.use(Toast, toastOptions);
    app.use(ToastPlugin);
    app.use(router);
    app.mount('#app')
  }
})

