import { createRouter, createWebHistory } from 'vue-router'

import FormView from '@/views/FormView.vue'
import ScientistsView from '@/views/ScientistsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: {
        breadcrumb: 'Главная'
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'articles',
          name: 'articles',
          component: import('@/views/ArticlesView.vue'),
          meta: {
            breadcrumb: 'Статьи'
          }
        },
        {
          path: 'scientist',
          name: 'scientist',
          component: import('@/views/ScientistView.vue'),
          meta: {
            breadcrumb: 'Ученые'
          }
        },
        { path: '/reg-form', name: 'reg-form', component: FormView }
      ]
    },

    {
      path: '/scientists',
      name: 'scientists',
      component: ScientistsView
    }
    { path: '/laboratory', name: 'laboratory', component: LaboratoryView }
  ]
})

export default router
