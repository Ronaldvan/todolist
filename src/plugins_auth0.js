// plugins_auth0.js
import { createAuth0Client } from '@auth0/auth0-spa-js';

// Reactive Auth0 client instance
export const auth0Client = {
  client: null,
};

// Initialize the Auth0 client instance
export const initializeAuth0 = async (options) => {
  const client = await createAuth0Client({
    domain: options.domain,
    client_id: options.clientId,
    redirect_uri: options.redirectUri || window.location.origin,
    ...options,
  });
  auth0Client.client = client;
};

export const Auth0Plugin = {
  install: (app) => {
    app.config.globalProperties.$auth = auth0Client.client;
  },
};
