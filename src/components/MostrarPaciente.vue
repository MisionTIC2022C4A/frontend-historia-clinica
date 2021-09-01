<template>
  <div id="MostrarPaciente">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="text-center">
                    Información del paciente
                  </h3>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card bg-default m-3">
                        <div class="card-header">
                         <h4 class="text-center"> {{ patient.nombreCompleto }}</h4>
                       
                         <h4 class="text-center"> ID: <span> {{ patient.tipoIdentificacion }} {{ patient.numeroIdentificacion }} </span></h4>
                        </div>
                        <div class="card-body">
                          <div class="card-text">
                            <h5>
                              Edad:
                              <span  class="font-weight-normal"> {{ getEdad(patient.fechaNacimiento) }}</span>
                            </h5>
                            <h5>
                              Ocupación:
                              <span  class="font-weight-normal"> {{ patient.ocupacion }}</span>
                            </h5>

                            <h5>
                              Estado Civil:
                              <span> {{ patient.estadoCivil }}</span>
                            </h5>

                            <h5>
                              Aseguradora:
                              <span> {{ patient.aseguradora }}</span>
                            </h5>

                            <h5>
                              Vinculación:
                              <span> {{ patient.vinculacion }}</span>
                            </h5>

                            <h5>
                              Dirección:
                              <span> {{ patient.direccion }}</span>
                            </h5>

                            <h5>
                              Ciudad:
                              <span>{{ patient.ciudad }}</span>
                            </h5>

                            <h5>
                              Teléfono de contacto:
                              <span>{{ patient.telefono }}</span>
                            </h5>

                            <h5>
                              Correo electrónico:
                              <span>{{ patient.email}}</span>
                            </h5>

                          </div>
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <div class="col-md-6 m-2">
                                    <button type="submit" class="btn btn-primary" v-on:click="crearAtencion">Nueva Atención</button>
                                </div>
                                <div class="col-md-6 m-2">
                                    <button type="button" class="btn btn-danger" v-on:click="init">Cancelar</button>
                                  </div>
                                </div>
                            </div>
                                
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "MostrarPaciente",
  props: {},

  data: function() {
    return {
      
      paramsSearch: {
        tipoIdentificacion: "",
        numeroIdentificacion: "",
      },
      patient: {
        tipoIdentificacion: " ",
        numeroIdentificacion: " ",
        fechaNacimiento: " ",
        estadoCivil: " ",
        ocupacion: " ",
        nombreCompleto: "  ",
        aseguradora: " ",
        vinculacion: " ",
        direccion: " ",
        ciudad: " ",
        telefono: " ",
        email: " ",
        nombreAcompanante: " ",

        
      },
      
    };
  },
  
  created: function() {
  
    /*guarda la información que viene por la url, parámetro "patient" 
    y la convierte a json*/
    this.patient = JSON.parse(this.$route.params.patient);
  },
  methods: {
  getEdad (dateString) { /*Calcular edad con la fecha de nacimiento*/
  
      let hoy = new Date()
      let fechaNacimiento = new Date(dateString)
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
      let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
      ) {
        edad--
      }
      return edad
},
crearAtencion: function () {
      this.$router.push({
        name: "crearAtencion", 
        params: {patient:JSON.stringify(this.patient)}
      });
    },
  },
};

</script>

<style>
#MostrarPaciente {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#MostrarPaciente h4 {
  font-size: 25px;
  font-weight: bold;
}
#MostrarPaciente h5 {
  font-size: 24px;
  font-weight: bold;
}
#MostrarPaciente span {
  color:  #283747;
  
}
</style>
