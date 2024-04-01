import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; // Adjust the import if necessary
import { Auth0Plugin, initializeAuth0 } from './plugins_auth0.js';

// Auth0 client options
const auth0Options = {
  domain: 'dev-4wxpi680juv4b7fh.us.auth0.com',
  clientId: 'VRGUbvKBdKn1yOpuacctKI4o1NohplII',
  
};

// Initialize Auth0 before creating the app
initializeAuth0(auth0Options).then(() => {
  const app = createApp(App);

  app.use(router);
  app.use(Auth0Plugin);

  app.mount('#app');
}).catch(error => {
  console.error('Auth0 client initialization failed:', error);
});
