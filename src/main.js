import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createClient} from './commands/supabase';
createApp(App).use(store).use(store).use(router).use(createClient).mount('#app')
