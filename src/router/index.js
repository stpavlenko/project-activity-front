import { createRouter, createWebHistory } from 'vue-router'

import FormView from '@/views/FormView.vue'
import LaboratoryView from '@/views/LaboratoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
              component: () => import('@/views/SciFi/SciFiMainView.vue')
            },
            {
              path: ':id',
              name: 'sciFiView',
              props: true,
              component: () => import('@/views/SciFi/SciFiView.vue'),
              meta: (route) => ({ breadcrumb: route.params.id })
            }
          ]
        },
        {
          path: 'articles',
          meta: {
            breadcrumb: 'Статьи'
          },
          children: [
            {
              component: () => import('@/views/ArticlesView.vue'),
              path: '',
              name: 'articles'
            },
            {
              path: 'article',
              name: 'article',
              component: () => import('@/views/ArticleView.vue'),
              meta: {
                breadcrumb: 'Статья'
              }
            }
          ]
        },
        // {
        //   path: 'articles/article',
        //   name: 'article',
        //   component: import('@/views/ArticleView.vue'),
        //   meta: {
        //     breadcrumb: 'Статья'
        //   }
        // },
        {
          path: 'scientists',
          name: 'scientists',
          component: () => import('@/views/ScientistsView.vue'),
          meta: {
            breadcrumb: 'Ученые'
          }
        },
        {
          path: 'scientist',
          name: 'scientist',
          component: () => import('@/views/ScientistView.vue'),
          meta: {
            breadcrumb: 'Ученый'
          }
        },
        {
          path: 'laboratories',
          name: 'laboratories',
          component: () => import('@/views/LaboratoriesView.vue'),
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
        },
        {
          path: 'sno',
          name: 'sno',
          component: () => import('@/views/SnoView.vue'),
          meta: {
            breadcrumb: 'Студенческое научное общество'
          }
        }
      ]
    },

    // {
    //   path: '/scientists',
    //   name: 'scientists',
    //   component: ScientistsView
    // },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: LaboratoryView,
      meta: {
        breadcrumb: 'Лаборатория'
      }
    }
  ]
})

export default router
