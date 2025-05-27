<template>
  <div class="top-bar">
    <div class="top-bar__content" style="height: 60px;">
      <!-- Ícone da casa aparece apenas em rotas específicas (excluindo login, cursos, cadastro e feedback) -->
      <router-link 
        class="fa fa-home" 
        aria-hidden="true" 
        to="/" 
        v-if="!$route.path.includes('/dashboard') && 
              !$route.path.includes('/login') && 
              !$route.path.includes('/cursos') && 
              !$route.path.includes('/cadastro') && 
              !$route.path.includes('/feedback')">
      </router-link>

      <!-- Botão de toggle da sidebar -->
      <button class="sidebar-toggle" @click="toggleSidebar" v-if="$route.path.includes('/dashboard')">
        <i class="bi bi-lightning-charge-fill"></i>
      </button>
      
      <!-- Botão de alternância de tema removido -->

      <!-- Botão hambúrguer -->
      <button class="hamburger" :class="{ 'hamburger--open': isMenuOpen }" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>

    <!-- Menu de navegação separado do content para posicionamento correto -->
    <div class="mobile-menu" v-if="isMenuOpen">
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item">
          <router-link class="mobile-menu__link" to="/dashboard" @click="closeNavbar">Dashboard</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link class="mobile-menu__link" to="/cursos" @click="closeNavbar">Cursos</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link class="mobile-menu__link" to="/cadastro" @click="closeNavbar">Cadastrar Curso</router-link>
        </li>
        <li class="mobile-menu__item">
          <router-link class="mobile-menu__link" to="/feedback" @click="closeNavbar">Feedback</router-link>
        </li>
        <li class="mobile-menu__item">
          <button class="btn" @click="logout">Sair</button>
        </li>
      </ul>
    </div>

    <!-- Menu desktop -->
    <nav class="nav desktop-menu">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/dashboard">Dashboard</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/cursos">Cursos</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/cadastro">Cadastrar Curso</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/feedback">Feedback</router-link>
        </li>
        <li class="nav__item">
          <button class="btn" @click="logout">Sair</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// import ThemeToggle from './ThemeToggle.vue' - Removido
import '/assets/navbar.css'
import '/assets/theme.css'

export default {
  name: 'AppNavbar',
  components: {
    // ThemeToggle removido
  },
  setup() {
    const router = useRouter()
    const isMenuOpen = ref(false)

    // Alterna o estado do menu
    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value
    }

    // Fecha o menu em mobile ao clicar em qualquer link ou botão
    function closeNavbar() {
      isMenuOpen.value = false
    }

    // Toggle da sidebar do dashboard
    function toggleSidebar() {
      // Emite um evento que será capturado pelo componente Dashboard
      window.dispatchEvent(new CustomEvent('toggle-sidebar'))
    }

    function logout() {
      // Confirmação de logout e feedback visual simples
      if (confirm('Deseja realmente sair?')) {
        localStorage.removeItem('token')
        closeNavbar()
        alert('Logout realizado com sucesso.')
        router.push('/login')
      }
    }

    return { logout, closeNavbar, toggleMenu, isMenuOpen, toggleSidebar }
  }
}
</script>

<style scoped>
/* Ajustes adicionais para a navbar */
.top-bar {
  position: relative;
  z-index: 1000;
  background-color: rgb(19, 22, 26);
}

.top-bar__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

/* Botão de alternância de tema removido */

/* Botão de toggle da sidebar */
.sidebar-toggle {
  background-color: transparent;
  color: #3498db;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: 20px;
  transition: transform 0.3s ease;
}

.sidebar-toggle:hover {
  transform: scale(1.1);
  color: #2980b9;
}

/* Menu mobile */
.mobile-menu {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: rgb(19, 22, 26);
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px 0;
}

.mobile-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu__item {
  padding: 10px 20px;
  text-align: center;
}

.mobile-menu__link {
  color: white;
  font-size: 18px;
  text-decoration: none;
  display: block;
  padding: 8px 0;
}

/* Desktop menu */
.desktop-menu {
  display: none;
}

/* Esconde o botão hambúrguer em telas grandes */
.hamburger {
  cursor: pointer;
  display: none;
}

.bar {
  height: 2px;
  width: 30px;
  background-color: #fff;
  margin: 5px 0;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
}

.hamburger--open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger--open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger--open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Ajustes para telas pequenas (mobile) */
@media (max-width: 650px) {
  .hamburger {
    display: block;
  }

  .desktop-menu {
    display: none;
  }
}

/* Ajustes para telas grandes (desktop) */
@media (min-width: 651px) {
  .desktop-menu {
    display: block;
    position: absolute;
    right: 20px;
    top: 15px;
  }

  .nav__list {
    display: flex;
    gap: 20px;
  }

  .mobile-menu {
    display: none !important;
  }
}

.btn {
  color: #fff;
  background-color: #0071e3;
  padding: 8px 20px;
  border-radius: 1000px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn:hover {
  background-color: rgb(28, 128, 228);
}
</style>
