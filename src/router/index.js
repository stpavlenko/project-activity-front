import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ScientistView from '@/views/ScientistView.vue'
import ScientistsView from '@/views/ScientistView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/scientist',
      name: 'scientist',
      component: ScientistView
    },
    {
      path: '/scientists',
      name: 'scientists',
      component: ScientistsView
    },
    { path: '/reg-form', name: 'reg-form', component: FormView }
  ]
})

export default router
