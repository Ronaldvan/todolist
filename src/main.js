import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import { Auth0Plugin } from '@auth0/auth0-vue';
import router from './router'; // Assuming you have Vue Router set up

const app = createApp(App);

app.use(router); // Use Vue Router
app.use(Auth0Plugin, {
  domain: 'dev-4wxpi680juv4b7fh.us.auth0.com',
  clientId: 'i7Re7yxrmFswTXNgTn7hc6uUA3kECFnF',
  onRedirectCallback: (appState) => {
    router.push(appState?.returnTo || window.location.pathname);
  },
});

app.mount('#app');
