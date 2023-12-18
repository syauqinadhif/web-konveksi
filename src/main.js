import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// import { createApp } from 'vue';
import VueFeather from 'vue-feather';

// const app = createApp({});

import "bootstrap/dist/js/bootstrap.bundle"
const app = createApp(App)

app.use(router)
app.use( VueSplide );
app.component(VueFeather.name, VueFeather);

app.mount('#app')


