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
                            <li class="breadcrumb-item active" aria-current="page" ><a href="#/orden">Orden</a></li>
                            <li class="breadcrumb-item active" aria-current="page" > DOP- {{$route.params.id}}</li>
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
                                <label for="" class="h1">Orden DOP - {{$route.params.id}}</label>
                                <div class= "col mt-2 table-responsive" >
                                    
                                    
                                    
                                   


                                    <form class="p-2">

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Folio:</b><mdb-badge color="danger">*</mdb-badge></label>
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
                                                <label class="pt-2 mb-2" for=""><b>Orden de compra cliente:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="compra/cliente" v-model="formStorage.compraCliente" >
                                            
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Responsable:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id="" placeholder="Responsable" disabled v-model="formStorage.responsable">
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div v-if="newClient==false" class="form-group col-md-10" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Cliente:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <select  class="form-control " id="" placeholder="cliente" v-model="formStorage.cliente" >
                                                    <option value="null" disabled>Seleccionar un cliente o agregar uno nuevo</option> 
                                                        <option v-for="client in clients " :key="client.ID_CLIENTE " :value="client.ID_CLIENTE">{{client.ID_CLIENTE}} - {{client.NOMBRE}}</option>  
                                                    </select>
                                            </div>
                                            <div v-if="newClient==true" class="form-group col-md-10" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Cliente:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="text" class="form-control mb-2" id=""  placeholder="cliente" v-model="formStorage.cliente">
                                                   
                                            </div>
                                            <div  class="form-group col-md-2" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Nuevo cliente:</b></label>
                                                <div class="mt-2">
                                                <input type="checkbox" style="width:100px" class="" @click="formStorage.cliente=null"  v-model="newClient">
                                                
                                                </div>
                                                
                                            </div>


                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-4" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2 " for=""><b>Fecha de alta:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Ingrese la fecha de creación" v-model="formStorage.fAlta" > 
                                            </div>
                                        
                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Fecha de entrega:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <input type="date" class="form-control mb-2" id="" placeholder="Ingrese la fecha de entrega" v-model="formStorage.fEntrega"> 
                                            
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Prioridad:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <select type="text" class="form-control mb-2" id="" placeholder="prioridad" v-model="formStorage.prioridad" >
                                                    <option disabled value="null">Seleccione la prioridad del pedido</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Alta">Alta</option> 
                                                </select>
                                            
                                            </div>
                                    
                                    
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-8" style="text-align:left">
                                            
                                                <label class="pt-2 mb-2" for=""><b>Observaciones particulares:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                <textarea cols="30" rows="1" class="form-control mb-2" style="min-height:40px" id="" placeholder="Observaciones del pedido" v-model="formStorage.observaciones" ></textarea>
                                            </div>

                                            <div class="form-group col-md-4 " style="text-align:left">
                                                <label class="pt-2 mb-2" for=""><b>Estatus:</b><mdb-badge color="danger">*</mdb-badge></label>
                                                
                                                <select  type="text" class="form-control mb-2" id="" placeholder="" v-model="formStorage.status" :style="getColor(formStorage.status)"  >
                                                    <option disabled value="null" :style="getColor('White')">Seleccione el estatus del pedido</option>
                                                    <option value="Nueva" disabled :style="getColor('White')">Nueva</option>
                                                    <option value="Cancelada" :style="getColor('White')">Cancelada</option>
                                                    <option value="Pendiente" :style="getColor('White')">Pendiente</option> 
                                                    <option value="Completa" :style="getColor('White')">Completa</option>
                                                     
                                                </select>
                                            
                                            </div>
                                    
                                    
                                        </div>
                                         <div class="form-row">
                                             
                                            <div class="form-group col-md-12 ">
                                                <div> <label for="" class="h3">Detalle de la orden:</label></div>
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
                                                            <th class="text-nowrap">Producto 
                                                                <mdb-tooltip trigger="hover" :options="{placement: 'right'}">
                                                                    <span slot="tip" style="font-size: 18px;">click en el checkbox paca cambiar entre entrada manual o select</span>
                                                                    <mdb-icon slot="reference" far icon="question-circle" />
                                                                </mdb-tooltip> 
                                                            </th>
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
                                                        <tr v-for="(store,indexStore) in products" v-bind:key="store.id" :style="getColor(store.status)">
                                                            <td >
                                                               
                                                                 <select  style="width:120px"  class="form-control mb-2" id="" placeholder="" v-model="store.status"  >
                                                                    <option disabled value="null" :style="getColor('White')">estatus del producto</option>
                                                                    <option value="Creado" :style="getColor('White')">Creado</option>
                                                                    <option value="Pendiente" :style="getColor('White')">Pendiente</option>
                                                                    <option value="Cancelado" :style="getColor('White')">Cancelado</option>
                                                                    <option value="Completo" :style="getColor('White')">Completo</option>
                                                                     
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
                                                            <td > 
                                                                <div class="input-group" style="width:250px">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon">
                                                                    <mdb-icon v-if="store.SelectManual==false" far icon="check-square" size="lg" class="indigo-text" @click.native="store.SelectManual =!store.SelectManual" />
                                                                     <mdb-icon v-if="store.SelectManual==true" icon="check-square" size="lg" class="indigo-text" @click.native="store.SelectManual =!store.SelectManual" />
                                                                </span>
                                                                </div>
                                                                <input v-if="store.SelectManual==true" type="text" class="form-control" placeholder="producto manual"   v-model="store.producto" aria-label="Username" aria-describedby="basic-addon">
                                                                            <select v-if="store.SelectManual==false"   class="browser-default custom-select " id="" placeholder="" v-model="store.producto"  aria-label="Username" aria-describedby="basic-addon">
                                                                            <option  value="">producto select</option>
                                                                            <option v-for="product in muebles" :key="product.ID_PRODUCTO" :value="product.ID_PRODUCTO">{{product.ID_PRODUCTO}} - {{product.MODELO}} </option> 
                                                                            </select>
                                                               
                                                                </div>
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
                                                                <a  class="btn btn-sm btn-icon btn-circle btn-danger" title="Eliminar" @click="getModal(4,'Se eliminaran todos los datos de esta fila','deleteRow',indexStore)"  style="border-radius:15px"><i class="fa fa-trash-alt" style="color:white" ></i></a>
                                                            </td>
                                                        </tr> 
                                                       
                                                    </tbody> 
                                                </table>
                                                 <label v-if="products== null || products == [] || products == [{}] || products == undefined" for="" class="h1">No hay productos</label>
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
import { mdbBadge,mdbIcon,mdbInput,mdbTooltip } from 'mdbvue';
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
    mdbBadge,
    mdbIcon,
    mdbInput,
    mdbTooltip
    },
    data(){
        return {
            hostName:hostname,
            SelectManual:false,
            id:this.$route.params.id,
            target:"",
            accion:"",
            ask:"",
            res:false,
            modal:0,
            textModal:"",
            
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
            products:[
                {
                    
                    

                }
            ],
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
            muebles:[]
            
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
        getProducts(){
            
            let $el=this

            axios.get("http://"+$el.hostName+"/ddm/productos.php")

        	.then(function(response){
            
                if (response.data.error == true){

                    $el.getModal(3,response.data.mensaje)

                }else{

                    $el.muebles=response.data.data
              
                }
           
            })
            .catch(response => {
           
            $el.getModal(3,"Error al obtener los productos")
            
		    })
        },
        getColor(status){
            if (status=="Completa" || status=="Completo") {
                return "background-color:rgba(103, 167, 82, 0.50)"
            }
            if (status=="Nueva" || status=="Creado") {
                return "background-color:rgba(82, 143, 167, 0.50)"
            }
            if (status=="Pendiente") {
                return "background-color:rgba(198, 143, 61, 0.50)"
            }
            if (status=="Cancelada" || status=="Cancelado") {
                return "background-color:rgba(191, 63, 65, 0.50)"
            }
             if (status=="White") {
                return "background-color:white"
            }
            
        },
        getOrden(){
            let $el=this

            axios.get("http://"+$el.hostName+"/ddm/ordenes.php?id="+$el.id)

        	.then(function(response){
            
            if (response.data.error == true){

              $el.getModal(3,response.data.mensaje)

            }else{
              $el.getPedidos=response.data.data

                let orden = response.data.data[0]

                $el.formStorage= {
                    folio:orden.ID_ORDEN,
                    compraCliente:orden.COMPRA_CLIENTE,
                    responsable: orden.RESPONSABLE,
                    cliente: orden.ID_CLIENTE,
                    fAlta: orden.FECHA_ALTA,
                    fEntrega: orden.FECHA_ENTREGA,
                    prioridad:orden.PRIORIDAD,
                    observaciones:orden.OBSERVACIONES,
                    status:orden.STATUS,
                    
                    
                }
                $el.products = JSON.parse(orden.detalle)
            }
           
          })
          .catch(response => {
           
               $el.getModal(3,"Ocurrio un error al solicitar la orden")

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
           
               $el.getModal(3,"Ocurrio un error al solicitar la tabla clientes")
            
            
		      })
        },
        cancelar(){
            this.$router.push({name: "getOrden"}) 
        },
        guardar(){
            
            if (this.validarOrden()==false) {
                           
                var local = this.formStorage
                let $el = this
                let formCliente=new FormData()
                let formdata=new FormData()
                let items = $el.products
                //CLIENTE NUEVO
                if (this.newClient == true) {

                    formCliente.append("nombre",local.cliente);
                    
                    axios.post("http://"+$el.hostName+"/ddm/clientes.php?accion=ins",formCliente)
                    .then(function(response){
                        
                        formdata.append("id",$el.id);
                        formdata.append("id_cliente",response.data.new[0].ID_CLIENTE);
                        formdata.append("compra_cliente",local.compraCliente);
                        formdata.append("responsable",local.responsable);
                        formdata.append("fecha_alta",local.fAlta);
                        formdata.append("fecha_entrega",local.fEntrega);
                        formdata.append("prioridad",local.prioridad);
                        formdata.append("observaciones",local.observaciones);
                        formdata.append("status",local.status);
                        formdata.append("detalle",JSON.stringify(items));
                                
                            
                        axios.post("http://"+$el.hostName+"/ddm/ordenes.php?accion=editar",formdata)
                        .then(function(response){

                            if (response.data.error == true){
                                $el.getModal(3,response.data.mensaje)

                            }else{

                                $el.getModal(1,"El cliente y la orden se han guardado correctamente")

                                setTimeout(function(){$el.$router.push({name: "getOrden"}) }, 2000);   
                            }

                        })
                        .catch(response => {
                            $el.getModal(3,"Error al editar la orden")

                        })
                    })
                    .catch(response => {
                        $el.getModal(3,"Error al crear el cliente nuevo")
                    })
                        

                }else{//CLIENTE NUEVO

                    formdata.append("id_cliente",local.cliente);
                
                    formdata.append("id",$el.id);
                    formdata.append("compra_cliente",local.compraCliente);
                    formdata.append("responsable",local.responsable);
                    formdata.append("fecha_alta",local.fAlta);
                    formdata.append("fecha_entrega",local.fEntrega);
                    formdata.append("prioridad",local.prioridad);
                    formdata.append("observaciones",local.observaciones);
                    formdata.append("status",local.status);
                    formdata.append("detalle",JSON.stringify(items));

                                
                            
                    axios.post("http://"+$el.hostName+"/ddm/ordenes.php?accion=editar",formdata)
                    .then(function(response){
                        if (response.data.error == true){
                            $el.getModal(3,response.data.mensaje)
                        }else{
                            $el.getModal(1,"La orden se ha guardado correctamente")
                            setTimeout(function(){location.reload(); }, 2000);
                                
                        }
                    })
                    .catch(response => {
                        $el.getModal(3,"Error al editar la orden")

                    })
               
                            
                }//IF CLIENTE NUEVO
            }
            
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
        deleterow(id){
            this.products.splice(id,1) 
        },
        addRow(){
            this.products.push({
                    new:1,
                    status:"Creado",
                    cantidad:1,
                    unidad: "0",
                    SelectManual:false,
                    producto:"",
                    numParte: null,
                    notas:"Ninguna",
                    fProgramada:this.dateNow(),
                    unidadrealizada:0,
                    fEmbarcada:null,
                    saldo:0,
                    antiguedad:0,
                    embarque:0,
                    fRealizada:null,
                    tiempoProduccion:0
            })
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
           
                 res= this.products[indexStore].cantidad - this.products[indexStore].unidadrealizada

                this.products[indexStore].saldo = res
                
            return res
        },
        dateNow(){
            
            var f = new Date();
            var date =f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate()
           
                
            return String(date)
           
        },
        dateComp(name,fecha1,fecha2,index){
            
            if (fecha1 == null || fecha1 == "null") {
                return 0;
            }
            if (fecha2 == null || fecha2 == "null") {
                return 0;
            }

           let hoy = new Date(fecha1)
            let mañana = new Date(fecha2)

            let resta = mañana.getTime() - hoy.getTime()
            let diferencia =Math.round(resta/ (1000*60*60*24))
            if (name == "embarque") {
                this.products[index].embarque = diferencia
            }else if(name == "tiempo"){
                this.products[index].tiempoProduccion = diferencia
            }
            
            return diferencia
        }
    },
    
    created(){
        this.getProducts()
        this.getclients()
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
 
