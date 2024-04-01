import { createApp } from 'vue';
import App from './App.vue';
import Login from './Login.vue';
import SignUp from './SignUp.vue';
import router from './router/router.js'; // Make sure this imports your Vue Router configuration correctly
import { Auth0Plugin } from './plugins_auth0.js'; // Make sure this is the correct import from the Auth0 SDK


// Create a new Vue application with the App component
const app = createApp(App);

// Use the Vue Router plugin
app.use(router);

// Use the Auth0 plugin with the provided options
app.use(Auth0Plugin, {
    domain: 'dev-4wxpi680juv4b7fh.us.auth0.com',
    clientId: 'i7Re7yxrmFswTXNgTn7hc6uUA3kECFnF',
    // ... other Auth0 options ...
  });

// Mount the Vue application to the DOM
app.mount('#app');
