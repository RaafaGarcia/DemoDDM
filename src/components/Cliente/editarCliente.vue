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
                      
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page" ><a href="#/">Inicio</a></li>
                            <li class="breadcrumb-item active" aria-current="page" ><a href="#/cliente">Cliente</a></li>
                            <li class="breadcrumb-item active" aria-current="page" > CLT- {{$route.params.id}}</li>
                        </ol>
                        </nav>
                        <div style="background:black;border-radius:5px;" class="p-2">
                            
                            <div class="form-inline">
                                          
                                             
                                <div  class="form-group m-r-10 mr-3">
                                    <button class="btn btn-primary" @click="guardar()">
                                    <i class="fas fa-edit"></i>
                                    Editar
                                    </button>
                                </div>

                                <div   class="form-group m-r-10">
                                    <button class="btn btn-danger" @click="getModal(4,'Esta apunto de salir, se perderan los datos sin guardar','salir',0)">
                                <i class="fas fa-arrow-left"></i>
                                    Regresar
                                    </button>
                                </div> 
                                            
                                            
                                        
                            </div>
                        </div>
                        <!-- End row -->
                        <br>
                        
                        <!-- Begin row -->
                        <div  class="p-2 mb-3" style="background:white;border-radius:5px;border: 1px solid black">
                            <div class="">
                                <label for="" class="h1">Cliente CLT - {{$route.params.id}}</label>
                                <div class= "col mt-2 table-responsive" >
                                    
                                    
                                    
                                   


                                     <form class="p-2">

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>ID:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <div class="row">
                                                    <div class="col-md-2 mt-1 ml-1 ">
                                                        CLT/ 
                                                    </div>
                                                    <div class="col-md-9">
                                                        <input type="text" class="form-control mb-2" id="" placeholder="id_cliente" v-model="formStorage.ID_CLIENTE" disabled>
                                                    </div>
                                                </div>
                                                  
                                            </div>
                                        
                                            <div class="form-group col-md-8 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Nombre:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Nombre" v-model="formStorage.NOMBRE" >
                                            
                                            </div>

                                            
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Contacto:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Contacto de cliente" v-model="formStorage.CONTACTO" > 
                                            </div>
                                        
                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Télefono 1:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="tel 1" v-model="formStorage.TELEFONO"> 
                                            
                                            </div>

                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Télefono 2:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="tel 2" v-model="formStorage.TELEFONO2"> 
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Calle:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="calle" v-model="formStorage.CALLE" > 
                                            </div>
                                        
                                            <div class="form-group col-md-2 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Núm Ext:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="número exterior" v-model="formStorage.NUM_EXT"> 
                                            
                                            </div>

                                            <div class="form-group col-md-2 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Núm Int:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="número interior" v-model="formStorage.NUM_INT"> 
                                            
                                            </div>

                                            <div class="form-group col-md-2 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>CP:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="codigo postal" v-model="formStorage.CP"> 
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Colonia:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="colonia" v-model="formStorage.COLONIA" > 
                                            </div>
                                        
                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Estado:</b></label>
                                                <select name="" id="" class="form-control" v-model="formStorage.ESTADO" @change="change(formStorage.ESTADO)">
                                                    <option value="">Seleccionar un estado</option>
                                                    <option v-for="estado in estados" :value="estado.name" :key="estado.id">{{estado.name}}</option>
                                                </select>
                                                 
                                            
                                            </div>

                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Municipio:</b></label>
                                                <select name="" id="" class="form-control" v-model="formStorage.MUNICIPIO">
                                                    <option value="">Seleccionar un Municipio</option>
                                                    <option v-for="mun in muni" :value="mun" :key="mun.id">{{mun}}</option>
                                                </select>
                                            
                                            </div>
                                    
                                    
                                        </div>


                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>RFC</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="RFC" v-model="formStorage.RFC" > 
                                            </div>
                                        
                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Email:</b></label>
                                                <input type="email" class="form-control mb-2" id="" placeholder="Email" v-model="formStorage.EMAIL"> 
                                            
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Sitio Web:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="sitio web" v-model="formStorage.SITIO"> 
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-12" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Observaciones:</b></label>
                                                <textarea cols="30" rows="2" class="form-control mb-2" style="min-height:40px" id="" placeholder="Observaciones del cliente" v-model="formStorage.OBSERVACIONES" ></textarea>
                                            </div>

                                    
                                    
                                        </div>
                                         <!-- <div class="form-row">
                                             
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
                                                                <select  style="width:120px"  class="form-control mb-2" id="" placeholder="" v-model="store.status" disabled >
                                                                    <option disabled value="null">estatus del producto</option>
                                                                    <option value="Creado">Creado</option>
                                                                    <option value="Cancelado">Cancelado</option>
                                                                    <option value="Completo">Completo</option> 
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
                                                                
                                                                 <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-warning" title="Deshabilitar" ><i class="fa fa-toggle-off"></i></a>
                                                                <a href="javascript:;" class="btn btn-sm btn-icon btn-circle btn-primary" title="Habilitar" ><i class="fa fa-toggle-off"></i></a>
                                                                <a  class="btn btn-sm btn-icon btn-circle btn-danger" title="Eliminar" @click="deleterow(indexStore)"  style="border-radius:15px"><i class="fa fa-trash-alt" style="color:white" ></i></a>
                                                            </td>
                                                        </tr> 
                                                    </tbody> 
                                                </table>
                                                </div>
                                            </div>
                                         </div> -->
                                       
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
import { mdbBadge } from 'mdbvue';
import modals from '@/components/Tools/modals.vue'
import municipios from '@/recurses/municipios.js'
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
    mdbBadge
    },
    data(){
        return {
             id:this.$route.params.id,
            target:"",
            accion:"",
            ask:"",
            res:false,
            modal:0,
            textModal:"",


            id:this.$route.params.id,
            estados:municipios.getEst(),
            muni:{},
            
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
            
            if (action=="deleteRow") {
                this.deleterow(id)
            }
            if (action=="salir") {
                this.cancelar()
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
        change(estado){
            this.muni = municipios.getMun(estado)
            
        },
        getOrden(){
            let $el=this
            axios.get("http://mueblesdimmsa.com/ddm/clientes.php?id="+$el.id)

        	.then(function(response){
            
            if (response.data.error == true){

              $el.getModal(3,response.data.mensaje)
            }else{
              $el.getPedidos=response.data.data

                let orden = response.data.data[0]

                $el.formStorage= {
                    ID_CLIENTE:orden.ID_CLIENTE,
                    NOMBRE:orden.NOMBRE,
                    CONTACTO: orden.CONTACTO,
                    TELEFONO:orden.TELEFONO,
                    TELEFONO2:orden.TELEFONO2,
                    CALLE:orden.CALLE,
                    CP:orden.CP,
                    NUM_EXT: orden.NUM_EXT,
                    NUM_INT: orden.NUM_INT,
                    COLONIA:orden.COLONIA,
                    ESTADO:orden.ESTADO,
                    MUNICIPIO:orden.MUNICIPIO,
                    RFC:orden.RFC,
                    EMAIL:orden.EMAIL,
                    SITIO:orden.SITIO,
                    OBSERVACIONES:orden.OBSERVACIONES,
                    
                }
                $el.change(orden.ESTADO,)
              
            }
           
          })
          .catch(response => {
           
               $el.getModal(3,"Error al obtener el cliente")
            
            
		      })
        },
       
        cancelar(){
            this.$router.push({name: "getCliente"})
        },
        guardar(){
            
            if (this.validarOrden()==false) {
                
                
                var local = this.formStorage
                
                let $el = this
                
                let formdata=new FormData()
                
                    formdata.append("id",$el.id);
                    formdata.append("nombre",local.NOMBRE);
                    formdata.append("contacto",local.CONTACTO);
                    formdata.append("telefono",local.TELEFONO);
                    formdata.append("telefono2",local.TELEFONO2);
                    formdata.append("calle",local.CALLE);
                    formdata.append("num_ext",local.NUM_EXT);
                    formdata.append("num_int",local.NUM_INT);
                    formdata.append("cp",local.CP);
                    formdata.append("colonia",local.COLONIA);
                    formdata.append("estado",local.ESTADO);
                    formdata.append("municipio",local.MUNICIPIO);
                    formdata.append("rfc",local.RFC);
                    formdata.append("email",local.EMAIL);
                    formdata.append("sitio",local.SITIO);
                    formdata.append("observaciones",local.OBSERVACIONES);

                            
                        
                    axios.post("http://mueblesdimmsa.com/ddm/clientes.php?accion=editar",formdata)
                        .then(function(response){
                        if (response.data.error == true){
                            $el.getModal(3,response.data.mensaje)
                        }else{

                            $el.getModal(1,"El cliente ha sido guardado con éxito")
                                setTimeout(function(){location.reload(); }, 2000);
                        }
                            
                         })
                         .catch(response => {
           
                            $el.getModal(3,"Error de solicitud ")
                            
                        })
                    
            }else{
                $el.getModal(3,"Por favor ingrese los datos requeridos")
            }

        },
        validarOrden(){
            let error = false;

            if (this.formStorage.ID_CLIENTE==null || this.formStorage.ID_CLIENTE=="") {
                alert("ID no puede estar vacio")
                error=true
            }
            if (this.formStorage.NOMBRE==null || this.formStorage.NOMBRE=="") {
               alert("NOMBRE no puede estar vacio")
                error=true
            }
            
            return error;
            
        },
        
    },
    
    created(){
        
        this.getOrden()
       
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
 
