import { createRouter, createWebHistory } from 'vue-router';
import AppUserD from '././components/AppUserD';

const routes = [
  {
    name: 'user',
    path: '/user',
    component: AppUserD,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
