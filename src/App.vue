<template>
  <div id="app" class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" v-on:click="init">Historia Clínica</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" v-on:click="init">Inicio
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="buscarPaciente" class="nav-link" href="#">Buscar paciente</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click="ingresarPaciente" href="#">Agregar paciente</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    <div class="main-component mt-4">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <!-- Footer -->
    <footer class="text-center text-lg-start text-muted">
      <!-- Copyright -->
      <div
        class="text-center p-4"
        id="text-footer"
      >
        © 2021 Copyright: Equipo 2 MisiónTIC 2022 C4A
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>


<script>
import gql from "graphql-tag";

export default {
  name: "App",

  data: function () {
    return {};
  },

  created: function () {},

  methods: {
    init: function () {
      this.$router.push({
        name: "root",
      });
    },
    buscarPaciente: function () {
      this.$router.push({
        name: "buscarPaciente",
      });
    },

    ingresarPaciente: function () {
      this.$router.push({
        name: "ingresarPaciente",
      });
    },
  },
};
</script>

<style>

footer {
  position: fixed;
  height: 72px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  background-color: #78c2ad
}

#text-footer {
  color: #ebeced;
  
}
body {
    margin-bottom:72px;
}
.navbar-brand{
  margin-left: 1.5rem !important;
  font-weight: bold;
  
}
.nav-link {
  color:#ebeced
}

#text-footer {
  color: #ebeced;
}

a{
  color: #ebeced;
}

h2 {
  color: #3e6c76;
}

</style>
