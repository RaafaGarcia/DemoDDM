<template>
  <div class="fondo ">
     
     
     <router-view></router-view>
        
    <!-- <HelloWorld /> -->
    <!-- <label for="" style="color:white">{{log}}</label> -->
    <!-- <encabezado :login="log" v-on:log="ses($event)" />

    <Login v-if="nav== 0 && log == false" :login="log" v-on:log="ses($event)" />

    <inicio v-if="nav== 1 && log == true" :login="log" v-on:log="ses($event)" />

    <projectPage v-if="nav == 2 && log == true" :project="datos.project" v-on:log="ses($event)"/> -->
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    
    // HelloWorld,
    // Login,
    
    // inicio,
    // projectPage
  },
  data(){
    return {
      datos:{},
      nav:0,
      
    }
  },
  methods:{
    ses:function(event){
      this.datos=event
      this.nav=event.nav
      this.log=event.log
    }
  },
 
  created(){
   
            if (localStorage.getItem("log") && localStorage.getItem("log") == "true" ) {
                
               this.log = true
            }else{
                this.log=false
              
            }
  },
  updated(){
     if (localStorage.getItem("log") && localStorage.getItem("log") == "true" ) {
                
               this.log = true
            }else{
                this.log=false
              
            }
  }

}
</script>
