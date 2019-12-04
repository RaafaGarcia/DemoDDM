<template>
    <div class="container" >
       <modals
            :type="modal"
            :text="textModal"
            :question="ask"
            :item="target"
            v-on:type="modal=0"

            v-on:result="actions($event.res,$event.id)"
             />
        <div class="row trans mt-5">
            <div class="col-md-3">

            </div>
            <div class="col-md-6">
                <form class="modal-content animate mb-5" style="border-radius:10px;background-color: rgba(0, 0,0 , 0.8); " action="/action_page.php">
                    <div class="imgcontainer">

                        <img src="../../assets/LogoAlta.jpg" width="100" alt="Avatar" class="avatar">
                    </div>
                    

                    <div class="container p-4 trans" style="color:white;opacity:.9">
                        <label for="uname"><b>Nombre de Usuario</b></label>
                        
                        <input type="text" class="form-control" placeholder="Ingresar Usuario" v-on:keyup.enter="Iniciar()" name="uname" required v-model="dataComp.user">

                        <label for="psw"><b>Contraseña</b></label>
                        <input type="password" class="form-control mb-2" placeholder="Ingresar Contraseña" v-on:keyup.enter="Iniciar()" name="psw" required v-model="dataComp.pass">
                            
                        <span class="btn   btn-orange"  v-on:click="Iniciar()"><a class="h4"> Iniciar Sesión</a></span>
                        <label for="" style="color:red">{{dataComp.mensaje}}</label>
                        
                    </div>

                    <div class="container" style="background-color:whitesmoke;border-radius:10px">
                   
                    <span class="psw mb-3">Soporte tecnico:<a href="#/soporte" style="color:#cf6f19;"> Viitech</a></span>
                    </div>
                </form>
            </div>
        </div>
        <div class="footer  ">
  <p class="pt-2">@Copyright DiMMSA 2019</p>
</div>
    </div>
</template>
<script>
import modals from '@/components/Tools/modals.vue'
export default {
  props:{
    usuario:String,
    contraseña:String,
    recordar:Boolean,
    
  },
  components: {
   modals
  },
    data(){
      return{
        id:this.$route.params.id,
            target:"",
            accion:"",
            ask:"",
            res:false,
            modal:0,
            textModal:"",
        dataComp:
        {
          user:this.usuario,
          pass:this.contraseña,
          log:false,
          nav:0,
          mensaje:null,
        }
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
      Iniciar:function () {
        var logeado=false
        let $el = this
			  let formdata=new FormData()
        formdata.append("cuenta",$el.dataComp.user)
        formdata.append("clave",$el.dataComp.pass)
		    
        
        axios.post("http://mueblesdimmsa.com/ddm/usuarios.php",formdata)
        	.then(function(response){
            
            if (response.data.error == true){
              $el.getModal(3,response.data.mensaje)
            }else{
              
              $el.dataComp.mensaje = ""
              $el.dataComp.log=true
              $el.dataComp.nav=1
              logeado=true

              /*Captura de datos escrito en los inputs*/
              var id = response.data.data[0].ID_USUARIO
              var name = response.data.data[0].NOMBRE        
              var cuenta = $el.dataComp.user
              var pass = $el.dataComp.pass
              /*Guardando los datos en el LocalStorage*/
              localStorage.setItem("id_usuario", id);
              localStorage.setItem("cuenta", cuenta);
              localStorage.setItem("log", true);
              localStorage.setItem("name", name);
                
         
            $el.$emit('log', $el.dataComp)
            }
           
          })
          .catch(response => {
           
              $el.getModal(3,"Verifique su conexion a internet")

		      })
        
      }
        
    }
    
}
</script>
<style >


/* Set a style for all buttons */
.btnEntrar {
  padding: 5px 5px;
  margin: 4px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  background: #cf6f19;
  color: white;
  border: 2px double #cf6f19
}
.btnEntrar:hover {
 
 background: transparent;
  color: white;
}


/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 50%;
  border-radius: 5%;
}



span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */

/* Modal Content/Box */

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}



/* Change styles for span and cancel button on extra small screens */

  
  
  
</style>