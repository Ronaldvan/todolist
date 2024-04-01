// plugins_auth0.js
import { createAuth0Client } from '@auth0/auth0-spa-js';
import { reactive } from 'vue';

// Reactive Auth0 client instance
const auth0Client = reactive({
  client: null,
});

// Define a default action to call if the login must happen
const redirectCallback = () => window.history.replaceState({}, document.title, window.location.pathname);

// Function to create an instance of the Auth0 client
export const createAuth0 = async (options) => {
  auth0Client.client = await createAuth0Client({
    domain: options.domain,
    client_id: options.clientId,
    redirect_uri: options.redirectUri || window.location.origin,
    ...options,
  });
  return auth0Client.client;
};

// Vue 3 plugin to use the Auth0 instance
export const Auth0Plugin = {
  install: (app, options) => {
    // Initialize the Auth0 client instance
    createAuth0({
      onRedirectCallback: options.onRedirectCallback || redirectCallback,
      ...options,
    }).then((auth0) => {
      // Provide the Auth0 client instance to the entire app
      app.provide('auth0', auth0);
    });
  },
};
