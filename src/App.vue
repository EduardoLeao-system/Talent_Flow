<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
import '../assets/appStyle.css'

export default {
  components: {
    Navbar

  }
}
</script>
