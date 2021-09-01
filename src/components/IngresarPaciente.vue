<template>
  <div id="IngresarPaciente">
    <div class="container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center">
                        Ingresar paciente
                    </h2>
                </div>
            </div>
            <div class="row">
                <form role="form" v-on:submit.prevent="createPatient">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="card m-2">
                                <h5 class="card-header">
                                    Datos personales
                                </h5>
                                <div class="card-body">
                            
                                    <div class="form-group">
                                        <label for="numeroIdentificacion">
                                            ID
                                        </label>
                                        <input 
                                        type="text"
                                        class="form-control" 
                                        id="numeroIdentificacion" 
                                        v-model="patient.numeroIdentificacion"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="tipoIdentificacion">Tipo de documento</label>
                                        <select 
                                        class="form-control" 
                                        id="tipoIdentificacion"
                                        v-model="patient.tipoIdentificacion"
                                        >
                                            <option>TI</option>
                                            <option>CC</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="fechaNacimiento">
                                            Fecha de nacimiento
                                        </label>
                                        <input 
                                        type="date" 
                                        class="form-control" 
                                        id="fechaNacimiento" 
                                        v-model="patient.fechaNacimiento"
                                        />
                                    
                                    </div>
                                    <div class="form-group">
                                        <label for="estadoCivil">Estado civil</label>
                                        <select class="form-control" 
                                        id="estadoCivil"
                                        v-model="patient.estadoCivil"
                                        >
                                            <option>Soltero</option>
                                            <option>Casado</option>
                                            <option>Divorciado</option>
                                            <option>Viudo</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="ocupacion">
                                            Ocupación
                                        </label>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        id="ocupacion" 
                                        v-model="patient.ocupacion"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="nombreCompleto">
                                            Nombre completo
                                        </label>
                                        <input 
                                        type="text" 
                                        class="form-control"
                                        id="nombreCompleto" 
                                        v-model="patient.nombreCompleto"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="aseguradora">Aseguradora</label>
                                        <select 
                                        class="form-control" 
                                        id="aseguradora"
                                        v-model="patient.aseguradora"
                                        >
                                            <option>Sura</option>
                                            <option>NuevaEPS</option>
                                            <option>Colsanitas</option>
                                            <option>Cafesalud</option>
                                        </select>
                                    </div>
                                    <div class="form-check">
                                        <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="exampleRadios" 
                                        id="exampleRadios1" 
                                        value="subsidiado" 
                                        v-model="patient.vinculacion"
                                        
                                        >
                                        <label class="form-check-label" for="exampleRadios1">
                                        Subsidiado
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="exampleRadios" 
                                        id="exampleRadios2" 
                                        value="contributivo"
                                        v-model="patient.vinculacion"
                                        >
                                        <label class="form-check-label" for="exampleRadios2">
                                        Contributivo
                                        </label>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="card m-2">
                                <h5 class="card-header">
                                    Residencia
                                </h5>
                                <div class="card-body">
                                    <form role="form">
                                        <div class="form-group">

                                            <label for="direccion">
                                                Dirección
                                            </label>
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            id="direccion"
                                            v-model="patient.direccion" 
                                            />
                                        </div>
                                        <div class="form-group">

                                            <label for="ciudad">
                                                Ciudad
                                            </label>
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            id="ciudad" 
                                            v-model="patient.ciudad"
                                            />
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                            <div class="card m-2">
                                <h5 class="card-header">
                                    Datos de contacto
                                </h5>
                                <div class="card-body">
                                
                                        <div class="form-group">

                                            <label for="telefono">
                                                Teléfono
                                            </label>
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            id="telefono" 
                                            v-model="patient.telefono"
                                            />
                                        </div>
                                        <div class="form-group">

                                            <label for="email">
                                                Correo
                                            </label>
                                            <input 
                                            type="email" 
                                            class="form-control" 
                                            id="email" 
                                            v-model="patient.email"
                                            />
                                        </div>
                                        <div class="form-group">

                                            <label for="acompañante">
                                                Acompañante
                                            </label>
                                            <input 
                                            type="text" 
                                            class="form-control" 
                                            id="acompañante" 
                                            v-model="patient.nombreAcompanante"
                                            />
                                        </div>
                                    
                                </div>
                            </div>
                            <div class="row m-2">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <div class="row m-2">
                                      <button type="submit" class="btn btn-primary">Enviar</button>
                                    </div>
                                    <div class="row m-2">
                                      <button type="button" class="btn btn-danger" v-on:click="init">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "IngresarPaciente",

  data: function () {
    return {
      patient: {
        numeroIdentificacion: "",
        tipoIdentificacion: "",
        nombreCompleto: "",
        fechaNacimiento: "",
        estadoCivil: "",
        ocupacion: "",
        direccion: "",
        ciudad: "",
        telefono: "",
        email: "",
        nombreAcompanante: "",
        aseguradora: "",
        vinculacion: "",
        fechaIngreso: this.formatoFechaActual(),
      },
    };
  },
   methods: {
 init: function () {
      this.$router.push({
        name: "root",
      });
    },
    createPatient: async function () {
        debugger
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($createPatientPatient: PatientInput!) {
                createPatient(patient: $createPatientPatient) {
                    numeroIdentificacion
                    tipoIdentificacion
                    aseguradora
                    vinculacion
                    fechaIngreso
                    nombreAcompanante
                    email
                    telefono
                    ciudad
                    direccion
                    nombreCompleto
                    fechaNacimiento
                    estadoCivil
                    ocupacion
                 }
            }
        `,
          
       variables: {
            createPatientPatient: this.patient,
          },
        })
        .then((result) => {
          alert("El paciente fue ingresado correctamente")
        })
        .catch((error) => {
            alert("Se presentó un error al ingresar el paciente");
        });
    },
    formatoFechaActual(){
        var date = new Date();
        let formatted_date =date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        return formatted_date;
        },
  },
};

</script>


<style>
</style>