<template>
  <div id="BuscarPaciente mt-5">
    <div class="card m-5">
            <div class="container-fluid m-3">
    
      <form class="row g-3 m-3" v-on:submit.prevent="buscarPaciente">
        

        <div class="col-md-3">
          <label for="inputState" class="form-label">Tipo</label>
          <select
            id="inputState"
            class="form-select"
            v-model="paramsSearch.tipoIdentificacion"
          >
            <option selected value="TI">TI</option>
            <option value="CC">CC</option>
          </select>
        </div>
        <div class="col-md-9">
          <label for="numId" class="form-label">No. de documento</label>
          <input
            type="text"
            class="form-control"
            v-model="paramsSearch.numeroIdentificacion"
            id="numId"
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary m-3">Buscar</button>
        </div>
      </form>
      <div class="row">

      <div class="col-12 mt-5" v-if="isPatient">
        <h4 class="text-center">El paciente identificado con <i>{{paramsSearch.tipoIdentificacion}} </i>.
        <i> {{paramsSearch.numeroIdentificacion}} </i> no se encuentra registrado en el sistema. 
        </h4>

        <h4 class="text-center">Si desea ingresarlo, haga clic en el siguiente botón:</h4>
        
        <div class="text-center">
        <button type="button" class="btn btn-primary m-4" v-on:click="ingresarPaciente">Ingresar paciente</button>
        </div>
      </div>
      </div>
      <table class="table mr-5" v-if="isTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">VER</th>
            <th scope="col">Historia Clinica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{ patient.nombreCompleto }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="verPaciente"
              >
                Ver paciente
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-primary">
                Ver historia clinica
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "BuscarPaciente",

  data: function () {
    return {
      isTable: false,
      isPatient: false,

      paramsSearch: {
        tipoIdentificacion: "",
        numeroIdentificacion: "",
      },
      patient: {
        ciudad: " ",
        direccion: " ",
        estadoCivil: " ",
        fechaNacimiento: " ",
        nombreCompleto: "  ",
        numeroIdentificacion: " ",
        ocupacion: " ",
        telefono: " ",
        tipoIdentificacion: " ",
        nombreAcompanante: " ",
      },
    };
  },

  created: function () {
    this.username = this.$route.params.patient;
  },
  methods: {
    buscarPaciente: async function () {
      await this.$apollo

        .query({
          query: gql`
            query (
              $getPatientNumeroIdentificacion: String!
              $getPatientTipoIdentificacion: String!
            ) {
              getPatient(
                numeroIdentificacion: $getPatientNumeroIdentificacion
                tipoIdentificacion: $getPatientTipoIdentificacion
              ) {
                numeroIdentificacion
                tipoIdentificacion
                nombreCompleto
                estadoCivil
                ocupacion
                direccion
                ciudad
                telefono
                email
                aseguradora
                vinculacion
                fechaNacimiento
                nombreAcompanante
              }
            }
          `,
          variables: {
            getPatientTipoIdentificacion: this.paramsSearch.tipoIdentificacion,
            getPatientNumeroIdentificacion:
              this.paramsSearch.numeroIdentificacion,
          },
        })
        .then((result) => {
          this.patient = result.data.getPatient;
          this.isTable = true;
          this.isPatient = false;
          console.log(result);
        })
        .catch((error) => {
          this.isPatient = true;
          this.isTable = false;
        });
    },
    verPaciente: function () {
      this.$router.push({
        name: "mostrarPaciente",
        /*props:{patient:this.patient},*/
        params: { patient: JSON.stringify(this.patient) },
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
/* #BuscarPaciente {
  width: 100%;
  height: 120%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */

#BuscarPaciente h2 {
  font-size: 30px;
  color: #283747;
}
#BuscarPaciente span {
  color: crimson;
  font-weight: bold;
}

#BuscarPaciente button  {
  height:20px; 
  width:100px; 
  margin: -20px -50px; 
  position:relative; 
  top:50%; 
  left:50%; }
</style>