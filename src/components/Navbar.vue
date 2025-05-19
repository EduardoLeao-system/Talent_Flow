<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Talent Flow</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cursos">Cursos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastro">Cadastrar Curso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/feedback">Feedback</router-link>
          </li>
        </ul>

        <button class="btn btn-outline-light" @click="logout">Sair</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'AppNavbar',
  setup() {
    const router = useRouter()
    function logout() {
      localStorage.removeItem('token')
      router.push('/login')
    }
    return { logout }
  }
}
</script>
