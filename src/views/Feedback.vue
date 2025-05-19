<template>
  <div class="container">
    <h2>Enviar Feedback</h2>
    <form @submit.prevent="enviarFeedback">
      <div class="mb-3">
        <label>Mensagem</label>
        <textarea v-model="mensagem" class="form-control" required></textarea>
      </div>
      <button class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
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
