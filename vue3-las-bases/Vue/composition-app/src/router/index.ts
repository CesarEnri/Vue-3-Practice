import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from "@/shared/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/views/CounterView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () =>
      {
        console.log("Ruta no existe");
        return{name: 'home'};
      },
    }
  ]
})

export default router
