import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layouts/page-layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import(/* webpackChunkName: "homepage-view" */ '@/views/homepage/homepage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router