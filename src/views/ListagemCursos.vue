<template>
  <div class="container">
    <h2>Lista de Cursos</h2>
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
