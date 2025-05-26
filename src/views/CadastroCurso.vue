<template>
  <div class="container mt-4">
    <div class="global-bg"></div>
    <div class="card shadow-sm">
      <div class="card-header">
        <h2 class="mb-0">Cadastro de Curso</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="salvarCurso">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="nome" class="form-label">Nome do Curso</label>
              <input
                id="nome"
                type="text"
                class="form-control"
                v-model="curso.nome"
                required
                placeholder="Ex: Java para Iniciantes"
              />
            </div>
            <div class="col-md-6">
              <label for="categoria" class="form-label">Categoria</label>
              <select
                id="categoria"
                class="form-select"
                v-model="curso.categoria"
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="programacao">Programação</option>
                <option value="design">Design</option>
                <option value="devops">DevOps</option>
                <option value="data_science">Ciência de Dados</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="carga_horaria" class="form-label">Carga Horária (horas)</label>
              <input
                id="carga_horaria"
                type="number"
                class="form-control"
                v-model="curso.cargaHoraria"
                required
                min="1"
              />
            </div>
            <div class="col-md-6">
              <label for="nivel" class="form-label">Nível</label>
              <select
                id="nivel"
                class="form-select"
                v-model="curso.nivel"
                required
              >
                <option value="">Selecione o nível</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
            <div class="col-12">
              <label for="descricao" class="form-label">Descrição</label>
              <textarea
                id="descricao"
                class="form-control"
                v-model="curso.descricao"
                rows="4"
                required
                placeholder="Descreva o conteúdo do curso..."
              ></textarea>
            </div>
            <div class="col-12">
              <label for="imagem" class="form-label">URL da Imagem</label>
              <input
                id="imagem"
                type="url"
                class="form-control"
                v-model="curso.imagem"
                placeholder="https://exemplo.com/imagem.png"
              />
            </div>
            <div class="col-12 d-flex gap-2 justify-content-end mt-4">
              <button type="button" class="btn btn-dark" @click="$router.push('/cursos')">
                Cancelar
              </button>
              <button type="submit" class="btn btn-secondary">
                Salvar Curso
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
import '../../assets/styleCadastro.css'
import '../../assets/background.css'
import '../../assets/common-background.css'
import '../../assets/modern-form.css'

export default {
  data() {
    return {
      curso: {
        nome: '',
        categoria: '',
        cargaHoraria: null,
        nivel: '',
        descricao: '',
        imagem: ''
      }
    }
  },
  methods: {
    async salvarCurso() {
      try {
        await api.post('/cursos', this.curso)
        this.$router.push('/cursos')
      } catch (error) {
        console.error('Erro ao salvar curso:', error)
      }
    }
  }
}
</script>
