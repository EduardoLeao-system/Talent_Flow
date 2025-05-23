<!-- template de Dashboad para alteraçoes -->
<template>
  <div class="dashboard-container">
    <!-- Saudação personalizada -->
    <div class="welcome-section mb-4">
      <h2 class="greeting">Olá, {{ userName }}!</h2>
      <p class="text-muted">{{ welcomeMessage }}</p>
    </div>

    <!-- Estatísticas/Métricas -->
    <div class="stats-container row mb-4">
      <div class="col-md-4 mb-3" v-for="stat in statistics" :key="stat.title">
        <div class="stat-card" :class="stat.colorClass">
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <!--Estatisticas gerais por exemplo de um curso cadastrado por exemplo e seus dados -->
          <div class="stat-content">
            <h3 class="stat-value">{{ stat.value }}</h3>
            <p class="stat-title">{{ stat.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards principais com layout uniforme -->
    <h4 class="section-title mb-3">Ações Rápidas</h4>
    <div class="row feature-cards">
      <!-- Todos os cards com o mesmo tamanho -->
      <div class="col-md-4 mb-3" v-for="(card, index) in cards" :key="index">
        <div class="feature-card"
             :class="[index === 0 ? 'primary-card' : index === 1 ? 'secondary-card' : 'tertiary-card', {'card-hovered': hoveredCard === index}]"
             @mouseover="hoveredCard = index" @mouseleave="hoveredCard = null">
          <div class="card-content">
            <div class="icon-container">
              <i :class="card.icon"></i>
            </div>
            <h4>{{ card.text }}</h4>
            <p>{{ card.description }}</p>
            <router-link :to="card.route" class="btn mt-2" :class="index === 0 ? 'btn-primary' : 'btn-outline-primary'">
              Acessar <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Atividades recentes -->
    <div class="row mt-4">
      <div class="col-md-12 mb-3">
        <div class="recent-activities-card">
          <h4 class="section-title">Atividades Recentes</h4>
          <div class="activity-list">
            <div v-for="(activity, index) in recentActivities" :key="index" class="activity-item">
              <div class="activity-icon">
                <i :class="activity.icon"></i>
              </div>
              <div class="activity-details">
                <p class="activity-text">{{ activity.text }}</p>
                <small class="activity-time">{{ activity.time }}</small>
              </div>
            </div>
            <div v-if="recentActivities.length === 0" class="no-activities">
              <p>Nenhuma atividade recente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '/assets/main.css'

/*rotas de navegaçao*/
export default {
  name: 'AppDashboard',
  data() {
    return {
      userName: 'usuário',
      welcomeMessage: 'Bem-vindo ao seu painel de controle',
      cards: [
        {
          text: 'Cadastrar Curso',
          route: '/cadastro',
          icon: 'bi bi-plus-circle',
          description: 'Adicione novos cursos à plataforma de forma rápida e fácil.'
        },
        {
          text: 'Listar Cursos',
          route: '/cursos',
          icon: 'bi bi-list-ul',
          description: 'Visualize e gerencie todos os cursos cadastrados.'
        },
        {
          text: 'Feedback',
          route: '/feedback',
          icon: 'bi bi-chat-left-text',
          description: 'Veja os comentários e avaliações dos usuários.'
        }
      ],
      /*estatisticas de cursos cadastrados, feedbacks recebidos e taxa de engajamento de usuarios*/
      statistics: [
        {
          title: 'Cursos Cadastrados',
          value: '24',
          icon: 'bi bi-book',
          colorClass: 'blue-gradient'
        },
        {
          title: 'Feedbacks Recebidos',
          value: '128',
          icon: 'bi bi-chat-square-text',
          colorClass: 'purple-gradient'
        },
        {
          title: 'Taxa de Engajamento',
          value: '87%',
          icon: 'bi bi-graph-up',
          colorClass: 'green-gradient'
        }
      ],

      /*atividades recentes muitas atividades muitas atividades*/
      recentActivities: [
        { text: 'Curso "Docker para iniciantes" foi adicionado', time: 'Há 2 horas', icon: 'bi bi-plus-circle-fill' },
        { text: 'Novo feedback recebido para "React Native"', time: 'Há 5 horas', icon: 'bi bi-chat-left-text-fill' },
        { text: 'Curso "Java + SpringBoot para iniciantes" foi atualizado', time: 'Há 1 dia', icon: 'bi bi-pencil-fill' }
      ],


    }
  },
  mounted() {
    // isso poderia buscar dados reais da API
    this.getUserInfo();
    this.getStatistics();
    this.getRecentActivities();
  },
  methods: {
    getUserInfo() {
      // simulaçao busca de informações do usuário
      // uma API faria isso
      setTimeout(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
          this.userName = storedName;
        }
      }, 500);
    },
    getStatistics() {
      // Simulando busca de estatísticas
      // Em um caso real, isso viria de uma API
    },
    getRecentActivities() {
      // Simulando busca de atividades recentes
      // Em um caso real, isso viria de uma API
    }
  }
}
</script>
