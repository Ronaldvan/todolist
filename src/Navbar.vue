<template>
    <nav>
      <!-- Other navigation items -->
      <button v-if="!isAuthenticated" @click="login">Log In</button>
      <button v-else @click="logout">Log Out</button>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isAuthenticated: false
      };
    },
    async created() {
      this.isAuthenticated = await this.$auth.isAuthenticated();
    },
    methods: {
      async login() {
        await this.$auth.loginWithRedirect();
      },
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      }
    }
  }
  </script>
  
  <style>
  /* Your CSS styling */
  </style>
  