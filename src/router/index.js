import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IlustrationView from '../views/IlustrationView.vue'
import AvecillasView from '../views/AvecillasView'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import CompraDenegada from '../views/CompraDenegada.vue';
import CompraAprobada from '../views/CompraAprobada.vue';
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/ilustraciones',
    name: 'ilustraciones',
    component: IlustrationView
  },
  {
    path: '/ilustraciones/:nombre',
    name: 'ilustrationsDetails',
    component: () => import('@/views/IlustrationDetailView.vue')
  },
  {
    path: '/avecillas',
    name: 'avecillas',
    component: AvecillasView
  },
  {
    path: '/avecillas/:nombre',
    name: 'avecillasDetails',
    component: () => import('@/views/AvecillasDetailView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/aprobada',
    name: 'aprobada',
    component: CompraAprobada
  },
  {
    path: '/denegada',
    name: 'denegada',
    component: CompraDenegada
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
