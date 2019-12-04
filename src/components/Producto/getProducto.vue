<template>
    <div name="pedidos"  >
        <modals
            :type="modal"
            :text="textModal"
            :question="ask"
            :item="target"
            v-on:type="modal=0"

            v-on:result="actions($event.res,$event.id)"
             />
        <div  class="d-flex " id="wrapper">

            <!-- Sidebar -->
            <sidebar v-if="log == true"/>
            <!-- /#sidebar-wrapper -->
        
            <!-- Page Content -->
            <div id="page-content-wrapper">
          
  
                <div class="container-fluid">
                    <encabezado :login="true"/>
                    
                    <!-- contener -->
                    
                    <div class="container">
                        {{filteredList }}
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page" ><a href="#/">Inicio</a></li>
                            <li class="breadcrumb-item active" aria-current="page" >Producto </li>
                        </ol>
                        </nav>
                        <div style="background:black;border-radius:5px;">
                            <div class="row p-2" >
                                <div class= "col-md-12">
                                    <div class="panel">
                                        <div class="form-inline">
                                            <div v-if="table == true" class="form-group  ">
                                                
                                                <label for="" class="mr-2 " style="color:white">Buscar {{typeSearch}}: </label> 
                                               <form class="form-inline active-cyan-6 ">
                                                    <div v-if="typeSearch == 'ID' || typeSearch == 'Modelo' || typeSearch == 'Familia' || typeSearch == 'Responsable' "  >
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="text"  
                                                        v-bind:class="'form-control mr-2'"
                                                        >
                                                    </div>
                                                     <div v-if="typeSearch == 'Fecha_Alta' "  >
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="date"  
                                                        v-bind:class="'form-control mr-2'"
                                                        >
                                                    </div>
                                                
                                                    <i  class="fas fa-search mr-3" aria-hidden="true" style="color:gray"></i>
                                                </form>
                                                
                                            </div>
                                             
                                            <div v-if="table == true" class="form-group   m-r-12 pull-right" style="text-align:right">
                                                <a href="#/Producto/nuevo" >
                                                
                                                    <button  class="btn btn-primary" >
                                                        <i class="fas fa-plus"></i>
                                                        Nuevo Producto
                                                        </button>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->
                        <br>
                         
                        <!-- Begin row -->
                        <div  class="p-2 mb-3" style="background:white;border-radius:5px;border: 1px solid black">
                            <div class="">
                                <label for="" class="h1">Catálago de Productos</label>
                                <div class= "col mt-2 table-responsive" >
                                    
                                    <table id="dtBasicExample" class="table table-striped table-bordered" >
                                        <thead class="thead-dark">
                                            <tr >
                                                <th class="text-nowrap" @click="typeSearch='ID',folio=''">ID</th>
                                                <th class="text-nowrap" @click="typeSearch='Modelo',folio=''">Modelo</th>
                                                <th class="text-nowrap" @click="typeSearch='Familia',folio=''">Familia</th>
                                                <th class="text-nowrap" @click="typeSearch='Fecha_Alta',folio=''">fecha: Alta</th>
                                                <th class="text-nowrap" @click="typeSearch='Responsable',folio=''">Responsable</th>
                                                <th class="text-nowrap text-center">
                                                       Acciones 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                             <tr  v-for="(pedido) in displayedPosts" v-bind:key="pedido.id" style="background-color:whitesmoke">
                                                <td>{{ pedido.ID_PRODUCTO== null? '':pedido.ID_PRODUCTO }}</td>
                                                <td>{{ pedido.MODELO }}</td>
                                                <td>{{ pedido.FAMILIA == null || pedido.FAMILIA == "" ? 'vacio':pedido.FAMILIA }}</td>
                                                <td>{{ pedido.FECHA_ALTA == null || pedido.FECHA_ALTA == "" ? 'vacio':pedido.FECHA_ALTA }}</td>
                                                <td>{{ pedido.RESPONSABLE == null || pedido.RESPONSABLE == "" ? 'vacio':pedido.RESPONSABLE }}</td>
                                                <td class="text-center">
                                                    <router-link :to="{name:'editarProducto',params:{id:pedido.ID_PRODUCTO}}"><button  class="btn btn-sm btn-icon  btn-info mr-1" title="Ver" style="border-radius:5px" ><i class="fa fa-eye" style="color:white"></i></button></router-link>
                                                    <!-- <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-warning" title="Deshabilitar" ><i class="fa fa-toggle-off"></i></a>
                                                    <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-primary" title="Habilitar" ><i class="fa fa-toggle-off"></i></a> -->
                                                    <button  class="btn btn-sm btn-icon  btn-danger" title="Eliminar" @click="getModal(4,'Esta apunto de borrar un producto','deleteProducto',pedido.ID_PRODUCTO)"  style="border-radius:5px"><i class="fa fa-trash-alt " style="color:white"></i></button>
                                                </td>
                                                
                                            </tr> 
                                        </tbody> 
                                    </table>
                                    
                                    <div v-if="displayedPosts[0]==null" style="text-align:center">
                                        <label for="" class="h2">No se encontraron productos en el catalago </label>
                                    </div>
                                    
                                    <hr>
                                     <mdb-pagination>
                                        <mdb-page-nav prev v-if="page != 1" @click.native="page--" >previus</mdb-page-nav>
                                        <mdb-page-item :active="page==pageNumber"  v-for="pageNumber in pages.slice(page-1, page+5)" @click.native="page = pageNumber" :key="pageNumber.id"> {{pageNumber}}</mdb-page-item>
                                        <mdb-page-nav next @click.native="page++" v-if="page < pages.length">next</mdb-page-nav>
                                    </mdb-pagination>
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
import { hostname } from '@/data/hostinger.js';
import { mdbPagination,mdbPageNav,mdbPageItem,mdbInput,mdbFormInline,mdbContainer, mdbRow, mdbIcon, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbBadge, mdbCol } from 'mdbvue';
import modals from '@/components/Tools/modals.vue'
import sidebar from '@/components/Tools/sidebar.vue'
import encabezado from '@/components/Tools/header.vue'
import { setTimeout } from 'timers'
export default {
    props:{
        login:Boolean
    },
    components:{
    sidebar,
    encabezado,
    modals,
    mdbIcon,
     mdbContainer,
    mdbRow,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    mdbBadge,
    mdbCol,
    mdbInput,
    mdbFormInline,
     mdbPagination,
    mdbPageNav,
    mdbPageItem,
    },
    data(){
        return {
            hostName:hostname,
            target:"",
            accion:"",
            ask:"",
            res:false,
            modal:0,
            textModal:"",
            //PAGINACION
            typeSearch:"ID",
            posts : [''],
			page: 1,
			perPage: 10,
            pages: [],
            
            //DATA
            clients:[],
            newClient:false,
            editIndex:0,
            edit:false,
            form:false,
            table:true,
            folio:"",
            cuenta:"",
            pass:"",
            nombre:"",
            correo:"",
            permisos:"",
            saldoForm:0,
            
            pedidos:[],
            getPedidos:[
            ],
            log:true,
            dataComp:{
                log:true,
                nav:1,
                project:{},
            },
            spiner:false,
            confirm:false,
            
        }
    },
    methods:{
        actions(action,id){
            console.log(action,id)
            if (action=="deleteProducto") {
                this.deleteItem(id)
            }
            if (action=="cancel") {
                this.getModal(2,"Se ha cancelado la solicitud")
            }
        },
        getModal(type,text,ask,id){
            this.modal=type 
            this.textModal=text
            if (type==4) {
                
                this.ask=ask
                this.target=id
            }
        },
        getOrden(){
            let $el=this
            axios.get("http://"+$el.hostName+"/ddm/productos.php?accion=desc")
        	.then(function(response){
            
            if (response.data.error == true){
            $el.getModal(3,response.data.mensaje)
            }else{
                console.log(response)
              $el.getPedidos=response.data.data
              
              $el.getPosts();
                $el.pedidos=$el.getPedidos

               $el.posts = $el.pedidos
            }
           
          })
          .catch(response => {
           
               $el.getModal(3,"Error al obetener los productos")
            
            
		      })
        },
        
        getPosts () {	
            let data = [];
            this.posts = this.pedidos
            
		},
		setPages () {
			let numberOfPages = Math.ceil(this.pedidos.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		},
        deleteItem(id){
            
            let formdata=new FormData()
            formdata.append("id",id);
            let $el=this
            axios.post("http://"+$el.hostName+"/ddm/productos.php?accion=eliminar",formdata)
            .then(function(response){
                $el.getModal(1,"Producto eliminado con éxito")
                setTimeout(function(){location.reload(); }, 2000);
        
            }).catch(response => {
                $el.getModal(3,"No se ha podido eliminar el producto")
            })
        }
    },
    computed: {
        
		displayedPosts () {
			return this.paginate(this.pedidos);
        },
         filteredList() {
            if (this.typeSearch == "ID" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.ID_PRODUCTO.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Modelo" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.MODELO.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Familia" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.FAMILIA.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Fecha_Alta" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.FECHA_ALTA.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Responsable" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.RESPONSABLE.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }
              
        }
	},
	watch: {
		posts () {
			this.setPages();
		}
	},
    filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	},
    created(){
        
        this.getOrden();
       
        try {
            if (localStorage.getItem("log")== "false") {
                this.$router.push("/")
               
            }
            if (localStorage.getItem("cuenta")) {
                var nombre = localStorage.getItem("cuenta");
                var name = localStorage.getItem("name");   
                this.cuenta=nombre           
                this.nombre=name
   
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
<style >

</style>
 
