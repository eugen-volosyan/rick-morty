import Vue from 'vue'
import VueRouter from 'vue-router'
import RickAndMortyList from '../views/RickAndMortyList.vue'
import RickAndMortyCaracter from '../views/RickAndMortyCaracter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },
  {
    path: '/caracter',
    name: 'RickAndMortyCaracter',
    component: RickAndMortyCaracter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
