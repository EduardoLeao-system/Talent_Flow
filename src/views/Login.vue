<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email</label>
          <input v-model="form.email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Senha</label>
          <input v-model="form.senha" type="password" class="form-control" required />
        </div>
        <button class="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name : 'AppLogin',
  data() {
    return {
      form: { email: '', senha: '' }
    }
  },
  methods: {
    async login() {
      try {
        const res = await api.post('/login', this.form)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/dashboard')
      } catch {
        alert('Login inválido.')
      }
    }
  }
}
</script>
