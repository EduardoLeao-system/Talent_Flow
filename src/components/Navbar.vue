<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <router-link class="fa fa-home" aria-hidden="true" to="/"></router-link>

      <!-- Botão hambúrguer -->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard" @click="closeNavbar">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cursos" @click="closeNavbar">Cursos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastro" @click="closeNavbar">Cadastrar Curso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/feedback" @click="closeNavbar">Feedback</router-link>
          </li>
        </ul>

        <!-- Botão de sair com toast e fechamento do menu -->
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

    // Fecha o menu em mobile ao clicar em qualquer link ou botão
    function closeNavbar() {
      const navbar = document.getElementById('navbarNav')
      if (navbar && navbar.classList.contains('show')) {
        navbar.classList.remove('show')
      }
    }

    function logout() {
      // Confirmação de logout e feedback visual simples
      if (confirm('Deseja realmente sair?')) {
        localStorage.removeItem('token')
        closeNavbar()
        alert('Logout realizado com sucesso.') // Substituir por toast se necessário
        router.push('/login')
      }
    }

    return { logout, closeNavbar }
  }
}
</script>

<style scoped>
@media (max-width: 991.98px) {
  .navbar-nav {
    margin-left: 0 !important;
    margin-right: 0 !important;
    justify-content: start !important;
  }
}
</style>
