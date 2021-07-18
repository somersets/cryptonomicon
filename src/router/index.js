import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Главная', component: () => import('../views/Home') },
  {
    path: '/list',
    name: 'Валюты',
    component: () => import('../views/tickers/index')
  },
  {
    path: '/list/ticker/:id',
    name: 'Валюта',
    component: () => import('../views/tickers/ticker/_id')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
