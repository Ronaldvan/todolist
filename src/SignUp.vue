<template>

    <div class="signup-container">

      <div class="signup-card">

        <h1 class="signup-title">Sign Up</h1>

        <form @submit.prevent="signUp" class="signup-form">

          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>

          <button type="submit" class="signup-button">Sign Up</button>
        </form>

        <div class="login-link">
          Already have an account? <router-link to="/login">Log In</router-link>
        </div>

      </div>

    </div>

  </template>
  
  <script>
  import { ref, inject } from 'vue';
  
  export default {
    name: 'SignUp',
    setup() {
      const auth0 = inject('auth0'); // Get the Auth0 instance
  
      // Reactive state for form fields
      const email = ref('');
      const password = ref('');
  
      // Function to be called when the form is submitted
      const signUp = async () => {
        if (auth0) {
  
          // Redirect to the Auth0 signup page
          await auth0.loginWithRedirect({
            screen_hint: 'signup',
            // Optionally, prefill the email or include any additional signup parameters
            login_hint: email.value,
          });
        } 
        else {
          console.error('Auth0 client instance is not available.');
        }
      };
  
      // Expose the signup function and reactive state to the template
      return {
        email,
        password,
        signUp,
      };
    },
  };
  </script>
