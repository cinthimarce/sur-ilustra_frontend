import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IlustrationView from '../views/IlustrationView.vue'
import AvecillasView from '../views/AvecillasView'
import ContactView from '../views/ContactView.vue'

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
    path: '/avecillas',
    name: 'avecillas',
    component: AvecillasView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
