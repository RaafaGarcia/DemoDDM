<template>

    <div name="NAVBAR" >
        <div style="margin-top:70px">

        </div>
        <section>
            <mdb-navbar position="top" expand="large" dark color="black" scrolling>
                <div v-if="login == false" class="container">
                    
                    
                    <mdb-navbar-brand href="#/"><a  href="#/"><img src="../../assets/logo3.png" width="150" alt="Avatar" class="mb-1" style="border-radius:5px;"></a></mdb-navbar-brand>
                    <mdb-navbar-toggler>
                        <mdb-navbar-nav right>
                            
                            <mdb-nav-item href="#/about/1"  active >Manual</mdb-nav-item>
                            
                            

                        </mdb-navbar-nav>
                    </mdb-navbar-toggler>

                </div>
                <div v-if="login == true" class="container">
                    
                    <button v-if="login == true" class="btn btn btn-dark btn-sm" id="menu-toggle" @click="toogle()"><i class="fas fa-ellipsis-v"></i> </button>
                     <mdb-navbar-brand href="#/"><a  href="#/"><img src="../../assets/logo3.png" width="150" alt="Avatar"  style="border-radius:5px;"></a></mdb-navbar-brand>
                     
                    
                    <mdb-navbar-toggler>
                        <mdb-navbar-nav right>
                            <mdb-nav-item href="#/about/1" style="margin-top: 12px" class="mr-2" >Manual </mdb-nav-item>
                            <mdb-nav-item href="#/" style="margin-top: 12px" title="Inicio" ><mdb-icon icon="home" size="lg"/></mdb-nav-item>
                            <mdb-nav-item href="#/orden" style="margin-top: 12px"  title="Órdenes" ><mdb-icon icon="clipboard-list" size="lg"/></mdb-nav-item>
                            <mdb-nav-item href="#/cliente" style="margin-top: 12px"  title="Clientes" ><mdb-icon icon="users"  size="lg" /></mdb-nav-item>
                            <mdb-nav-item href="#/producto" style="margin-top: 12px"  title="Productos" ><mdb-icon icon="chair" size="lg"/></mdb-nav-item>
                            
                            <notifi />
                            
                            
                            
                            <div class=" dropdown pull-right ">
                       
                            <span href="">
                             <a class="nav-link dropdown-toggle btn btn-outline-white"  id="navbarDropdown" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{name}}
                            <i class="fas fa-user"></i>
                            </a>
                            <div class="dropdown-menu btn btn-dark" aria-labelledby="navbarDropdown" style="border-radius:5px">
                            <a class="dropdown-item btn btn-white btn-sm" href="#" style="border-radius:5px">
                                <i class="fas fa-user-cog" style="color:gray"></i>
                                <label class="h6" style="color:black"> User</label>
                                
                            </a>
                            
                            <a class="dropdown-item btn btn-white" style="color:black;border-radius:5px" v-on:click="dataComp.confirm=true" >
                                <i class="fas fa-sign-out-alt" style="color:gray"></i>
                                <label class="h6" style="color:black"> Exit</label>

                                </a>
                            </div>
                           
                            </span>
                    </div>

                        </mdb-navbar-nav>
                    </mdb-navbar-toggler>

                </div>
            </mdb-navbar>
        </section>
        <div v-if="dataComp.confirm" class="conten">	
                <div  class="mod p-4">	        <br>
                            <div class="header">	

                                <h2>¿Esta seguro de que desea cerrar la sesión actual?</h2>	
                            </div>	
                            <div class="contenido " style="left:50%">	

                                <button class="btn btn-outline-danger  btn-md mr-2 block" @click="dataComp.confirm=false;" >Cancelar</button>	
                                <button class="btn btn-outline-success btn-md"  @click="dataComp.confirm=false;Cerrar()" ><a href="#/">Aceptar</a></button>	
                            </div>	
                </div>	
                </div>

        <br>

        
    </div>
</template>
<script>
import { hostname } from '@/data/hostinger.js';
import {
  mdbNavbar,
  mdbBtn,
  mdbFormInline,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbContainer,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbNavbarBrand,
  mdbIcon,
  mdbRow
} from "mdbvue";

import notifi from '@/components/Tools/notifiaciones.vue'
export default {
    props:{
        login:Boolean
    },
    components:{
        notifi,
        mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbBtn,
    mdbFormInline,
    
  
    },
    data(){
        return {
            name:"",
            dataComp:{
                confirm:false,
                log:true,
                nav:0
            }
            
        }
    },
    methods:{
         toogle(){
      $("#wrapper").toggleClass("toggled");
    },
      Cerrar:function () {
            localStorage.id_usuario=0
            localStorage.log = false
            localStorage.cuenta = ""
            this.dataComp.log=false
            this.$emit("log",this.dataComp)
            location.reload();
            
      }
    },
    created(){
        this.name=localStorage.getItem("cuenta")
    },
    updated(){
         this.name=localStorage.getItem("cuenta")
    }
    
}
</script>
<style >
.mod{
 background: white;
 width: 60%;
 padding: 5px;
 border-radius: 10px;
 margin:  100px auto;
}
.conten{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 100;
}
</style>