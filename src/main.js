/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify';
// Composables
import { createApp } from 'vue'
import router from "@/router";
import {createPinia} from "pinia";

const app = createApp(App)
const pinia =createPinia();
const toast={autoClose: 3000}
registerPlugins(app)

app.use(router).use(pinia).use(Vue3Toastify,toast).mount('#app')
