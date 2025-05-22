<template>
  <div class="container mt-4">
    <h2>Cadastrar Curso</h2>
    <form @submit.prevent="cadastrarCurso">
      <div class="mb-3">
        <label>Nome do Curso</label>
        <input v-model="curso.nome" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Descrição</label>
        <textarea v-model="curso.descricao" class="form-control" required></textarea>
      </div>
      <button class="btn btn-success">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      curso: { nome: '', descricao: '' }
    }
  },
  methods: {
    async cadastrarCurso() {
      try {
        await api.post('/cursos', this.curso)
        alert('Curso cadastrado!')
        this.curso = { nome: '', descricao: '' }
      } catch (e) {
        alert('Erro ao cadastrar: ' + e.message)
      }
    }
  }
}
</script>
