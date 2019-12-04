<template>
  <div class="bg-dark sideBr" id="sidebar-wrapper" >
    <br>
        <div class="sidebar-heading " style="text-align:center"> <img src="../../assets/logo3.png" width="150" alt="Avatar" class="mb-1" style="border-radius:5px;"></div>
        
        <section class="demo-section">
      <section style="color:white" >
        <mdb-treeview style="width: 98%;" header="Navegación"  animated >
          
          <a href="#/" style="color:whitesmoke"><mdb-treeview-item  icon="home" title="Home"/></a>

          <div style="border-bottom:1px solid white"></div>

          <mdb-treeview-item nested animated  icon="clipboard-list" size="lg" title="Órdenes">
            
            <a href="#/orden" style="color:whitesmoke"><mdb-treeview-item  icon="table" title="Lista" color="gray" /></a>
            <a href="#/orden/nueva" style="color:whitesmoke"><mdb-treeview-item  icon="plus" title="Nueva orden"/></a>
          </mdb-treeview-item>

          <mdb-treeview-item  nested animated icon="users" title="Clientes">

           <a href="#/cliente" style="color:whitesmoke"><mdb-treeview-item  icon="table" title="Lista" /></a>
            <a href="#/cliente/nuevo" style="color:whitesmoke"><mdb-treeview-item  icon="plus" title="Nuevo cliente"/></a>

          </mdb-treeview-item>

          <mdb-treeview-item nested animated  icon="chair" title="Productos">

            <a href="#/producto" style="color:whitesmoke"><mdb-treeview-item  icon="table" title="Lista" /></a>
            <a href="#/producto/nuevo" style="color:whitesmoke"><mdb-treeview-item  icon="plus" title="Nuevo Producto"/></a>

          </mdb-treeview-item>
           <div style="border-bottom:1px solid white"></div>
          <mdb-treeview-item disabled icon="bell" title="Notificaciones"/>
          <mdb-treeview-item  icon="user" title="Perfil"/>
          <mdb-treeview-item  icon="desktop" title="Soporte"/>
        </mdb-treeview>
      </section>
    </section>

    
      </div>
</template>

<script>
import { hostname } from '@/data/hostinger.js';
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbTreeview,
  mdbTreeviewItem
} from "mdbvue";
export default {
  components: {
   mdbContainer,
    mdbRow,
    mdbIcon,
    mdbTreeview,
    mdbTreeviewItem
  },
  data(){
    return {
     
    }
  },
  methods:{
    
  },
  created(){
   
        
  },
  updated(){
   
  }
}
</script>
<style >
.sideBr{
  background-image: url("../../assets/sidebar.jpg");
  background-size: auto;
  z-index: 100;
  position: fixed;
  color:whitesmoke;
  text-align:left;
  border-right:2px solid black;
  margin-top:70px
}
</style>