import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

// import { createApp } from 'vue';
import VueFeather from 'vue-feather';

// const app = createApp({});


const app = createApp(App)

app.use(router)
app.component(VueFeather.name, VueFeather);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
