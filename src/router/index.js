import { createRouter, createWebHistory } from 'vue-router'

import LaboratoryView from '@/views/LaboratoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
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
              path: 'sci-fi-kitchen',
              name: 'sciKitchen',
              component: () => import('@/views/SciFi/SciKitchenView.vue'),
              meta: { breadcrumb: 'Научная кухня' }
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
          path: 'sno',
          meta: {
            breadcrumb: 'СНО'
          },
          children: [
            {
              name: 'sno',
              path: '',
              component: () => import('@/views/SnoView.vue')
            },
            {
              path: 'reg-form',
              name: 'reg-form',
              component: () => import('@/views/FormView.vue'),
              meta: {
                breadcrumb: 'Стать участником'
              }
            }
          ]
        },
        {
          path: 'grants',
          meta: {
            breadcrumb: 'Гранты'
          },
          children: [
            {
              path:'',
              name: 'grants',
              component: () => import('@/views/GrantsView.vue'),
            },
            {
              path: 'grant',
              name: 'grant',
              component: () => import('@/views/GrantView.vue'),
              meta: {
                breadcrumb: 'Грант'
              }
            }
          ]
        },

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
