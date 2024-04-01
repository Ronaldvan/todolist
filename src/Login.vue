<template>

    <div class="login-container">

      <div class="login-card">

        <h1 class="login-title">Login</h1>

        <form @submit.prevent="login" class="login-form">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" required>
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" required>
          </div>

          <button type="submit" class="login-button">Log In</button>
          <a href="#" class="forgot-password">Forgot password?</a>
        </form>

        <div class="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </div>

      </div>

    </div>
  </template>
  
  <script>
import { inject } from 'vue';

export default {
  name: 'Login',
  setup() {
    // Inject the Auth0 client instance provided by the Auth0Plugin
    const auth0 = inject('auth0');

    // Define an async function that calls the loginWithRedirect method
    const login = async () => {
      if (auth0) {
        await auth0.loginWithRedirect();
      } else {
        console.error('Auth0 client instance is not available.');
      }
    };

    // Expose the login function to the template
    return {
      login,
    };
  },
};
</script>
  
