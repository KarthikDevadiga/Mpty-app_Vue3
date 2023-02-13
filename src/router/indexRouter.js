import { createRouter, createWebHistory } from 'vue-router';
import AppUserD from '../components/AppUserD.vue';

const routes = [
  {
    name: 'user',
    path: '/user',
    component: AppUserD,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
