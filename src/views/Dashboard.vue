<template>
  <div class="dashboard-wrapper">
    <!-- Removido o botão de toggle da sidebar, agora está na navbar -->

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'open': sidebarOpen }">
      <div class="sidebar-brand">
        <span>Talent Flow</span>
        <button class="close-sidebar-btn" @click="toggleSidebar">Fechar</button>
      </div>
      
      <div class="sidebar-user" @click="goToLogin" style="cursor: pointer;">
        <div class="user-avatar">{{ userName.charAt(0).toUpperCase() }}</div>
        <div class="user-info">
          <h4>{{ userName }}</h4>
          <span>Administrador</span>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <router-link to="/cadastro" class="nav-link">
          <i class="bi bi-plus-circle"></i>
          <span>Cadastrar Curso</span>
        </router-link>
        <router-link to="/cursos" class="nav-link">
          <i class="bi bi-list-ul"></i>
          <span>Listar Cursos</span>
        </router-link>
        <router-link to="/feedback" class="nav-link">
          <i class="bi bi-chat-left-text"></i>
          <span>Feedback</span>
        </router-link>
        <router-link to="/login" class="nav-link">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </router-link>
      </nav>
      
      <div class="sidebar-footer">
        <p>© {{ new Date().getFullYear() }} Talent Flow</p>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <main class="main-content">
      <header class="content-header">
        <h1>Dashboard</h1>
      </header>

      <div class="content-body">
        <!-- Cards de estatísticas -->
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in statistics" :key="index">
            <div class="stat-icon" :class="stat.colorClass">
              <i :class="stat.icon"></i>
            </div>
            <div class="stat-details">
              <h3 class="stat-value">{{ stat.value }}</h3>
              <p class="stat-label">{{ stat.title }}</p>
              <div class="stat-trend" :class="stat.trend">
                <i :class="stat.trendIcon"></i>
                <span>{{ stat.change }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Seção de ações rápidas -->
        <section class="content-section">
          <div class="section-header">
            <h2><i class="bi bi-lightning-charge"></i> Ações Rápidas</h2>
          </div>
          <div class="action-cards">
            <div class="action-card" v-for="(card, index) in cards" :key="index">
              <div class="card-icon" :class="card.colorClass">
                <i :class="card.icon"></i>
              </div>
              <h3>{{ card.text }}</h3>
              <p>{{ card.description }}</p>
              <router-link :to="card.route" class="action-btn" :class="card.buttonClass">
                {{ card.buttonText }}
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </section>

        <!-- Atividades recentes -->
        <section class="content-section">
          <div class="section-header">
            <h2><i class="bi bi-activity"></i> Atividades Recentes</h2>
          </div>
          <div class="activity-list">
            <div class="activity-item" v-for="(activity, index) in recentActivities" :key="index">
              <div class="activity-icon" :class="activity.colorClass">
                <i :class="activity.icon"></i>
              </div>
              <div class="activity-content">
                <p class="activity-text">{{ activity.text }}</p>
                <span class="activity-time">{{ activity.time }}</span>
              </div>
            </div>
            <div v-if="recentActivities.length === 0" class="no-activities">
              <p>Nenhuma atividade recente</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppDashboard',
  data() {
    return {
      sidebarOpen: false,
      userName: 'usuário',
      statistics: [
        {
          title: 'Cursos Cadastrados',
          value: '24',
          icon: 'bi bi-book',
          colorClass: 'blue',
          trend: 'positive',
          trendIcon: 'bi bi-arrow-up',
          change: '12% desde o mês passado'
        },
        {
          title: 'Feedbacks Recebidos',
          value: '128',
          icon: 'bi bi-chat-square-text',
          colorClass: 'purple',
          trend: 'positive',
          trendIcon: 'bi bi-arrow-up',
          change: '8% desde o mês passado'
        },
        {
          title: 'Taxa de Engajamento',
          value: '87%',
          icon: 'bi bi-graph-up',
          colorClass: 'green',
          trend: 'positive',
          trendIcon: 'bi bi-arrow-up',
          change: '5% desde o mês passado'
        }
      ],
      cards: [
        {
          text: 'Cadastrar Curso',
          route: '/cadastro',
          icon: 'bi bi-plus-circle',
          description: 'Adicione novos cursos à plataforma.',
          colorClass: 'blue',
          buttonClass: 'primary',
          buttonText: 'Cadastrar'
        },
        {
          text: 'Listar Cursos',
          route: '/cursos',
          icon: 'bi bi-list-ul',
          description: 'Visualize e gerencie os cursos existentes.',
          colorClass: 'green',
          buttonClass: 'outline',
          buttonText: 'Visualizar'
        },
        {
          text: 'Feedback',
          route: '/feedback',
          icon: 'bi bi-chat-left-text',
          description: 'Veja comentários e sugestões dos usuários.',
          colorClass: 'purple',
          buttonClass: 'outline',
          buttonText: 'Acessar'
        }
      ],
      recentActivities: [
        { 
          text: 'Curso "Docker" adicionado', 
          time: 'Há 2h', 
          icon: 'bi bi-plus-circle-fill',
          colorClass: 'blue'
        },
        { 
          text: 'Feedback para "React Native"', 
          time: 'Há 5h', 
          icon: 'bi bi-chat-left-text-fill',
          colorClass: 'purple'
        },
        { 
          text: 'Curso "Java + SpringBoot" atualizado', 
          time: 'Há 1d', 
          icon: 'bi bi-pencil-fill',
          colorClass: 'green'
        }
      ],
    }
  },
  mounted() {
    this.getUserInfo();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
    
    // Adiciona listener para o evento de toggle da sidebar vindo da navbar
    window.addEventListener('toggle-sidebar', this.toggleSidebar);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
    window.removeEventListener('toggle-sidebar', this.toggleSidebar);
  },
  methods: {
    getUserInfo() {
      setTimeout(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
          this.userName = storedName;
        }
      }, 500);
    },
    goToLogin() {
      this.$router.push('/login');
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    checkScreenSize() {
      if (window.innerWidth > 992) {
        this.sidebarOpen = true;
      } else {
        this.sidebarOpen = false;
      }
    }
  }
}
</script>

