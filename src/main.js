import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
// import App from './App.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './lab1.vue'
// import App from './App4.vue'
// import App from './lab2.vue'
// import App from './asm1.vue'
// import App from './App.vue'
// import router from './router'
// import App from './App9.vue'
// import App from './App11.vue'
// import App from './App11.b.vue'
import App from './App12.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
