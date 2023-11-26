import { createRouter, createWebHistory } from 'vue-router'

import FormView from '@/views/FormView.vue'
import ScientistsView from '@/views/ScientistsView.vue'
import LaboratoryView from '@/views/LaboratoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      meta: {
        breadcrumb: 'Главная'
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'sci-fi',
          meta: {
            breadcrumb: 'Научно-популярные проекты'
          },
          children: [
            {
              path: '',
              name: 'sciFiMain',
              component: import('@/views/SciFiMainView.vue')
            }
          ]
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
          path: 'scientists',
          name: 'scientists',
          component: import('@/views/ScientistsView.vue'),
          meta: {
            breadcrumb: 'Ученые'
          }
        },
        {
          path: 'scientist',
          name: 'scientist',
          component: import('@/views/ScientistView.vue'),
          meta: {
            breadcrumb: 'Ученый'
          }
        },
        {
          path: 'laboratories',
          name: 'laboratories',
          component: import('@/views/LaboratoriesView.vue'),
          meta: {
            breadcrumb: 'Лаборатории'
          }
        },
        {
          path: 'reg-form',
          name: 'reg-form',
          component: FormView,
          meta: {
            breadcrumb: 'Стать участником'
          }
        }
      ]
    },

    {
      path: '/scientists',
      name: 'scientists',
      component: ScientistsView
    },
    { path: '/laboratory', name: 'laboratory', component: LaboratoryView }
  ]
})

export default router
