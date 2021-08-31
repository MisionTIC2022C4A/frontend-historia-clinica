<template>
  <div id="app" class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" v-on:click="init">Historia Clínica</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" v-on:click="init"
              >Inicio <span class="sr-only"></span
            ></a>
          </li>
          <li class="nav-item">
            <a v-on:click="buscarPaciente" class="nav-link" href="#"
              >Buscar paciente</a
            >
          </li>
          <li class="nav-item">
            <a v-on:click="ingresarPaciente" class="nav-link" href="#"
              >Agregar paciente</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="main-component mt-5">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
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
}
body {
    margin-bottom:72px;
}
.navbar-brand{
  margin-left: 1.5rem !important;
}
</style>
