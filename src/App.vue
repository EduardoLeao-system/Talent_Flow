<template>
  <div>
    <div class="preloader" :class="{ 'loaded': isLoaded }">
      <div class="spinner"></div>
    </div>
    <Navbar />
    <div class="floating-theme-toggle" v-if="$route.path === '/' || $route.path === '/login'">
      <ThemeToggle />
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import '../assets/appStyle.css'
import '../assets/transitions.css'
import '../assets/spinner.css'
import '../assets/theme.css'

export default {
  components: {
    Navbar,
    ThemeToggle
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // Simular tempo de carregamento e depois esconder o preloader
    document.body.style.backgroundColor = '#212529';
    setTimeout(() => {
      this.isLoaded = true;
      document.body.style.backgroundColor = '';
    }, 500);
  }
}
</script>
<style>
.floating-theme-toggle {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
}
</style>