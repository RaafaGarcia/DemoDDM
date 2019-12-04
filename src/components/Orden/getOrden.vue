<template>
    <div name="pedidos"  >
        
        <!-- <mdb-btn rounded color="default" @click.native="success=true">launch success modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn> -->
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
                            <li class="breadcrumb-item active" aria-current="page" >Orden </li>
                        </ol>
                        </nav>
                       
                        <div style="background:black;border-radius:5px;position:sticky" >
                            <div class="row p-2" >
                                <div class= "col-md-12">
                                    <div class="panel">
                                        <div class="form-inline">
                                            <div v-if="table == true" class="form-group  ">
                                                
                                                <label for="" class="mr-2 " style="color:white">Buscar {{typeSearch}}: </label> 
                                                <form class="form-inline active-cyan-6 ">

                                                    <div v-if="typeSearch == 'Folio' || typeSearch == 'Status' || typeSearch == 'Responsable' || typeSearch == 'Prioridad'" >
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="text"  
                                                        v-bind:class="'form-control  mr-2 '" aria-label="Search"
                                                        >
                                                    </div>
                                                    <div v-if="typeSearch == 'Cliente'">
                                                        <select  v-bind:class="'form-control  mr-2 browser-default custom-select'" aria-label="Search" id="" placeholder="cliente" v-model="folio" >
                                                            <option :value="''">Seleccionar cliente</option>
                                                        <option v-for="client in clients " :key="client.ID_CLIENTE " :value="client.ID_CLIENTE">{{client.ID_CLIENTE}} - {{client.NOMBRE}}</option>  
                                                    </select>
                                                    </div>
                                                    <div v-if="typeSearch == 'Fecha'">
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="date"  
                                                        v-bind:class="'form-control  mr-2 '" aria-label="Search"
                                                        >
                                                    </div>
                                                    
                                                        <i  class="fas fa-search mr-3" aria-hidden="true" style="color:gray"></i>
                                                    
                                                </form>
                                                
                                            </div>
                                             
                                            <div v-if="table == true" class="form-group right  pull-right" style="text-align:right">
                                                <a href="#/orden/nueva" >
                                                
                                                    <button  class="btn btn-primary btn-sm" >
                                                        <mdb-icon icon="plus" /> 
                                                        Nueva Orden
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
                                 <label for="" class="h1">Órdenes de Producción</label>
                                
                                <div class= "col mt-2 table-responsive" >
                                    
                                    <table id="dtBasicExample" class="table table-striped table-bordered" >
                                        <thead class="thead-dark">
                                            <tr >
                                                <th class="text-nowrap" @click="typeSearch='Folio',folio=''">Folio</th>
                                                <th class="text-nowrap" @click="typeSearch='Status',folio=''">Status</th>
                                                <th class="text-nowrap" @click="typeSearch='Cliente',folio=''">Cliente</th>
                                                <th class="text-nowrap" @click="typeSearch='Responsable',folio=''">Responsable</th>
                                                <th class="text-nowrap" @click="typeSearch='Fecha',folio=''">Fecha:alta</th>
                                                <th class="text-nowrap" @click="typeSearch='Prioridad',folio=''">Prioridad</th>
                                                <th class="text-nowrap text-center">
                                                       Acciones 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                             <tr  v-for="(pedido) in displayedPosts" v-bind:key="pedido.id" :style="getColor(pedido.STATUS)">
                                                <td>{{ pedido.ID_ORDEN }}</td>
                                                 <td >
                                                     
                                                     <mdb-icon v-if="pedido.STATUS == 'Completa'" icon="check" />
                                                     <mdb-icon v-if="pedido.STATUS == 'Nueva'" icon="plus" />
                                                     <mdb-icon v-if="pedido.STATUS == 'Cancelada'" icon="times" />
                                                     <mdb-icon v-if="pedido.STATUS == 'Pendiente'" icon="exclamation" />
                                                     
                                                     {{ pedido.STATUS }}</td>
                                                <td>
                                                    <select  class="browser-default custom-select " id="" placeholder="cliente" v-model="pedido.ID_CLIENTE" disabled>
                                                        <option v-for="client in clients " :key="client.ID_CLIENTE " :value="client.ID_CLIENTE">{{client.ID_CLIENTE}} - {{client.NOMBRE}}</option>  
                                                    </select>
                                                </td>
                                                <td>{{ pedido.RESPONSABLE }}</td>
                                                <td>{{ pedido.FECHA_ALTA }}</td>
                                                <td > <button class="btn btn-sm" disabled :style="pedido.PRIORIDAD == 'Regular' ? 'background:#EFC45B':pedido.PRIORIDAD == 'Alta'?  'background:#F37B5D': ''">{{ pedido.PRIORIDAD }}</button></td>
                                                <td class="text-center">
                                                    <router-link :to="{name:'editarOrden',params:{id:pedido.ID_ORDEN}}"><button  class="btn btn-sm btn-icon btn-circle btn-info mr-2" title="Ver" style="border-radius:5px" ><mdb-icon icon="eye" size="lg" /></button></router-link>
                                                    <button  class="btn btn-sm btn-icon  btn-danger" title="Eliminar" @click="getModal(4,'Esta apunto de borrar una orden','deleteOrden',pedido.ID_ORDEN)"  style="border-radius:5px"><mdb-icon icon="trash" size="lg" /></button>
                                                </td>
                                                
                                            </tr> 
                                        </tbody> 
                                    </table>
                                    
                                    <div v-if="displayedPosts[0]==null" style="text-align:center">
                                        <label for="" class="h2">No se encontraron ordenes de producción</label>
                                    </div>
                                    <hr>
                                    <mdb-pagination>
                                        <mdb-page-nav prev v-if="page != 1" @click.native="page--" >previus</mdb-page-nav>
                                        <mdb-page-item :active="page==pageNumber"  v-for="pageNumber in pages.slice(page-1, page+5)" @click.native="page = pageNumber" :key="pageNumber.id"> {{pageNumber}}</mdb-page-item>
                                        <mdb-page-nav next @click.native="page++" v-if="page < pages.length">next</mdb-page-nav>
                                    </mdb-pagination>
                                    
                                    <!-- <nav  aria-label="Page navigation example">
                                        <ul class="pagination ">
                                            <li class="page-item">
                                                <button type="button" class=" btn btn-orange page-link" v-if="page != 1" @click="page--"> Previous </button>
                                            </li>
                                            <li class="page-item  ">
                                                <button :key="pageNumber.id" type="button" class="btn btn-orange btn-sm page-link " v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
                                            </li>
                                            <li class="page-item">
                                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-orange btn-sm page-link"> Next </button>
                                            </li>
                                        </ul>
                                    </nav>	  -->
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
import sidebar from '@/components/Tools/sidebar.vue'
import modals from '@/components/Tools/modals.vue'
import encabezado from '@/components/Tools/header.vue'
import { setTimeout } from 'timers'
import { get } from 'http';
export default {
    props:{
        login:Boolean
    },
    components:{
    modals,
    sidebar,
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
    encabezado,
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
            typeSearch:"Folio",
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
            formStorage:
                {   
                    folio:"",
                    compraCliente:"",
                    responsable: "",
                    cliente: "  ",
                    fAlta: null,
                    fEntrega: null,
                    prioridad:"",
                    observaciones:"",
                    status:"0",
                    
                }
            ,
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
            if (action=="deleteOrden") {
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
        getColor(status){
            if (status=="Completa") {
                return "background-color:rgba(103, 167, 82, 0.50)"
            }
            if (status=="Nueva") {
                return "background-color:rgba(82, 143, 167, 0.50)"
            }
            if (status=="Pendiente") {
                return "background-color:rgba(198, 143, 61, 0.50)"
            }
            if (status=="Cancelada") {
                return "background-color:rgba(191, 63, 65, 0.50)"
            }
            
        },
        getOrden(){
            let $el=this
            axios.get("http://"+$el.hostName+"/ddm/ordenes.php")
        	.then(function(response){
            
            if (response.data.error == true){

             $el.getModal(3,response.data.mensaje)

            }else{

              $el.getPedidos=response.data.data
              
              $el.getPosts();
                $el.pedidos=$el.getPedidos

               $el.posts = $el.pedidos
            }
          })
          .catch(response => {

               $el.getModal(3,"Error al obtener las órdenes")

		    })
        },
        getclients(){
            let $el=this
            axios.get("http://"+$el.hostName+"/ddm/clientes.php")
        	.then(function(response){
            
            if (response.data.error == true){
              $el.getModal(3,response.data.mensaje)
            }else{
              $el.clients=response.data.data
              
            }
           
          })
          .catch(response => {
           
               $el.getModal(3,"Error al obtener los clientes")
            
            
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
            axios.post("http://"+$el.hostName+"/ddm/ordenes.php?accion=eliminar",formdata)
            .then(function(response){
                    $el.getModal(1,"Orden eliminada con éxito")
                    setTimeout(function(){location.reload(); }, 2000);
                    
            }).catch(response => {
                console.log(response)
                    $el.getModal(3,"No se ha podido eliminar la orden")
            })
  
        },
        
        
        sleep: function(milisegundos){
          
            var comienzo = new Date().getTime();
            while (true) {
                if ((new Date().getTime() - comienzo) > milisegundos)
                break;
            }
        },
           
    },
    computed: {
        
		displayedPosts () {
			return this.paginate(this.pedidos);
        },
         filteredList() {
            if (this.typeSearch == "Folio" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.ID_ORDEN.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Cliente" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.ID_CLIENTE.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Fecha" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.FECHA_ALTA.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Status" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.STATUS.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Responsable" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.RESPONSABLE.toLowerCase().includes(this.folio.toLowerCase())
                }) 
            }else if (this.typeSearch == "Prioridad" ) {
                this.pedidos = this.getPedidos.filter(post => {
                    return post.PRIORIDAD.toLowerCase().includes(this.folio.toLowerCase())
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
        this.getclients()
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
            this.getModal(3,"Usuario no valido")
            this.$router.push("/")
        }
    }
   
    
}
</script>
<style >
.jump{
     background: url(https://ninetechs.000webhostapp.com/img/fondo2.jpg);
    background-size: 200px;
    
}
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: black;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
</style>
 