<style scoped>
/* Dashboard moderno e responsivo */
.dashboard-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: linear-gradient(135deg, #2c3e50, #1a252f);
  color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  overflow-y: auto;
}

.sidebar-brand {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.close-sidebar-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.7);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: none; /* Escondido por padrão em telas grandes */
}

.close-sidebar-btn:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.sidebar-user {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.user-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 1rem;
}

.user-info h4 {
  margin: 0;
  font-size: 1rem;
}

.user-info span {
  font-size: 0.8rem;
  opacity: 0.7;
}

.sidebar-nav {
  padding: 1.5rem 0;
  flex-grow: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: all 0.2s;
}

.nav-link:hover, .nav-link.active {
  background-color: rgba(255,255,255,0.1);
  color: #fff;
  border-left: 4px solid #3498db;
}

.nav-link i {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.1);
}

/* Conteúdo principal */
.main-content {
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  transition: margin-left 0.3s ease, width 0.3s ease;
  min-height: 100vh;
  width: calc(100% - 280px);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.content-header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
}

.date-display {
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #6c757d;
}

.date-display i {
  margin-right: 0.5rem;
  color: #3498db;
}

/* Cards de estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1.5rem;
}

.stat-icon.blue {
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
}

.stat-icon.purple {
  background-color: rgba(155, 89, 182, 0.1);
  color: #9b59b6;
}

.stat-icon.green {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.stat-details {
  flex: 1;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: #2c3e50;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0 0 0.5rem;
}

.stat-trend {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}

.stat-trend.positive {
  color: #2ecc71;
}

.stat-trend.negative {
  color: #e74c3c;
}

.stat-trend i {
  margin-right: 0.25rem;
}

/* Seções de conteúdo */
.content-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #2c3e50;
}

.section-header i {
  margin-right: 0.5rem;
  color: #3498db;
}

/* Cards de ação */
.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.action-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.card-icon.blue {
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
}

.card-icon.green {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.card-icon.purple {
  background-color: rgba(155, 89, 182, 0.1);
  color: #9b59b6;
}

.action-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: #2c3e50;
}

.action-card p {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0 0 1.5rem;
  line-height: 1.5;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
}

.action-btn.primary {
  background-color: #3498db;
  color: #fff;
}

.action-btn.primary:hover {
  background-color: #2980b9;
}

.action-btn.outline {
  border: 1px solid #3498db;
  color: #3498db;
}

.action-btn.outline:hover {
  background-color: rgba(52, 152, 219, 0.1);
}

.action-btn i {
  margin-left: 0.5rem;
}

/* Lista de atividades */
.activity-list {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 1rem;
}

.activity-icon.blue {
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
}

.activity-icon.purple {
  background-color: rgba(155, 89, 182, 0.1);
  color: #9b59b6;
}

.activity-icon.green {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.activity-content {
  flex: 1;
}

.activity-text {
  font-size: 0.95rem;
  color: #2c3e50;
  margin: 0 0 0.25rem;
}

.activity-time {
  font-size: 0.8rem;
  color: #6c757d;
}

.no-activities {
  text-align: center;
  padding: 2rem 0;
  color: #6c757d;
}

/* Botão de toggle removido, agora está na navbar */

/* Responsividade */
@media (max-width: 992px) {
  .sidebar {
    width: 260px;
    transform: translateX(-100%);
    z-index: 1000;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
    width: 100%;
    transition: margin-left 0.3s ease;
  }
  
  .stats-grid, .action-cards {
    grid-template-columns: 1fr;
  }
  
  .dashboard-wrapper {
    overflow-x: hidden;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1.5rem;
    padding-top: 4rem; /* Espaço para o botão de toggle */
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header-actions {
    margin-top: 1rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .stat-icon {
    width: 50px;
    height: 50px;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .sidebar.open ~ .main-content {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .close-sidebar-btn {
    display: block;
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 1rem;
  }
}
</style>