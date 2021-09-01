<template>
  <div id="CrearAtencion mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center">Nueva atención</h2>
          <div class="card m-3">
            <div class="row">
              <div class="col-md-5">
                <h3 class="text-center mt-3">Información del paciente</h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card bg-default m-3">
                      <div class="card-header">
                        <h4 class="text-center">
                          {{ patient.nombreCompleto }}
                        </h4>

                        <h4 class="text-center">
                          ID:
                          <span>
                            {{ patient.tipoIdentificacion }}
                            {{ patient.numeroIdentificacion }}
                          </span>
                        </h4>
                      </div>
                      <div class="card-body">
                        <div class="card-text">
                          <h5>
                            Edad:
                            <span class="font-weight-normal">
                              {{ getEdad(patient.fechaNacimiento) }}</span
                            >
                          </h5>

                          <h5>
                            Fecha de Nacimiento:
                            <span class="font-weight-normal">
                              {{ patient.fechaNacimiento }}</span
                            >
                          </h5>

                          <h5>
                            Ocupación:
                            <span class="font-weight-normal">
                              {{ patient.ocupacion }}</span
                            >
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
                            <span>{{ patient.email }}</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <h3 class="text-center mt-3">
                  Registre los datos de la atención
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card bg-default m-3">
                        <div class="card-header">
                        <h4 class="text-center">
                          Datos de atención
                        </h4>
                        </div>
                      <form role="form m-5" v-on:submit.prevent="cleanAtencion">
                        <div class="row m-5">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="fechaCreacion">
                                Fecha de atención
                              </label>
                              <input
                                type="date"
                                class="form-control"
                                id="fechaCreacion"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row m-5">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Tipo de atención
                              </label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">Consulta Externa</option>
                                <option value="2">Procedimientos</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Especialidad
                              </label>
                              <select
                                v-model="createAttentionAttention.servicio"
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option value="890201">Medicina General</option>
                                <option value="890266">Medicina Interna</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row m-5">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Profesional
                              </label>
                              <select
                                v-model="createAttentionAttention.profesional"
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">Roberto Mendoza</option>
                                <option value="2">Raquel Medina</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row m-5">
                          <div class="col-md-12">
                            <div class="text-center">
                              <button type="submit" class="btn btn-primary">
                                Enviar
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
  name: "CrearAtencion",

  data: function () {
    return {
      createAttentionAttention: {
        pacTipoId: this.patient.tipoIdentificacion,
        pacNumId: this.patient.numeroIdentificacion,
        servicio: "",
        profesional: "",
      },
    };
  },

  beforeCreate: function () {
    /*guarda la información que viene por la url, parámetro "patient" 
    y la convierte a json*/

    this.patient = JSON.parse(this.$route.params.patient);
    //debugger;
  },
  mounted: function () {
    // debugger;
    document.getElementById("fechaCreacion").valueAsDate = new Date();
  },
  methods: {
    crearAtencion: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($createAttentionAttention: AttentionInput!) {
              createAttention(attention: $createAttentionAttention) {
                pacTipoId
                pacNumId
                pacNombre
              }
            }
          `,
          variables: {
            createAttentionAttention: this.createAttentionAttention,
          },
        })
        .then((result) => {
          alert("Atención creada exitosamente", result);
          console.log("Atención creada exitosamente", result);
        })
        .catch((error) => {
          alert("Error", error);
          console.log("Error", error);
        });
    },

    getEdad(dateString) {
      /*Calcular edad con la fecha de nacimiento*/

      let hoy = new Date();
      let fechaNacimiento = new Date(dateString);
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
      ) {
        edad--;
      }
      return edad;
    },
    cleanAtencion() {
      this.createAttentionAttention.profesional = parseInt(
        this.createAttentionAttention.profesional
      );
      this.crearAtencion();
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

#CrearAtencion h2 {
  font-size: 30px;
  color: #283747;
}
#CrearAtencion span {
  color: crimson;
  font-weight: bold;
}

#CrearAtencion button {
  height: 20px;
  width: 100px;
  margin: -20px -50px;
  position: relative;
  top: 50%;
  left: 50%;
}
</style>