<template>
  <div class="login-page">
    <div class="global-bg"></div>
    <div class="login-container" id="login-container" :class="{ 'move': showRegister }">
      <div class="form-container">
        <form
          class="form form-login"
          @submit.prevent="login"
        >
          <h2 class="form-title">Entrar com</h2>
          <div class="form-social">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p class="form-text">ou utilize sua conta</p>
          <div class="form-input-container">
            <input
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="Email"
              required
            />
            <input
              v-model="form.senha"
              type="password"
              class="form-input"
              placeholder="Senha"
              required
            />
          </div>
          <button class="btn-forgot">Esqueceu a senha?</button>
          <button type="submit" class="form-button">Logar</button>
          <p class="mobile-text">
            Não tem conta?
            <a href="#" @click.prevent="showRegisterForm">Registre-se</a>
          </p>
        </form>

        <form
          class="form form-register"
          @submit.prevent="register"
        >
          <h2 class="form-title">Registrar-se</h2>
          <div class="form-input-container">
            <input
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="Email"
              required
            />
            <input
              v-model="form.senha"
              type="password"
              class="form-input"
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit" class="form-button">Registrar</button>
          <p class="mobile-text">
            Já tem uma conta?
            <a href="#" @click.prevent="showLogin">Login</a>
          </p>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <h2 class="form-title form-title-light">Já tem uma conta? </h2>
          <p>Para se manter conectado, faça login com suas informações</p>
          <button class="form-button form-button-light" @click="showLogin">Entrar</button>
        </div>
        <div class="overlay">
          <h2 class="form-title form-title-light">Olá!</h2>
          <p>Cadastre-se e comece a usar nossa plataforma</p>
          <button class="form-button form-button-light" @click="showRegisterForm">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import api from '../services/api'
import '../../assets/background.css'

export default {
  name: 'AppLogin',
  data() {
    return {
      form: { email: '', senha: '' },
      showRegister: false
    }
  },
  methods: {
    async login() {
      try {
        // Permitir qualquer usuário e senha
        localStorage.setItem('token', 'token-simulado')
        localStorage.setItem('userName', this.form.email.split('@')[0])
        this.$router.push('/dashboard')
      } catch {
        // Em caso de erro, ainda permite o acesso
        localStorage.setItem('token', 'token-simulado')
        localStorage.setItem('userName', 'usuário')
        this.$router.push('/dashboard')
      }
    },
    async register() {
      try {
        await api.post('/register', this.form)
        alert('Cadastro realizado com sucesso!')
        this.showLogin()
      } catch {
        alert('Erro ao cadastrar.')
      }
    },
    showLogin() { this.showRegister = false },
    showRegisterForm() { this.showRegister = true }
  }
}
</script>

<style scoped>


.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.login-bg {
  /* Usando a classe global para o background */
  z-index: -1;
}

.login-box {
  background: rgba(29, 24, 24, 0.8);
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(60, 40, 40, 0.2);
  max-width: 400px;
  width: 100%;
  margin: 20vh auto;
  color: rgb(8, 8, 9 68, 110);
  box-sizing: border-box;
}

.btn-forgot {
  border: none;
  color: #232427;
  font-size: 0.9rem;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
}

.form-login .btn-forgot {
  color: #e6e6e6;
}

.btn-forgot:hover {
  color: #1e1f27;
  transform: translateY(-1px);
  background-color: rgba(141, 200, 230, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.fa-solid fa-bars {
  transition: transform 0.3s;
  transform: rotate(90deg);
}

:root{
  --primary-color: #FF3131;
  --secundary-color: #FFF;
  --text-color-dark: #000;
  --text-color-light: #fff;
  --icon-color: #F3F3F3;
}
.form-button{
  width: 140px;
  height: 40px;
  border-style: none;
  border-radius: 50px;
  border: 2px solid var(--primary-color);
  background-color: transparent;
  font-size: 1rem;
  font-weight: 800;
  color: var(--primary-color);
  cursor: pointer;
  transition: .7s;
}

.form-button:hover{
  background-color: var(--primary-color);
  color: var(--secundary-color);
}

.form-button-light{
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
}

.form-button-light:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width:768px) {
  .form-button{
    background-color: var(--primary-color);
    color: var(--secundary-color);
    border: 2px solid var(--secundary-color);
  }
}
.form-container{
  height: 100%;
  width: 100%;
  display: flex;
}
.form-input-container{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-input{
  width: 300px;
  height: 40px;
  padding: 10px 20px;
  border-style: none;
  background-color: var(--icon-color);
}
.form-social{
  display: flex;
  gap: 24px;
}
.form-login .form-title{
  font-size: 2rem;
  font-weight: 400;
  color: #ffffff;
}

.form-title-light{
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  font-weight: 500;
}
.form {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 55px 0;
  transition: 1s;
}

.form-login {
  background-color: #1a4971;
}

.form-register {
  background-color: #e0e0e0;
}

.form-register{
  transform: translateX(-100%);
  z-index: -1;
  opacity: 0;
}

.login-container.move .form-login{
  transform: translateX(100%);
  background-color: #4682B4;
}

.login-container.move .form-register{
  transform: translateX(0%);
  z-index: 1;
  opacity: 1;
  background-color: #e0e0e0;
}

@media (max-width:768px){
  .form{
    width: 100%;
    justify-content: space-evenly;
  }
  .form-login {
    background-color: #1a4971;
  }
  .form-register{
    position: absolute;
    background-color: #e0e0e0;
    color: #333333;
    transform: translateX(100%);
  }
  .login-container.move .form-register{
    transform: translateX(0%);
  }
}
.login-container{
  position: relative;
  height: 480px;
  width: 768px;
  border-radius: 12px;
  box-shadow: none;
  overflow: hidden;
  z-index: 10;
  background-color: transparent;
}

@media (max-width:768px){
  .login-container{
    width: 75vw;
    height: 75vh;
    background-color: transparent;
  }
}

@media (max-width:480px){
  .login-container{
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    background-color: transparent;
  }
}
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-text{
  display: none;
}

@media (max-width:768px){
  .mobile-text{
    display: block;
  }
  .mobile-text a {
    font-weight: 900;
    color: inherit;
  }
}
.overlay-container{
  position: absolute;
  top:0;
  left: 0;
  width: 50%;
  height: 100%;
  color: #ffffff;
  text-align: center;
  transform: translateX(100%);
  z-index: 10;
  transition: 1s;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.login-container.move .overlay-container{
  transform: translateX(0%);
}

@media (max-width:768px) {
  .overlay-container{
    display: none;
  }
}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;
  background: linear-gradient(135deg, #1a4971 0%, #0f3050 100%);
  transition: 1s;
}

.overlay p {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
}

.login-container.move .overlay:nth-child(2) {
  z-index: -1;
  opacity: 0;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Red Hat Display', sans-serif;
}

a{
  text-decoration: none;
  color: var(--text-color-dark);
}
.social-icon{
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.2rem;
  background-color: var(--icon-color);
  box-shadow: 0 4px 4px #0004;
  transition: .5s;
}

.social-icon:hover{
  background-color: var(--primary-color);
  transform: translateY(-15%);
  color: var(--text-color-light);
}

.form-text {
  margin: 10px 0;
}

.form-login .form-text {
  color: #ffffff;
}
</style>
