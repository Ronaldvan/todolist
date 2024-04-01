import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/Login.vue';

// Define some routes
// Each route should map to a component
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // Add more routes as needed
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
