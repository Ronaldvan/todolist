import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/Login.vue';
import SignUp from '@/SignUp.vue';

// Define some routes.Each route should map to a component

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, 
  },

  {
    path: '/signup',        
    name: 'SignUp',
    component: SignUp,
  },

];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
