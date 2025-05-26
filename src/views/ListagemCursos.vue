<template>
  <div class="container mt-4 pb-4">
  <h2 style="color: #ffffff;">Lista de Cursos</h2>
    <div class="row mb-4 card-container">
      <div class="global-bg"></div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo">
            <h5 class="card-title">Java para iniciantes</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo">
            <h5 class="card-title">Docker para iniciantes</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
       <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="Docker Logo">
            <h5 class="card-title">PHP para iniciantes</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEIyk7Bjt7kj8_-9Km2Jx-BjsahCxTN3ilw&s" alt="Keyboard Logo">
            <h5 class="card-title">Informática Avançada</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo">
            <h5 class="card-title">Python para Data Science</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo">
            <h5 class="card-title">React JS Avançado</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter Logo">
            <h5 class="card-title">Desenvolvimento Mobile com Flutter</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js Logo">
            <h5 class="card-title">Vue.js Completo</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo">
            <h5 class="card-title">Design UI/UX com Figma</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo">
            <h5 class="card-title">Node.js para Backend</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo">
            <h5 class="card-title">MongoDB para Desenvolvedores</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-info">
          <div class="card-body text-center">
            <img class="image-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow Logo">
            <h5 class="card-title">Inteligência Artificial com TensorFlow</h5>
            <button class="btn btn-outline-secondary">Saiba mais</button>
          </div>
        </div>
      </div>
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
import '../../assets/background.css'
import '/assets/listadeCursos.css'
import '../../assets/common-background.css'

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
