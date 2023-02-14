import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/indexRouter';
import App from './App.vue';
import 'leaflet/dist/leaflet.css';

const app = createApp(App);
app.use(createPinia()); //registering Pinia plugin
app.use(router);

console.log(App);
app.mount('#app');
