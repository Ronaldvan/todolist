<template>
    <div>
      <!-- Login UI elements -->
      <button @click="login">Log In</button>
    </div>
  </template>
  
  <script>
  import { useAuth0 } from '@auth0/auth0-vue';
  
  export default {
    name: 'Login',
    setup() {
      // Get the loginWithRedirect function from the Auth0 plugin
      const { loginWithRedirect } = useAuth0();
  
      // Define the login method using loginWithRedirect
      const login = async () => {
        await loginWithRedirect();
      };
  
      // Return the login method to make it available in the template
      return {

        
        login,
      };
    },
  };
  </script>
  
  <style>
  /* Your CSS styling */
  </style>
  