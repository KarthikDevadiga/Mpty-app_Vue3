import { createRouter, createWebHistory } from 'vue-router';
import AppUserD from '../components/AppUserD.vue';
import LandingPage from '../views/AppLandingPage.vue';

const routes = [
  {
    name: 'landing',
    path: '/',
    component: LandingPage,
  },
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
