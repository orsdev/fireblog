import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";

// import Toast from "vue-toastification";
import router from "./router";

import "./assets/css/main.css";

// const options = {
//   timeout: 6000,
// };


let app = createApp(App)
app.use(createPinia());
// app.use(Toast, options);
app.use(router);
app.mount('#app')
