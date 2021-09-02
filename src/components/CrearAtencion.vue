<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 mb-3">
        <h3 class="text-center">Nueva Atención</h3>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-4">
        <div class="card">
          <h5 class="card-header">Información del paciente</h5>
          <div class="card-body">
            <h5 class="card-title">
              <b>{{ patient.nombreCompleto }}</b>
            </h5>

            <div class="card-text">
              <p class="font-weight-normal">
                <b>ID:</b> {{ patient.tipoIdentificacion }}
                {{ patient.numeroIdentificacion }}
                <br />
                <b>Edad:</b> {{ getEdad(patient.fechaNacimiento) }}
                <br />
                <b>Fecha de nacimiento:</b> {{ patient.fechaNacimiento }}
                <br />
                <b>Oupación:</b> {{ patient.ocupacion }}
                <br />
                <b>Estado civil:</b> {{ patient.estadoCivil }}
                <br />
                <b>Aseguradora:</b> {{ patient.aseguradora }}
                <br />
                <b>Vinculación:</b> {{ patient.vinculacion }}
                <br />
                <b>Dirección:</b> {{ patient.direccion }}
                <br />
                <b>Ciudad:</b> {{ patient.ciudad }}
                <br />
                <b>Telefono:</b> {{ patient.telefono }}
                <br />
                <b>Email:</b> {{ patient.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 ml-3">
        <div class="card">
          <h5 class="card-header">Datos de la atención</h5>
          <div class="card-body">
            <form v-on:submit.prevent="cleanAtencion">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="fecha">Fecha de atención</label>
                  <input
                    type="date"
                    class="form-control"
                    id="fechaCreacion"
                    disabled
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="tipoAtencion">Tipo de Atención</label>
                  <select id="tipoAtencion" class="form-select">
                    <option value="1">Consulta Externa</option>
                    <option value="2">Procedimientos</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="servicio"> Especialidad </label>
                  <select
                    v-model="createAttentionAttention.servicio"
                    class="form-select"
                    aria-label="Default select example"
                    id="servicio"
                  >
                    <option value="890201">Medicina General</option>
                    <option value="890266">Medicina Interna</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="exampleInputEmail1"> Profesional </label>
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
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="motivo">Motiva de consulta</label>
                  <textarea
                    class="form-control"
                    id="motivo"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="form-row mt-2">
                <div class="form-group row">
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">
                      Guardar
                    </button>

                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      id="openmodal"
                      class="btn btn-primary"
                      hidden="true"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Launch demo modal
                    </button>

                    <pulse-loader
                      :loading="loading"
                      :color="color"
                      :size="size"
                      v-if="isWait"
                    ></pulse-loader>

                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <h5>
                              {{ textModal }}
                            </h5>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
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
  </div>
</template>

<script>
import gql from "graphql-tag";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "CrearAtencion",
  components: {
    PulseLoader: PulseLoader,
  },

  data: function () {
    return {
      isWait: false,
      dialog: false,
      textModal: "",

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
      this.isWait = true;
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
          this.isWait = false;
          (this.textModal = "Atención creada exitosamente"),
            document.getElementById("openmodal").click();

          console.log("Atención creada exitosamente", result);
        })
        .catch((error) => {
          this.isWait = false;
          this.textModal = "Ha ocurrido un error";
          document.getElementById("openmodal").click();

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
#CrearAtencion h2 {
  font-size: 30px;
  color: #283747;
}
#CrearAtencion span {
  color: crimson;
  font-weight: bold;
}
#datosPaciente h5 {
  color: #3e6c76;
}

#datosPaciente span {
  color: rgb(122, 121, 121);
}
#CrearAtencion button {
  height: 20px;
  width: 100px;
  margin: -20px -50px;
  position: relative;
  top: 50%;
  left: 50%;
}

#id {
  color: #3e6c76;
  font-weight: 500;
}
#nombre {
  color: #3e6c76;
  font-weight: 500;
}
</style>