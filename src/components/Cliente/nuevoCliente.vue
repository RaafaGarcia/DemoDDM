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
                            <li class="breadcrumb-item active" aria-current="page" >Nuevo </li>
                            
                        </ol>
                        </nav>
                        
                        <div style="background:black;border-radius:5px;" class="p-2">
                            
                            <div class="form-inline">

                                <div   class="form-group m-r-10 mr-3">
                                    <button class="btn btn-primary" @click="guardar()">
                                        <i class="fas fa-save"> </i>
                                        Guardar
                                    </button>
                                </div> 
                                
                                <div class="form-group m-r-10">
                                    <button class="btn btn-danger" @click="getModal(4,'Esta apunto de salir, se perderan los datos sin guardar','salir',0)">
                                        <i class="fas fa-times-circle"></i>
                                        Cancelar
                                    </button>
                                </div> 

                            </div>
                        </div>
                        <!-- End row -->
                        <br>
                        
                        <!-- Begin row -->
                        <div  class="p-2 mb-3" style="background:white;border-radius:5px;border: 1px solid black">
                            <div class="">
                                <label for="" class="h1">Nuevo Cliente</label>
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
import sidebar from '@/components/Tools/sidebar.vue'
import municipios from '@/recurses/municipios.js'
import encabezado from '@/components/Tools/header.vue'
import { setTimeout } from 'timers'
export default {
    props:{
        login:Boolean
    },
    components:{
    sidebar,
    modals,
    encabezado,
    mdbBadge
    },
    data(){
        return {
            target:"",
            accion:"",
            ask:"",
            res:false,
            modal:0,
            textModal:"",
            estados:municipios.getEst(),
            muni:{},
            //PAGINACION
            typeSearch:"Folio",
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
                    ID_CLIENTE:"",
                    NOMBRE:"",
                    CONTACTO: "",
                    TELEFONO:"",
                    TELEFONO2:"",
                    CALLE: "",
                    CP:0,
                    NUM_EXT: 0,
                    NUM_INT: 0,
                    COLONIA:"",
                    ESTADO:"",
                    MUNICIPIO:"",
                    RFC:"",
                    EMAIL:"",
                    SITIO:"0",
                    OBSERVACIONES:""
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
        nuevo(){
           let $el =this

           let idNew = 0

            axios.get("http://mueblesdimmsa.com/ddm/clientes.php?accion=top")

            .then(function(response){

                idNew=parseInt(response.data.data[0].ID_CLIENTE)+1
                $el.table= false
                $el.form=true

                $el.formStorage= {
                    ID_CLIENTE:idNew,
                    NOMBRE:"",
                    CONTACTO: "",
                    TELEFONO:"",
                    TELEFONO2:"",
                    CALLE: "",
                    CP:0,
                    NUM_EXT: 0,
                    NUM_INT: 0,
                    COLONIA:"",
                    ESTADO:"",
                    MUNICIPIO:"",
                    RFC:"",
                    EMAIL:"",
                    SITIO:"",
                    OBSERVACIONES:""
                }

            })

            .catch(response => {

                $el.getModal(3,"Error al obtener el id del cliente")

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
                        
                        
                            formdata.append("id_cliente",local.ID_CLIENTE);
                        
                        
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

                            axios.post("http://mueblesdimmsa.com/ddm/clientes.php?accion=insertar",formdata)
                            
                            .then(function(response){

                                if (response.data.error == true){

                                   $el.getModal(3,response.data.mensaje)
                                }else{

                                    $el.getModal(2,"Cliente guardado con éxito") 
                                    setTimeout(function(){$el.$router.push({name: "getCliente"}) }, 2000);


                                }
                            
                            })
                            
                        
                     
                    
                    
    
                } else  {
                     this.getModal(3,"Favor de ingresar los campos requeridos")
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
            this.nuevo()
       
    } catch (error) {
        
    }
    }
   
    
}
</script>
<style >

</style>
 
