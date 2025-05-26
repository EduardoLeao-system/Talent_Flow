import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import CadastroCurso from '../views/CadastroCurso.vue'
import Feedback from '../views/Feedback.vue'
import ListagemCursos from '../views/ListagemCursos.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cadastro', name: 'CadastroCurso', component: CadastroCurso },
  { path: '/feedback', name: 'Feedback', component: Feedback },
  { path: '/cursos', name: 'ListagemCursos', component: ListagemCursos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
