<template>
  <div>
    <div class="global-bg"></div>
    <div class="container mt-4">
      <div class="card shadow-sm">
        <div class="card-header">
          <h2 class="mb-0"><i class="bi bi-chat-dots"></i> Feedback</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="enviarFeedback">
            <div class="mb-3">
              <label class="form-label">Nome</label>
              <input type="text" v-model="nome" class="form-control bg-white text-dark" placeholder="user" />
            </div>
            <div class="mb-3">
              <label class="form-label">Curso</label>
              <select v-model="cursoSelecionado" class="form-control bg-white text-dark">
                <option value="">Selecione um curso</option>
                <option v-for="curso in cursos" :key="curso.id" :value="curso.id">
                  {{ curso.nome }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Sua Mensagem</label>
              <textarea v-model="mensagem" class="form-control bg-white text-dark" rows="3" required
                placeholder="Digite seu comentário..."></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-send"></i> Enviar
              </button>
            </div>
          </form>

          <!-- Comentários -->
          <div class="mt-4">
            <h4><i class="bi bi-chat-square-text"></i> Comentários ({{ comentarios.length }})</h4>
            <div class="comment-list">
              <div v-for="(comentario, index) in comentarios" :key="index" class="comment-item mt-3">
                <div class="d-flex align-items-center mb-2">
                  <div class="comment-avatar me-2">
                    {{ comentario.autor.charAt(0) }}
                  </div>
                  <div>
                    <strong>{{ comentario.autor }}</strong>
                    <small class="text-muted ms-2">{{ comentario.data }}</small>
                  </div>
                </div>
                <div class="comment-bubble">
                  {{ comentario.texto }}
                </div>
                <small v-if="comentario.curso" class="text-muted">
                  <i class="bi bi-book"></i> {{ comentario.curso }}
                </small>
              </div>
            </div>
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
import '../../assets/common-background.css'
import '../../assets/feedback-simple.css'
import api from '../services/api'

export default {
  name: 'AppFeedback',
  data() {
    return {
      mensagem: '',
      nome: 'user',
      cursoSelecionado: '',
      cursos: [
        { id: 1, nome: 'Java para iniciantes' },
        { id: 2, nome: 'Docker para iniciantes' },
        { id: 3, nome: 'PHP para iniciantes' },
        { id: 4, nome: 'Python para Data Science' },
        { id: 5, nome: 'React JS Avançado' }
      ],
      comentarios: [
        {
          autor: 'Usuario',
          data: '2 dias atrás',
          texto: 'Parece que programadores Python realmente sabem como olhar profundamente dentro de um código.',
          curso: 'Python para Data Science'
        },
        {
          autor: 'Usuario',
          data: '1 semana atrás',
          texto: 'Docker é incrível ! Agora posso transportar meu codigo em um container diretamente para o espaço, finalmente !',
          curso: 'Docker para iniciantes'
        },
        {
          autor: 'Usuario',
          data: ' 1 dia atrás',
          texto: 'Gostei de React um framework que faz você se sentir como um mago (e às vezes como um bruxo).',
          curso: 'React JS Avançado'
        }
      ]
    }
  },
  methods: {
    async enviarFeedback() {
      try {
        const feedback = {
          mensagem: this.mensagem,
          nome: this.nome || 'user',
          cursoId: this.cursoSelecionado
        };

        await api.post('/feedback', feedback);

        // Adicionar o comentário à lista local para exibição imediata
        const cursoSelecionado = this.cursos.find(c => c.id === parseInt(this.cursoSelecionado));

        this.comentarios.unshift({
          autor: this.nome || 'user',
          data: 'Agora mesmo',
          texto: this.mensagem,
          curso: cursoSelecionado ? cursoSelecionado.nome : null
        });

        // Limpar o formulário
        this.mensagem = '';

        // Notificar o usuário
        alert('Feedback enviado com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar feedback:', error);
        alert('Erro ao enviar feedback.');
      }
    }
  }
}
</script>
