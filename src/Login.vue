<template>
    <div>
      <!-- Your login UI elements go here -->
      <button @click="login">Log In</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    methods: {
      async login() {
        await this.$auth.loginWithRedirect();
      }
    }
  }
  </script>
  
  <style>
  /* Your CSS styling */
  </style>
  