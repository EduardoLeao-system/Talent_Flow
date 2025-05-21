/* template de Dashboad para alteraçoes */
<template>
  <div>
    <h2 class="text-center">Dashboard</h2>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="card in cards" :key="card.text">
        <div class="card h-100 text-center">
          <div class="card-body">
            <i :class="card.icon" style="font-size: 2rem;"></i>
            <h5 class="card-title mt-2">{{ card.text }}</h5>
            <router-link :to="card.route" class="btn btn-outline-primary mt-2">Acessar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/*rotas de navegaçao*/
export default {
  name: 'AppDashboard',
  data() {
    return {
      cards: [
        { text: 'Cadastrar Curso', route: '/cadastro', icon: 'bi bi-plus-circle' },
        { text: 'Listar Cursos', route: '/cursos', icon: 'bi bi-list-ul' },
        { text: 'Feedback', route: '/feedback', icon: 'bi bi-chat-left-text' }
      ]
    }
  }
}
</script>
