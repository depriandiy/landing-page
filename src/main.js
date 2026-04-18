import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'swiper/css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';
import { Swiper } from 'swiper/vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
// app.use(Vue3Lottie);
app.use(router);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: { darkModeSelector: 'none' }
    }
}).use(ToastService);

app.mount('#app');
