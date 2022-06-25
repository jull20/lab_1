import { createRouter, createWebHistory } from 'vue-router'
import catalog_item from '../pages/catalog_item'



const routes = [
  {
    path: '/catalog/:id',
    name: catalog_item ,
    component: catalog_item,
    props: true
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../pages/catalog.vue')
  },
  {
    path: '/log_in',
    name: 'log_in',
    component: () => import('../pages/log_in.vue')
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: () => import('../pages/sign_up.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../pages/report.vue')
  },
  {
    path: '/constructor',
    name: 'constructor',
    component: () => import('../pages/constructor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
