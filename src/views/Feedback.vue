<template>
  <div>
    <div class="global-bg"></div>
    <div class="page-content">
      <div class="container mt-4">
        <div class="card shadow-sm">
          <div class="card-header">
            <h2 class="mb-0">Enviar Feedback</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="enviarFeedback">
              <div class="mb-3">
                <label class="form-label">Mensagem</label>
                <textarea v-model="mensagem" class="form-control" rows="4" required></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '../../assets/background.css'
import '../../assets/transitions.css'
import '../../assets/styleCadastro.css'
import api from '../services/api'

export default {
  name: 'AppFeedback',
  data() {
    return { mensagem: '' }
  },
  methods: {
    async enviarFeedback() {
      try {
        await api.post('/feedback', { mensagem: this.mensagem })
        alert('Feedback enviado!')
        this.mensagem = ''
      } catch {
        alert('Erro ao enviar feedback.')
      }
    }
  }
}
</script>
