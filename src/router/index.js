import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '../views/ArticlesView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlesView
    },
    { path: '/form', name: 'form', component: FormView }
  ]
})

export default router
