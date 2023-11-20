import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ScientistView from '@/views/ScientistView.vue'
import FormView from '@/views/FormView.vue'
import LaboratoryView from '@/views/LaboratoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlesView
    },
    {
      path: '/scientist',
      name: 'scientist',
      component: ScientistView
    },
    { path: '/reg-form', name: 'reg-form', component: FormView },
    { path: '/laboratory', name: 'laboratory', component: LaboratoryView }
  ]
})

export default router
