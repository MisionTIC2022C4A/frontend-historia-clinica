<template>
  <div id="IngresarPaciente">
    <div class="container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">
                        Ingresar paciente
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="card m-2">
                        <h5 class="card-header">
                            Datos personales
                        </h5>
                        <div class="card-body">
                            <form role="form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">
                                        ID
                                    </label>
                                    <input type="id" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Tipo de documento</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>TI</option>
                                        <option>CC</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">
                                        Fecha de nacimiento
                                    </label>
                                    <input type="date" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Estado civil</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Soltero</option>
                                        <option>Casado</option>
                                        <option>Divorciado</option>
                                        <option>Viudo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">
                                        Ocupación
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">
                                        Nombre completo
                                    </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Aseguradora</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Sura</option>
                                        <option>NuevaEPS</option>
                                        <option>Colsanitas</option>
                                        <option>Cafesalud</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                    <label class="form-check-label" for="exampleRadios1">
                                      Subsidiado
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                      Contributivo
                                    </label>
                                </div>
                            </form>
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

                                    <label for="exampleInputEmail1">
                                        Dirección
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="form-group">

                                    <label for="exampleInputPassword1">
                                        Ciudad
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="form-group">

                                    <label for="exampleInputPassword1">
                                        País
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card m-2">
                        <h5 class="card-header">
                            Datos de contacto
                        </h5>
                        <div class="card-body">
                            <form role="form">
                                <div class="form-group">

                                    <label for="exampleInputEmail1">
                                        Teléfono
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="form-group">

                                    <label for="exampleInputPassword1">
                                        Correo
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="form-group">

                                    <label for="exampleInputPassword1">
                                        Acompañante
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row m-2">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="submit" class="btn btn-primary">Enviar</button>
                            <button type="button" class="btn btn-danger">Cancelar</button>
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
  name: "IngresarPaciente",

  data: function () {
    return {
      username: "none",
      transacctionByIdUser: [],
    };
  },

  created: function () {
    this.username = this.$route.params.username;
  },

  apollo: {
    transacctionByIdUser: {
      query: gql`
        query ($transacctionByIdUserUserId: String!) {
          transacctionByIdUser(userId: $transacctionByIdUserUserId) {
            date
            id
            userIdDestiny
            userIdOrigin
            value
          }
        }
      `,
      variables() {
        return {
          transacctionByIdUserUserId: localStorage.getItem("user_id"),
        };
      },
    },
  },
};
</script>


<style>
#IngresarPaciente {
  width: 100%;
  height: 120%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#IngresarPaciente table {
  width: 50%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}

#IngresarPaciente table td,
#IngresarPaciente table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#IngresarPaciente table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#IngresarPaciente table tr:hover {
  background-color: #ddd;
}

#IngresarPaciente table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: crimson;
  color: white;
}
</style>