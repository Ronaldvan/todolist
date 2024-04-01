import Vue from 'vue';
import createAuth0Client from '@auth0/auth0-spa-js';

/** Define a default action to call if the login must happen. */
let redirectCallback = () => window.history.replaceState({}, document.title, window.location.pathname);

let instance;

/** Returns the Auth0 client. */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 client. */
export const useAuth0 = ({
    onRedirectCallback = redirectCallback,
    redirectUri = window.location.origin,
    ...options
}) => {
    if (instance) return instance;

    // Creates the Auth0 client
    instance = createAuth0Client({
        domain: options.domain,
        client_id: options.clientId,
        audience: options.audience,
        redirect_uri: redirectUri
    });

    Vue.prototype.$auth = instance;

    return instance;
};

// Vue plugin to use the Auth0 instance
export const Auth0Plugin = {
    install(Vue, options) {
        Vue.prototype.$auth = useAuth0(options);
    }
};
