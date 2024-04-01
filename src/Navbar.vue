<template>
    <nav>
      <!-- Other navigation items -->
      <button v-if="!isAuthenticated" @click="login">Log In</button>
      <button v-else @click="logout">Log Out</button>
    </nav>
  </template>
  
  <script>
import { computed } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'Navbar',
  setup() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    
    return {
      isAuthenticated: computed(() => isAuthenticated.value),
      login: loginWithRedirect,
      logout,
    };
  },
};

  
  </script>
  
  <style>
  /* Your CSS styling */
  </style>
  
  