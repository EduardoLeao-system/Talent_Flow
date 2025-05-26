<template>
  <div>
    <div class="preloader" :class="{ 'loaded': isLoaded }">
      <div class="spinner"></div>
    </div>
    <Navbar />
    <!-- Botão de alternância de tema removido -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import ThemeToggle from './components/ThemeToggle.vue' - Removido
import '../assets/appStyle.css'
import '../assets/transitions.css'
import '../assets/spinner.css'
import '../assets/theme.css'
import '../assets/common-background.css'

export default {
  components: {
    Navbar
    // ThemeToggle removido
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // Simular tempo de carregamento e depois esconder o preloader
    document.body.style.backgroundColor = '#121920';
    setTimeout(() => {
      this.isLoaded = true;
      document.body.style.backgroundColor = '#121920';
    }, 500);
  }
}
</script>
<style>
/* Estilo do botão flutuante de tema removido */
</style>