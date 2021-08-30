<template>
  <div id="MostrarPaciente">
    <div class="container" style="margin-top:200px">
     
        <div class="row" >
            <div class="col-12">
               <div class="card" style="width: 18rem;">

</div>
                   <h1> Información del paciente </h1>
     <h4>
        {{patience.nombreCompleto}} 
      </h4>
      
      <h4>
        ID: <span> {{patience.numeroIdentificacion}} </span>
      </h4>
      <h4>
       Ocupación :
        <span> {{patience.ocupacion}}</span>
      </h4>
      <h4>
        Estado Civil:
        <span> {{patience.estadoCivil}}</span>
      </h4>

       <h4>
        Aseguradora:
        <span> {{patience.aseguradora}}</span>
      </h4>
      <h4>
        Vinculación:
        <span> {{patience.numeroIdentificacion}}</span>
      </h4>
       <h4>
        Dirección:
        <span> {{patience.direccion}}</span>
      </h4>
      <h4>
        Ciudad:
        <span>{{patience.ciudad}}</span>
      </h4>
      <h4>
        Teléfono de contacto:
        <span>{{patience.telefono}}</span>
      </h4>
  


            </div>
     
    </div>


  
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "BuscarPaciente",
  props:{
  },

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
    debugger
    /*guarda la información que viene por la url, parámetro "patient" 
    y la convierte a json*/
    this.patience= JSON.parse(this.$route.params.patient)
   
  },
  methods:{
   
  }

};
</script>


<style>
#BuscarPaciente {
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