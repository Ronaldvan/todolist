import { createApp } from 'vue';
import App from './App.vue';
import Login from './Login.vue';
import router from './router/router.js'; // Make sure this imports your Vue Router configuration correctly
import { Auth0Plugin } from '@auth0/auth0-vue'; // Make sure this is the correct import from the Auth0 SDK

// The Auth0 client options
const auth0Options = {
  domain: 'dev-4wxpi680juv4b7fh.us.auth0.com', // Replace with your Auth0 domain
  clientId: 'i7Re7yxrmFswTXNgTn7hc6uUA3kECFnF', // Replace with your Auth0 client ID
  // The onRedirectCallback function handles the event where Auth0 redirects back to your app after authentication
  onRedirectCallback: (appState) => {
    // Use the router to navigate to the target route after login
    router.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
  },
};

// Create a new Vue application with the App component
const app = createApp(App);

// Use the Vue Router plugin
app.use(router);

// Use the Auth0 plugin with the provided options
app.use(Auth0Plugin, auth0Options);

// Mount the Vue application to the DOM
app.mount('#app');
