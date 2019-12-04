<template>
  <div class=" ">
    
    <div  class="d-flex" id="wrapper">

      <!-- Sidebar -->
      <sidebar v-if="log == true"/>
      <!-- /#sidebar-wrapper -->
  
      <!-- Page Content -->
      <div id="page-content-wrapper">
  
        
        <div class="container-fluid">
          <encabezado :login="log" @log="ses($event)"></encabezado>
          
          <login v-if="log == false" @log="ses($event)"/>
          
          <inicio v-if="log == true"  @log="ses($event)"/>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
  
    </div>
    
  </div>
</template>
<script>
      
    </script>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { hostname } from '@/data/hostinger.js';
import Login from '@/components/Home/Login.vue'
import encabezado from '@/components/Tools/header.vue'
import inicio from '@/components/Home/inicio.vue'
import sidebar from '@/components/Tools/sidebar.vue'
// import projectPage from '@/components/projectPage.vue'

export default {
  components: {
    // HelloWorld,
    Login,
    encabezado,
    inicio,
    sidebar
    // projectPage
  },
  data(){
    return {
      hostName:hostname,
      datos:{},
      nav:0,
      log:false,
      cuenta:"",
      pass:""
    }
  },
  methods:{
    toogle(){
      $("#wrapper").toggleClass("toggled");
    },
    ses:function(event){
      this.datos=event
      this.nav=event.nav
      this.log=event.log
/*Funcion de Capturar, Almacenar datos y Limpiar campos*
/*Funcion Cargar y Mostrar datos*/
        /*Obtener datos almacenados*/
        /*Mostrar datos almacenados*/      


    }
  },
  created(){
    try {
        if (localStorage.getItem("cuenta")) {
             var nombre = localStorage.getItem("cuenta");
        var apellido = localStorage.getItem("passwort");
        this.log=true
        this.cuenta=nombre
        this.pass=apellido
        }else{
        this.log=false
        this.cuenta=""
        this.pass=""
        }
       
    } catch (error) {
        
    }
        
  },
  updated(){
    try {
        if (localStorage.getItem("cuenta")) {
             var nombre = localStorage.getItem("cuenta");
        var apellido = localStorage.getItem("passwort");
        this.log=true
        this.cuenta=nombre
        this.pass=apellido
        }else{
        this.log=false
        this.cuenta=""
        this.pass=""
        }
       
    } catch (error) {
        
    }
  }
}
</script>
