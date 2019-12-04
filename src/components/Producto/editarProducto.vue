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
        <div  class="d-flex " id="wrapper" >

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
                            <li class="breadcrumb-item active" aria-current="page" ><a href="#/producto">Producto</a></li>
                            <li class="breadcrumb-item active" aria-current="page" > PDT- {{$route.params.id}}</li>
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
                                <label for="" class="h1">Producto PDT - {{$route.params.id}}</label>
                                <div class= "col mt-2 table-responsive" >
        
                                     <form class="p-2">

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>ID:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <div class="row">
                                                    <div class="col-md-2 mt-1 ml-1 ">
                                                        PDT/ 
                                                    </div>
                                                    <div class="col-md-9">
                                                        <input type="text" class="form-control mb-2" id="" placeholder="id_producto" v-model="formStorage.ID_PRODUCTO" disabled>
                                                    </div>
                                                </div>
                                                  
                                            </div>
                                        
                                            <div class="form-group col-md-6 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Modelo:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Modelo" v-model="formStorage.MODELO" >
                                            
                                            </div>
                                            <div class="form-group col-md-2 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>
                                                    Num de parte:</b></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Num Parte" v-model="formStorage.NUM_PARTE" >
                                            
                                            </div>

                                            
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Familia:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Familia del producto" v-model="formStorage.FAMILIA" > 
                                            </div>
                                        
                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b> Fecha: Alta:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Fecha de creacion" v-model="formStorage.FECHA_ALTA"> 
                                            
                                            </div>

                                            <div class="form-group col-md-3 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Fecha: Actualizada:</b></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Fecha de actualización" v-model="formStorage.FECHA_UPDATE"> 
                                            
                                            </div>
                                    
                                    
                                        </div>
                         

                                        <div class="form-row">
                                            <div class="form-group col-md-8" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Descripción:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <textarea cols="30" rows="2" class="form-control mb-2" style="min-height:40px" id="" placeholder="Descripción del producto" v-model="formStorage.DESCRIPCION" ></textarea>
                                            </div>
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Responsable:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Responsable" disabled v-model="formStorage.RESPONSABLE">
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
            axios.get("http://mueblesdimmsa.com/ddm/productos.php?id="+$el.id)

        	.then(function(response){
            
            if (response.data.error == true){

                $el.getModa(3,response.data.mensaje)
            }else{
              $el.getPedidos=response.data.data

                let producto = response.data.data[0]

                $el.formStorage= {
                    ID_PRODUCTO:producto.ID_PRODUCTO,
                    MODELO:producto.MODELO,
                    FAMILIA: producto.FAMILIA,
                    NUM_PARTE:producto.NUM_PARTE,
                    FECHA_ALTA:producto.FECHA_ALTA,
                    FECHA_UPDATE: producto.FECHA_UPDATE,
                    DESCRIPCION:producto.DESCRIPCION,
                    RESPONSABLE: producto.RESPONSABLE,
                    
                }
                
              
            }
           
          })
          .catch(response => {
           
                $el.getModa(3,"Error al obtener el producto")
            
            
		      })
        },
        
        cancelar(){
           
            this.$router.push({name: "getProducto"})
        
        },
        guardar(){
            
                if (this.validarOrden()==false) {
                    
                        
                        var local = this.formStorage
                        
                        let $el = this
                        
                        let formdata=new FormData()

                            formdata.append("id",$el.id);

                            formdata.append("modelo",local.MODELO);
                            
                            formdata.append("familia",local.FAMILIA);
                            
                            formdata.append("num_parte",local.NUM_PARTE);
                            
                            formdata.append("fecha_alta",local.FECHA_ALTA);
                            
                            formdata.append("fecha_update",local.FECHA_UPDATE);
                            
                            formdata.append("descripcion",local.DESCRIPCION);
                            
                            formdata.append("responsable",local.RESPONSABLE);
                            
                            formdata.append("unidades",null);
                            
                            formdata.append("especificaciones",null);
                            

                            
                        
                            axios.post("http://mueblesdimmsa.com/ddm/productos.php?accion=editar",formdata)
                                .then(function(response){
                                if (response.data.error == true){
                                    $el.getModa(3,response.data.mensaje)
                                }else{

                                 $el.getModal(1,"El producto se ha guardado correctamente")

                                setTimeout(function(){$el.$router.push({name: "getProducto"}) }, 2000);   
                            }

                        })
                        .catch(response => {
                            $el.getModal(3,"Error al editar el producto")

                        })
                }else{
                    $el.getModa(2,"Ingrese todos los campos requeridos")
                }
            
        },
        validarOrden(){
            let error = false;

            if (this.formStorage.ID_PRODUCTO==null || this.formStorage.ID_PRODUCTO=="") {
                alert("ID no puede estar vacio")
                error=true
            }
            if (this.formStorage.MODELO==null || this.formStorage.MODELO=="") {
               alert("Modelo no puede estar vacio")
                error=true
            }
            if (this.formStorage.FAMILIA==null || this.formStorage.FAMILIA=="") {
               alert("Familia no puede estar vacio")
                error=true
            }
            if (this.formStorage.FECHA_ALTA==null || this.formStorage.FECHA_ALTA=="") {
               alert("fecha: Alta  no puede estar vacio")
                error=true
            }
            
            if (this.formStorage.DESCRIPCION==null || this.formStorage.DESCRIPCION=="") {
               alert("Descripción no puede estar vacio")
                error=true
            } 
            if (this.formStorage.RESPONSABLE==null || this.formStorage.RESPONSABLE=="") {
               alert("Responsable no puede estar vacio")
                error=true
            }
            
            return error;
            
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
 
