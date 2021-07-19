import { createApp } from 'vue';
import App from './App';
import store from './store/coinsList';
import './assets/tailwind.css';

createApp(App).use(store).mount('#app');
