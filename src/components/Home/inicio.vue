<template>
    <div name="INICIO" class="container" >
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page" >Home</li>
        </ol>
        </nav>
        <div class="p-4" style="border-radius:10px;background-color: white;color:black;opacity:1;border: 1px solid black">
       
            <form>
                
            <div class="form-row">
                <div class="form-group col-md-6" style="text-align:left">
                
                    <label class="pt-2 mb-2" for=""><b>Cuenta</b></label>
                     <input type="text" class="form-control mb-2" id="" placeholder="Cuenta de usuario" disabled v-model="cuenta">

                    <label class="pt-2 mb-3" for=""><b>Nombre Completo</b></label>
                      <input type="text" class="form-control mb-2" id="" placeholder="Nombre Completo" disabled v-model="nombre">

                    <label class="pt-2 mb-3" for=""><b>Correo</b></label>
                    <input type="text" class="form-control mb-2" id="" placeholder="Correo" disabled v-model="correo">
                    
                    <label class="pt-2 " for=""><b>Permisos</b></label>
                     <input type="text" class="form-control" id="" placeholder="Permisos" disabled v-model="permisos">
                    
                    
                </div>
               
                <div class="form-group col-md-6 ">
                
                    <div style="background:#cf6f19;border-radius:5px;" class="pt-1">
                        
                        <label for="" style="text-align:center;color:white"><b>Notificaciones</b></label>
                    </div>
                    <div style="background:white;border-radius:5px;height:100%;border: 1px solid black" class="p-2">
                       <!-- <div v-for="noti in notifications" :key="noti.id"> -->
					En construcción
					<!-- <div v-if="noti.type == 'Mod'" @click="noti[user] = true" :class="noti[user] == true ? 'p-2 btn btn-block btn-light active':'p-2 btn btn-block btn-light '" style="height:40px;border-bottom: 1px solid gray;box-shadow: 11px 14px 33px -13px rgba (0,0,0,0.75)">
						<a :href="'#/'+noti.modulo+'/'+noti.ID">
							<div class="row">
								<div class="col-md-1">
									<i class="fas fa-user-edit ml-3"  style="color:black"></i>
								</div>
								<div class="col-md-11">
									
                                    <label  class="h6"><b>{{noti.responsable}}</b> a modificado en <b>{{noti.modulo}}</b> el id <b>{{noti.ID}}</b> </label>
								</div>
							</div>
						 	
						</a>
					</div> -->

				<!-- </div> -->
                
                    </div>
                    
                </div>
            </div>
            <br>
            
            <!-- <button type="  " class="btn btn-primary ">Sign in</button> -->
            </form>

            <label for=""></label>
        </div>
        
    </div>
</template>
<script>
import { setTimeout } from 'timers'
import notifi from '@/components/Tools/notifiaciones.vue'
export default {
    props:{
        login:Boolean
    },
    components:{
        notifi
    },
    data(){
        return {
            notifications:[
					{
						ID:1,
						type:"Mod",
						responsable:"Raafa G",
						status:false,
						modulo:"Producto",
						index:1,
						user1:false,
						user2:false,
						user3:false,
						user4:false,
						user5:false,
					},
					{
						ID:2,
						type:"Mod",
						responsable:"Alfonso",
						status:false,
						modulo:"Orden",
						index:4,
						user1:false,
						user2:false,
						user3:false,
						user4:false,
						user5:false,
					}
				],
				user:0,
				noti:true,
            cuenta:"",
            pass:"",
            nombre:"",
            correo:"",
            permisos:"",
             users:
             [
                { 
                    name:"admin",pass:"root",nombre:"Rafael Garcia",correo:"example@hotmail.com",permisos:"all"
                },
                { 
                    name:"rodo",pass:"vargas",nombre:"Rodolfo Vargas",correo:"example@hotmail.com",permisos:"all"
                },
                { 
                    name:"user2",pass:"user2",nombre:"Test2",correo:"example@hotmail.com",permisos:"all"
                },
                { 
                    name:"user3",pass:"user3",nombre:"Test3",correo:"example@hotmail.com",permisos:"all"
                },
                { 
                    name:"user4",pass:"user4",nombre:"Test4",correo:"example@hotmail.com",permisos:"all"
                }
            ],
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
        getDatos:function () {
            let $el=this
            axios.get("http://mueblesdimmsa.com/ddm/usuarios.php?id="+localStorage.getItem("id_usuario"))
        	.then(function(response){
            
            if (response.data.error == true){
            
                $el.log=false
                $el.cuenta=""
                $el.pass=""
            }else{
              

                    $el.cuenta=response.data.data[0].CUENTA
                    $el.nombre=response.data.data[0].NOMBRE
                    $el.correo=response.data.data[0].CORREO
                    $el.permisos=response.data.data[0].PERMISOS
            }
           
          })
            .catch(response => {
           
               
            
		    })
        
      },
        projectClick:function(project){
            this.dataComp.nav=2
            this.dataComp.project=project

            this.$emit('log', this.dataComp)
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
        }

    },
    computed: {
		count(){
			let cont=0
			this.notifications.forEach(element => {
				if(element[this.user] == false){
					cont +=1
				}
			});
			return cont
		}
	},
    created(){
       
        try {
            this.getDatos()
            this.user="user"+localStorage.id_usuario
        } catch (error) {
            this.log=false
            this.cuenta=""
            this.pass=""
        }
    }
   
    
}
</script>
<style >
.jump{
     background: url(https://ninetechs.000webhostapp.com/img/fondo2.jpg);
    background-size: 200px;
    
}



</style>