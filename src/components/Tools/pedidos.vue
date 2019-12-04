 <template>
    <div name="pedidos"  >
        <div  class="d-flex" id="wrapper">

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
                            <li class="breadcrumb-item active" aria-current="page" >Pedidos </li>
                        </ol>
                        </nav>
                        <div style="background:black;border-radius:5px;">
                            <div class="row p-2" >
                                <div class= "col-md-12">
                                    <div class="panel">
                                        <div class="form-inline">
                                            <div v-if="table == true" class="form-group  ">
                                                
                                                <label for="" class="mr-2 " style="color:white">Buscar {{typeSearch}}: </label> 
                                                <div :class="'input-group mr-4 '">
                                                    <div v-if="typeSearch == 'Folio'">
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="text"  
                                                        v-bind:class="'form-control'"
                                                        >
                                                    </div>
                                                    <div v-if="typeSearch == 'Cliente'">
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio"
                                                        type="text"  
                                                        v-bind:class="'form-control'"
                                                        >
                                                    </div>
                                                    <div v-if="typeSearch == 'Fecha'">
                                                        <input 
                                                         :placeholder="typeSearch" v-model="folio" 
                                                        type="date"  
                                                        v-bind:class="'form-control'"
                                                        >
                                                    </div>
                                                
                                                    <div class="input-group-append">
                                                        <span style="min-width:10px"  @dblclick="searchType()" class="btn btn-secondary ">
                                                            <i class="fa fa-search" ></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                             <div  v-if="form == true" class="form-group m-r-10 mr-3">
                                                 <button class="btn btn-primary" @click="guardar()">
                                                 <i class="fas fa-save"> </i>
                                                 Guardar
                                                 </button>
                                             </div> 
                                             <div  v-if="edit == true" class="form-group m-r-10 mr-3">
                                                 <button class="btn btn-primary" @click="patch()">
                                                 <i class="fas fa-edit"></i>
                                                 Editar
                                                 </button>
                                             </div> 
                                             <div  v-if="form == true || edit==true" class="form-group m-r-10">
                                                 <button class="btn btn-danger" @click="cancelar()">
                                                <i class="fas fa-times-circle"></i>
                                                 cancelar
                                                 </button>
                                             </div> 
                                            <div v-if="table == true" class="form-group   m-r-12 pull-right" style="text-align:right">
                                                <button  class="btn btn-primary" @click="nuevo()">Nuevo</button>
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
                                
                                <div class= "col mt-2 table-responsive" >
                                    
                                    <table v-show="table == true" id="dtBasicExample" class="table table-striped table-bordered" >
                                        <thead class="thead-dark">
                                            <tr >
                                                <th class="text-nowrap">Folio</th>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">Cliente</th>
                                                <th class="text-nowrap">Responsable</th>
                                                <th class="text-nowrap">Fecha:alta</th>
                                                <th class="text-nowrap">Prioridad</th>
                                                <th class="text-nowrap text-center">
                                                       Acciones 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                             <tr  v-for="(pedido,index) in displayedPosts" v-bind:key="pedido.id" style="background-color:whitesmoke">
                                                <td>{{ pedido.ID_ORDEN }}</td>
                                                 <td >
                                                     <i v-if="pedido.STATUS == 'Completo'" class="fas fa-check" style="color:green"></i>
                                                     <i v-if="pedido.STATUS == 'Nuevo'" class="fas fa-plus" style="color:blue"></i>
                                                     <i v-if="pedido.STATUS == 'Cancelado'" class="fas fa-times" style="color:red"></i>
                                                     <i v-if="pedido.STATUS == 'Pendiente'" class="fas fa-exclamation" style="color:orange"></i>
                                                     
                                                     {{ pedido.STATUS }}</td>
                                                <td>
                                                    <select  class="form-control " id="" placeholder="cliente" v-model="pedido.ID_CLIENTE" disabled>
                                                        <option v-for="client in clients " :key="client.ID_CLIENTE " :value="client.ID_CLIENTE">{{client.ID_CLIENTE}} - {{client.NOMBRE}}</option>  
                                                    </select>
                                                </td>
                                                <td>{{ pedido.RESPONSABLE }}</td>
                                                <td>{{ pedido.FECHA_ALTA }}</td>
                                                <td :style="pedido.PRIORIDAD == 'Regular' ? 'background:#EFC45B':pedido.PRIORIDAD == 'Alta'?  'background:#F37B5D': ''">{{ pedido.PRIORIDAD }}</td>
                                                <td class="text-center">
                                                    <a  class="btn btn-sm btn-icon btn-circle btn-info mr-1" title="Detalle" @click="editar(index)"  style="border-radius:15px" ><i class="fa fa-eye" style="color:white"></i></a>
                                                    <!-- <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-warning" title="Deshabilitar" ><i class="fa fa-toggle-off"></i></a>
                                                    <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-primary" title="Habilitar" ><i class="fa fa-toggle-off"></i></a> -->
                                                    <a  class="btn btn-sm btn-icon btn-circle btn-danger" title="Eliminar" @click="deleteItem(index)"  style="border-radius:15px"><i class="fa fa-trash-alt " style="color:white"></i></a>
                                                </td>
                                                
                                            </tr> 
                                        </tbody> 
                                    </table>
                                    
                                    <div v-if="displayedPosts[0]==null" style="text-align:center">
                                        <label for="" class="h2">No se encontraron ordenes de producción</label>
                                    </div>
                                    
                                    <nav v-show="table == true" aria-label="Page navigation example">
                                        <ul class="pagination ">
                                            <li class="page-item">
                                                <button type="button" class=" btn btn-dark page-link" v-if="page != 1" @click="page--"> Previous </button>
                                            </li>
                                            <li class="page-item  ">
                                                <button :key="pageNumber.id" type="button" class="btn btn-dark page-link " v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
                                            </li>
                                            <li class="page-item">
                                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-dark page-link"> Next </button>
                                            </li>
                                        </ul>
                                    </nav>	


                                    <form v-show="form == true || edit == true" class="p-2">

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Folio:</b></label>
                                                <div class="row">
                                                    <div class="col-md-2 mt-1 ml-1 ">
                                                        DOP/ 
                                                    </div>
                                                    <div class="col-md-9">
                                                        <input type="text" class="form-control mb-2" id="" placeholder="Orden de Producción" v-model="formStorage.folio" disabled>
                                                    </div>
                                                </div>
                                                  
                                            </div>
                                        
                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Orden de compra cliente:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="compra/cliente" v-model="formStorage.compraCliente" >
                                            
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Responsable:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Responsable" disabled v-model="formStorage.responsable">
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div v-if="newClient==false" class="form-group col-md-10" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Cliente:</b></label>
                                                <select  class="form-control " id="" placeholder="cliente" v-model="formStorage.cliente" >
                                                    <option value="null" disabled>Seleccionar un cliente o agregar uno nuevo</option> 
                                                        <option v-for="client in clients " :key="client.ID_CLIENTE " :value="client.ID_CLIENTE">{{client.ID_CLIENTE}} - {{client.NOMBRE}}</option>  
                                                    </select>
                                            </div>
                                            <div v-if="newClient==true" class="form-group col-md-10" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Cliente:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="cliente" v-model="formStorage.cliente">
                                                   
                                            </div>
                                            <div  class="form-group col-md-2" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Nuevo cliente:</b></label>
                                                <div class="mt-2">
                                                <input type="checkbox" style="width:100px" class=""  v-model="newClient">
                                                
                                                </div>
                                                
                                            </div>


                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Fecha de alta:</b></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Ingrese la fecha de creación" v-model="formStorage.fAlta" > 
                                            </div>
                                        
                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Fecha de entrega:</b></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Ingrese la fecha de entrega" v-model="formStorage.fEntrega"> 
                                            
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Prioridad:</b></label>
                                                <select type="text" class="form-control mb-2" id="" placeholder="prioridad" v-model="formStorage.prioridad" >
                                                    <option disabled value="null">Seleccione la prioridad del pedido</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Alta">Alta</option> 
                                                </select>
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-8" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Observaciones particulares:</b></label>
                                                <textarea cols="30" rows="1" class="form-control mb-2" style="min-height:40px" id="" placeholder="Observaciones del pedido" v-model="formStorage.observaciones" ></textarea>
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Estatus:</b></label>
                                                <select v-if="form==true" type="text" class="form-control mb-2" id="" placeholder="" v-model="formStorage.status" disabled >
                                                    <option disabled value="null">Seleccione el estatus del pedido</option>
                                                    <option value="Nuevo">Nuevo</option>
                                                    <option value="Cancelado">Cancelado</option>
                                                    <option value="Pendiente">Pendiente</option>
                                                    <option value="Completo">Completo</option> 
                                                </select>
                                                <select v-if="edit==true" type="text" class="form-control mb-2" id="" placeholder="" v-model="formStorage.status"  >
                                                    <option disabled value="null">Seleccione el estatus del pedido</option>
                                                    <option value="Nuevo" disabled>Nuevo</option>
                                                    <option value="Cancelado">Cancelado</option>
                                                    <option value="Pendiente">Pendiente</option> 
                                                    <option value="Completo">Completo</option>
                                                     
                                                </select>
                                            
                                            </div>
                                    
                                    
                                        </div>
                                         <div class="form-row">
                                             
                                            <div class="form-group col-md-12 ">
                                                <div> <label for="" class="h3">Detalle del pedido:</label></div>
                                                <div style="text-align:right">
                                                    <span class="btn btn-primary m-1" @click="addRow()"><i class="fas fa-plus"></i></span>
                                                </div>
                                                
                                                <div class="table-responsive">
                                                <table  class="table table-striped table-bordered" >
                                                    <thead class="thead-dark">
                                                        <tr >
                                                            <th class="text-nowrap" >Estatus</th>
                                                            <th class="text-nowrap">Cantidad</th>
                                                            <th class="text-nowrap">Unidad</th>
                                                            <th class="text-nowrap">Producto</th>
                                                            <th class="text-nowrap">Notas</th>
                                                            <th class="text-nowrap">Fecha:programada</th>
                                                            <th class="text-nowrap">Unidad Realizada</th>
                                                            <th class="text-nowrap">Fecha:embarcada</th>
                                                            <th class="text-nowrap">Saldo</th>
                                                            <th class="text-nowrap">Dias al embarque</th>
                                                            <th class="text-nowrap">Fecha:realizada</th>
                                                            <th class="text-nowrap">Tiempo de producción</th>
                                                            <th class="text-nowrap text-center">
                                                                Acciones 
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        <tr v-for="(store,indexStore) in formStorage.products" v-bind:key="store.id" style="background-color:whitesmoke">
                                                            <td >
                                                                <select v-if="form == true" style="width:120px"  class="form-control mb-2" id="" placeholder="" v-model="store.status" disabled >
                                                                    <option disabled value="null">estatus del producto</option>
                                                                    <option value="0">creado</option>
                                                                    <option value="1">cancelado</option>
                                                                    <option value="2">completo</option> 
                                                                </select>
                                                                 <select v-if="edit == true" style="width:120px"  class="form-control mb-2" id="" placeholder="" v-model="store.status"  >
                                                                    <option disabled value="null">estatus del producto</option>
                                                                    <option value="0">creado</option>
                                                                    <option value="1">cancelado</option>
                                                                    <option value="2">completo</option> 
                                                                </select>
                                                            </td>
                                                            <td><input type="number" class="form-control" v-model="store.cantidad"></td>
                                                            <td>
                                                                <select style="width:100px"  class="form-control mb-2" id="" placeholder="" v-model="store.unidad"  >
                                                                    <option disabled value="null">Unidades</option>
                                                                    <option value="0">Piezas</option>
                                                                    <option value="1">Juegos</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <select style="width:120px"  class="form-control mb-2" id="" placeholder="" v-model="store.producto"  >
                                                                    <option disabled value="null">Productos</option>
                                                                    <option value="0">producto1</option>
                                                                    <option value="1">producto2</option>
                                                                    <option value="2">producto3</option> 
                                                                </select>
                                                            </td>
                                                            
                                                            <td>
                                                                <textarea  style="width:150px;min-height:40px;" class="form-control"  id="" cols="15" rows="1" v-model="store.notas"></textarea>
                                                            </td>

                                                            <td>
                                                                
                                                                <input type="date" class="form-control" v-model="store.fProgramada" >
                                                            </td>
                                                            <td><input type="number" class="form-control" v-model="store.unidadrealizada"></td>
                                                            <td>
                                                                <input type="date" class="form-control" v-model="store.fEmbarcada" >
                                                            </td>
                                                            
                                                            <td><input style="width:120px" type="number" class="form-control" :value="saldo(indexStore)" disabled ></td>
                                                            
                                                            <td><input type="text" class="form-control" :value="dateComp('embarque',store.fProgramada,store.fEmbarcada,indexStore)" placeholder="embarque" disabled></td>
                                                            <td><input type="date" class="form-control" v-model="store.fRealizada" ></td>
                                                            <td><input type="text" class="form-control" :value="dateComp('tiempo',store.fProgramada,store.fRealizada,indexStore)" placeholder="produccion" disabled></td>
                                                            <td class="text-center">
                                                                
                                                                <!-- <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-warning" title="Deshabilitar" ><i class="fa fa-toggle-off"></i></a>
                                                                <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-primary" title="Habilitar" ><i class="fa fa-toggle-off"></i></a> -->
                                                                <a  class="btn btn-sm btn-icon btn-circle btn-danger" title="Eliminar" @click="deleterow(indexStore)"  style="border-radius:15px"><i class="fa fa-trash-alt" style="color:white" ></i></a>
                                                            </td>
                                                        </tr> 
                                                    </tbody> 
                                                </table>
                                                </div>
                                            </div>
                                         </div>
                                       
                                        <br>
                                    
                                    </form>
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
import sidebar from '@/components/Tools/sidebar.vue'
import encabezado from '@/components/Tools/header.vue'
import { setTimeout } from 'timers'
export default {
    props:{
        login:Boolean
    },
    components:{
    sidebar,
    encabezado
    },
    data(){
        return {
            hostName:hostname,
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
                    products:[
                        {
                            status:"0",
                            cantidad:0,
                            unidad: "0",
                            producto:"0",
                            numParte: null,
                            color:"",
                            notas:"",
                            fProgramada:null,
                            unidadrealizada:0,
                            fEmbarcada:null,
                            saldo:0,
                            antiguedad:0,
                            embarque:0,
                            fRealizada:null,
                            tiempoProduccion:0
                        }
                    ]
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
        getOrden(){
            let $el=this
            axios.get("http://localhost/ddm/ordenes.php")
        	.then(function(response){
            
            if (response.data.error == true){
              Swal.fire({
                  type: 'error',
                  title: 'Error...',
                  text: response.data.mensaje,
                  
                })
            }else{
              $el.getPedidos=response.data.data
              
              $el.getPosts();
                $el.pedidos=$el.getPedidos

               $el.posts = $el.pedidos
            }
           
          })
          .catch(response => {
           
               Swal.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'Lo sentimos algo salio mal!',
                  
                })
            
            
		      })
        },
        getclients(){
            let $el=this
            axios.get("http://localhost/ddm/clientes.php")
        	.then(function(response){
            
            if (response.data.error == true){
              Swal.fire({
                  type: 'error',
                  title: 'Error...',
                  text: response.data.mensaje,
                  
                })
            }else{
              $el.clients=response.data.data
              
            }
           
          })
          .catch(response => {
           
               Swal.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'Lo sentimos algo salio mal!',
                  
                })
            
            
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
        patch(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'ml-1 btn btn-success mr-2',
                cancelButton: 'ml-1 btn btn-danger mr-2'
            },
            buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
            title: 'Esta apunto de modificar el pedido!',
            text: "Se guardaran todos los datos que fueron modificados",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    try {
                    var local = this.formStorage
                    this.getPedidos[this.editIndex]= {
                            folio:local.folio,
                            compraCliente:local.compraCliente,
                            responsable:local.responsable,
                            cliente: local.cliente,
                            fAlta: local.fAlta,
                            fEntrega: local.fEntrega,
                            prioridad:local.prioridad,
                            observaciones:local.observaciones,
                            status:local.status,
                            products:local.products
                    }
                    this.form=false
                    this.edit=false
                    this.table=true

                        swalWithBootstrapButtons.fire(
                        'Guardado!',
                        'Su pedido ha sido guardado con exito.',
                        'success'
                        )
                    } catch (error) {
                        swalWithBootstrapButtons.fire(
                        'Oops',
                        'lo sentimos ha ocurrido un error',
                        'error'
                        )
                    }
                    
                    
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                'Accion Cancelada',
                'Su solicitud ha sido cancelada',
                'error'
                )
            }
            })
           
            
        },
        editar(index){
            
            this.editIndex = index
            this.table=false
            this.edit = true
            this.formStorage = this.getPedidos[index]

            
        },
        nuevo(){
           let $el =this
           let idNew = 0
            axios.get("http://localhost/ddm/ordenes.php?accion=top")
                .then(function(response){
                    console.log(response)
                    idNew=parseInt(response.data.data[0].ID_ORDEN)+1
                    console.log(idNew);

                    $el.table= false
                    $el.form=true

                    $el.formStorage= {
                        folio:idNew,
                        compraCliente:"COC - ",
                        responsable: $el.nombre,
                        cliente: null,
                        fAlta: $el.dateNow(),
                        fEntrega: "",
                        prioridad:"Regular",
                        observaciones:"",
                        status:"Nuevo",
                        products:[
                            {
                                status:"0",
                                cantidad:0,
                                unidad: "0",
                                producto:"0",
                                numParte: null,
                                notas:"Ninguna",
                                fProgramada:$el.dateNow(),
                                unidadrealizada:0,
                                fEmbarcada:null,
                                saldo:0,
                                antiguedad:0,
                                embarque:0,
                                fRealizada:null,
                                tiempoProduccion:0
                            }
                        ]
                    }

                })
                .catch(response => {

                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Lo sentimos algo salio mal!',
                        
                    }) 
                })
        },
        cancelar(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'ml-1 btn btn-success mr-2',
                cancelButton: 'ml-1 btn btn-danger mr-2'
            },
            buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
            title: 'Esta apunto de salir de esta pagina!',
            text: "Se perderan todos los cambios esta seguro?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    try {
                        this.edit=false,this.form=false,this.table=true
                        
                    } catch (error) {
                        swalWithBootstrapButtons.fire(
                        'Oops',
                        'lo sentimos ha ocurrido un error',
                        'error'
                        )
                    }
                    
                    
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                'Accion Cancelada',
                'Su solicitud ha sido cancelada',
                'error'
                )
            }
            })
        },
        guardar(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'ml-1 btn btn-success mr-2',
                cancelButton: 'ml-1 btn btn-danger mr-2'
            },
            buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
            title: 'Esta apunto de crear un nuevo pedido!',
            text: "Se guardaran todos los datos",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
            }).then((result) => {
                if (result.value && this.validarOrden()==false) {
                    
                        try {
                        var local = this.formStorage
                        
                        let $el = this
                        let formCliente=new FormData()
                        let formdata=new FormData()
                        
                        if (this.newClient == true) {
                            formCliente.append("nombre",local.cliente);
                            
                            axios.post("http://localhost/ddm/clientes.php?accion=ins",formCliente)
                            .then(function(response){
                                console.log(response)
                                formdata.append("id_cliente",response.data.new[0].ID_CLIENTE);

                                formdata.append("compra_cliente",local.compraCliente);
                                formdata.append("responsable",local.responsable);
                                formdata.append("fecha_alta",local.fAlta);
                                formdata.append("fecha_entrega",local.fEntrega);
                                formdata.append("prioridad",local.prioridad);
                                formdata.append("observaciones",local.observaciones);
                                formdata.append("status",local.status);

                                
                            
                                axios.post("http://localhost/ddm/ordenes.php?accion=insertar",formdata)
                                    .then(function(response){
                                    if (response.data.error == true){
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Error...',
                                            text: 'Error en los datos',
                                            
                                            })
                                    }else{

                             
                                

                                swalWithBootstrapButtons.fire(
                                'Guardado!',
                                'Su pedido ha sido guardado con exito.',
                                'success'
                                )   
                                location.reload();
                                }
                            
                                })
                            })
                            .catch(response => {
           
                                Swal.fire({
                                    type: 'error',
                                    title: 'Error',
                                    text: 'Lo sentimos algo salio mal!',
                                    
                                }) 
                            })
                            

                        }else{
                            formdata.append("id_cliente",local.cliente);
                        
                        
                            formdata.append("compra_cliente",local.compraCliente);
                            formdata.append("responsable",local.responsable);
                            formdata.append("fecha_alta",local.fAlta);
                            formdata.append("fecha_entrega",local.fEntrega);
                            formdata.append("prioridad",local.prioridad);
                            formdata.append("observaciones",local.observaciones);
                            formdata.append("status",local.status);

                            
                        
                            axios.post("http://localhost/ddm/ordenes.php?accion=insertar",formdata)
                                .then(function(response){
                                if (response.data.error == true){
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Error...',
                                        text: 'Error en los datos',
                                        
                                        })
                                }else{

                             
                                

                                swalWithBootstrapButtons.fire(
                                'Guardado!',
                                'Su pedido ha sido guardado con exito.',
                                'success'
                                )   
                                location.reload();
                                }
                            
                            })
                            
                        }
                    

                        
                        
                    } catch (error) {
                        swalWithBootstrapButtons.fire(
                        'Oops',
                        'lo sentimos ha ocurrido un error',
                        'error'
                        )
                    }
                    
                    
                    
                    
                } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                'Accion Cancelada',
                'Su solicitud ha sido cancelada',
                'error'
                )
            }
            })
            
        },
        validarOrden(){
            let error = false;

            if (this.formStorage.folio==null || this.formStorage.folio=="") {
                alert("Folio no puede estar vacio")
                error=true
            }
            if (this.formStorage.compraCliente==null || this.formStorage.compraCliente=="") {
               alert("Compra cliente no puede estar vacio")
                error=true
            }
            if (this.formStorage.responsable==null || this.formStorage.responsable=="") {
               alert("Responsable no puede estar vacio")
                error=true
            }
            if (this.formStorage.cliente==null || this.formStorage.cliente=="") {
               alert("Cliente no puede estar vacio")
                error=true
            }
            if (this.formStorage.fAlta==null || this.formStorage.fAlta=="") {
              alert("Fecha Alta no puede estar vacio")
                error=true
            }
            if (this.formStorage.fEntrega==null || this.formStorage.fEntrega=="") {
               alert("Fecha Entrega no puede estar vacio")
                error=true
            }
            if (this.formStorage.prioridad==null || this.formStorage.prioridad=="") {
               alert("Prioridad no puede estar vacio")
                error=true
            }
            if (this.formStorage.observaciones==null || this.formStorage.observaciones=="") {
               alert("Observaciones no puede estar vacio")
                error=true
            }

            if (this.formStorage.status==null || this.formStorage.status=="") {
                alert("Status no puede estar vacio")
                error=true
            }
            return error;
            
        },
        deleterow(index){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'ml-1 btn btn-success mr-2',
                cancelButton: 'ml-1 btn btn-danger mr-2'
            },
            buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
            title: 'Esta apunto de borrar este producto!',
            text: "Se perderan los datos de la fila seleccionada",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    try {
                        this.formStorage.products.splice(index,1)

                        
                    } catch (error) {
                        swalWithBootstrapButtons.fire(
                        'Oops',
                        'lo sentimos ha ocurrido un error',
                        'error'
                        )
                    }
                    
                    
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                
            }
            })
            
        },
        addRow(){
            this.formStorage.products.push({
                status:"0",
                cantidad:0,
                unidad: "0",
                producto:"0",
                numParte: null,
                color:"",
                notas:"",
                fProgramada:null,
                unidadrealizada:0,
                fEmbarcada:null,
                saldo:0,
                antiguedad:0,
                embarque:0,
                fRealizada:null,
                tiempoProduccion:0
            })
        },
        deleteItem(index){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'ml-1 btn btn-success mr-2',
                cancelButton: 'ml-1 btn btn-danger mr-2'
            },
            buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
            title: 'Esta apunto de borrar este pedido!',
            text: "Se perderan los datos de la fila seleccionada",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    try {
                        this.getPedidos.splice(index,1)
                        this.pedidos=this.getPedidos
                        swalWithBootstrapButtons.fire(
                            'Pedido eliminado',
                            'Su pedido ha sido eliminado con exito',
                            'success'
                        )
                        
                    } catch (error) {
                        swalWithBootstrapButtons.fire(
                        'Oops',
                        'lo sentimos ha ocurrido un error',
                        'error'
                        )
                    }
                    
                    
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                
            }
            })
            
        },
        search(tipo,value){
            if (value == "") {
                 this.pedidos=this.getPedidos
            }else{

                for (let index = 0; index < this.getPedidos.length; index++) {
                    if (tipo=="Folio" && this.getPedidos[index].ID_ORDEN == value ) {
                    
                        this.pedidos=[this.getPedidos[index]]
                       
                    }

                    if (tipo=="Cliente" && this.getPedidos[index].cliente == value ) {
                    
                        this.pedidos=[this.getPedidos[index]]
                       
                    }
                    console.log(tipo,value,this.getPedidos[index].fAlta,)
                    if (tipo=="Fecha" && this.getPedidos[index].fAlta == value ) {
                    
                        this.pedidos=[this.getPedidos[index]]
                        console.log("complete")
                       
                    }
                    
                    
                }
            }
        },
        searchType(){
            let el =this
            Swal.fire({
                showConfirmButton:true,
            title: 'Tipo de buscador',
            html:`
            Seleccione el tipo de buscador que desea <br> <br>
            <select id="myselect" class="form-control" v-model="typeSearch">
                <option value="null" readonly>Selecciona</option>
                <option value="Folio">Folio</option>
                <option value="Cliente">Cliente</option>
                <option value="Fecha">Fecha</option>
            </select>
            `,
            
        
            onBeforeOpen: () => {
            const content = Swal.getContent()
            const $ = content.querySelector.bind(content)
            
            const select = $('#myselect')
            select.addEventListener('change',
                function(){
                    var selectedOption = this.options[select.selectedIndex];
                    el.typeSearch = selectedOption.value
                    console.log(selectedOption.value + ': ' + selectedOption.text);
            });
         

            
            

            // function toggleButtons () {
            // folio.disabled = !Swal.isTimerRunning()
            // cliente.disabled = Swal.isTimerRunning()
            // }

            

            
            },  
        
        
            })
        },
        
        red:function(project,index){
            // alert("Hello! I am an alert box!!");
        this.$router.push(''+project.name+'/'+index)    
        },     
        sleep: function(milisegundos){
          
            var comienzo = new Date().getTime();
            while (true) {
                if ((new Date().getTime() - comienzo) > milisegundos)
                break;
            }
        },
        saldo(indexStore){
            
            var res=0
            console.log(indexStore)
                 res= this.formStorage.products[indexStore].cantidad - this.formStorage.products[indexStore].unidadrealizada

                this.formStorage.products[indexStore].saldo = res
                
            return res
        },
        dateNow(){
            
            var f = new Date();
            var date =f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate()
           
                
            return String(date)
           
        },
        dateComp(name,fecha1,fecha2,index){
            if (fecha1 == null) {
                return null;
            }
            if (fecha2 == null) {
                return null;
            }

            let hoy = new Date(fecha1)
            let mañana = new Date(fecha2)

            
            let diferencia = mañana.getDate() - hoy.getDate()
            if (name == "embarque") {
                this.formStorage.products[index].embarque = diferencia
            }else if(name == "tiempo"){
                this.formStorage.products[index].tiempoProduccion = diferencia
            }
            
            return diferencia
        }
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
            }
              
        }
	},
	watch: {
		posts () {
			this.setPages();
		}
	},
    updated(){
        
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
 
