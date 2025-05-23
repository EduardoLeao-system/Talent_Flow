<template>
  <div class="container mt-4">
    <h2>Lista de Cursos</h2>
    <div class="row mb-4">
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo">
            <h5 class="card-title">Java</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo">
            <h5 class="card-title">Docker</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <!-- Adicione mais quadros aqui seguindo o mesmo padrão -->
    </div>
    <!-- Lista real de cursos -->
    <ul class="list-group">
      <li v-for="curso in cursos" :key="curso.id" class="list-group-item">
        <strong>{{ curso.nome }}</strong><br />
        <small>{{ curso.descricao }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api'
import '/assets/listadeCursos.css'

export default {
  data() {
    return { cursos: [] }
  },
  async mounted() {
    const res = await api.get('/cursos')
    this.cursos = res.data
  }
}
</script>
