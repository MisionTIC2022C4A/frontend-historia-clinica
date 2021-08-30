<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Historia Clínica</h1>

      <nav>
        <button v-on:click="init">Inicio</button>
        <button v-on:click="buscarPaciente">Buscar Paciente</button>
        <button v-on:click="ingresarPaciente">Ingresar Paciente</button>
      </nav>
    </div>

    <div class="main-component">
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
    return {
    };
  },

  created: function () {
  },

  methods: {
    

    buscarPaciente: function () {
      this.$router.push({
        name: "buscarPaciente"
      });
    },


    ingresarPaciente: function () {
      this.$router.push({
        name: "ingresarPaciente"
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
