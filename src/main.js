import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue';
import 'popper.js';
import 'feather-icons';
import 'bootstrap-icons/font/bootstrap-icons';

createApp(App).use(BootstrapVue).use(IconsPlugin).use(store).use(router).mount('#app');
