<template>
  <div id="BuscarPaciente">
    <div class="container">
     <form class="row g-3" v-on:submit.prevent="buscarPaciente" >
 <!-- <div class="col-md-6">
    <label for="inputNombre" class="form-label">Nombres</label>
    <input type="nombres" class="form-control" id="inputNombre">
  </div>
  <div class="col-md-6">
    <label for="inputApellidos" class="form-label">Apellidos</label>
    <input type="apellidos" class="form-control" id="inputApellidos">
  </div>-->


  <div class="col-md-3">
    <label for="inputState" class="form-label">Tipo</label>
    <select id="inputState" class="form-select" v-model="paramsSearch.tipoIdentificacion">
      <option selected value="TI">TI</option>
      <option  value="CC">CC</option>
    </select>
  </div>
  <div class="col-md-9">
    <label for="numId" class="form-label">No. de documento</label>
    <input type="text" class="form-control" v-model="paramsSearch.numeroIdentificacion" id="numId">
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Buscar</button>
  </div>
  
     </form>

<div class="col-12" v-if="isPatience">
  <h2>POR FAVOR INGRESE UN NUEVO PACIENTE</h2>
  <button type="button" class="btn btn-primary">Ingresar paciente</button>


</div>

<table class="table" v-if="isTable">
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
      <td>{{patience.nombreCompleto}}</td>
      <td><button type="button" class="btn btn-primary" v-on:click="verPaciente">Ver paciente</button>
</td>
      <td><button type="button" class="btn btn-primary">Ver historia clinica</button>
</td>
    </tr>
    
  </tbody>
</table>

      
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "BuscarPaciente",

  data: function () {
    return {
      
      
      isTable:false,
      isPatience:false,

      paramsSearch:{
        tipoIdentificacion:'',
        numeroIdentificacion:''
      },
       patience:{
          ciudad: " ",
          direccion: " ",
          estadoCivil: " ",
          fechaNacimiento: " ",
          nombreCompleto: "  ",
          numeroIdentificacion: " ",
          ocupacion: " ",
          telefono: " ",
          tipoIdentificacion: " ",
       }
    };
  },

  created: function () {
    this.username = this.$route.params.patient;
  },
  methods:{
    buscarPaciente: async function () {
      await this.$apollo

        .query({
          query: gql`
            query ($getPatientNumeroIdentificacion: String!, $getPatientTipoIdentificacion: String!) {
              getPatient(numeroIdentificacion: $getPatientNumeroIdentificacion, tipoIdentificacion: $getPatientTipoIdentificacion) {
                numeroIdentificacion
                tipoIdentificacion
                nombreCompleto
                fechaNacimiento
                estadoCivil
                ocupacion
                direccion
                ciudad
                telefono
  }
}
          `,
          variables: {
            getPatientTipoIdentificacion: this.paramsSearch.tipoIdentificacion,
            getPatientNumeroIdentificacion: this.paramsSearch.numeroIdentificacion,

          },
        })
        .then((result) => {
          this.patience= result.data.getPatient;
          this.isTable= true;
          this.isPatience=false
          console.log(result)
        })
        .catch((error) => {
          this.isPatience=true;          
          this.isTable= false;

           // alert("Saldo Insuficiente o Destino Incorrecto");
        });
    },
    verPaciente: function(){
      this.$router.push({
        name: "mostrarPaciente",
        /*props:{patient:this.patience},*/
                params: { patient:JSON.stringify(this.patience) },

      });
    }
  }

};
</script>


<style>
#BuscarPaciente {
  width: 100%;
  height: 120%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}



#BuscarPaciente h2 {
  font-size: 30px;
  color: #283747;
}
#BuscarPaciente span {
  color: crimson;
  font-weight: bold;
}
</style>