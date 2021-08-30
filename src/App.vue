<template>
  <div id="app" class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Historia Clínica</a>
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
            <a class="nav-link" href="#"
            v-on:click="init"
              >Inicio <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a v-on:click="buscarPaciente" class="nav-link" href="#">Buscar paciente</a>
          </li>
            <li class="nav-item">
            <a v-on:click="ingresarPaciente" class="nav-link" href="#">Agregar paciente</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="main-component mt-5">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
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
body {
  margin: 0 0 0 0;
}

.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100px;
  margin: 0%;
  padding: 0;

  background-color: #283747;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}

.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;

  background: #fdfefe;
}

.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 75px;

  background-color: #283747;
  color: #e5e7e9;
}

.footer h2 {
  margin: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
