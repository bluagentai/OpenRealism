import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Programs from '../views/Programs.vue'
import Agents from '../views/Agents.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router