<template>
  <div class="about ">

  
    <encabezado :login="false"  />
    <div style="background:whitesmoke;border:1px solid black;text-align:center; border-radius:5px" class="container">
      
    <label for="" class="h1">¿Tienes preguntas sobre el funcionamiento de DimmsaApp?
     </label>
<label for="" class="h4"> Escríbele un correo electrónico a nuestro equipo de Soporte Técnico,  <p>y ellos responderán a la brevedad posible.</p>
<a href="mailto:ViiSoporte.es?Subject=DimmsaAPP">ViiSoporte@outlook.es</a>
</label>
<p class="h4">Instrucciones de usuario:</p>
<br>
<div class="imagenes">
  <div name="1" class="mb-4">
    <label for="" class="h5 mb-2"><b>1.- Login de usuario:</b> <p> Donde se ingresa la cuenta y la contraseña de usuario para entrar al sistema</p></label>
    <br>
    <img src="../../assets/login.png" class="img-fluid" alt="Responsive image">
  </div>
  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>2.- Header de la página:</b> <p> El encabezado de la página contiene elementos de navegación como el logo de la empresa que redirige a inicio y la opción de "Acerca de" (modo sin acceder)</p></label>
    <br>
    <img src="../../assets/navbarinicio.png" class="img-fluid" alt="Responsive image">
  </div>
  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>3.- Home:</b> <p> El encabezado de la página home contiene los mismos accesos de navegación y</p>
    <p>1: Boton toggle del menú lateral al hacer click abre o cierra el menú</p>
    <p>2: Dropdown de usuario para funciones de acceso (modo acceder)</p>
    <p>3: Sección de notificaciones (En construcción) </p>
    <p>4: Datos de la cuenta</p>
    </label>
    <br>
    <img src="../../assets/home.png" class="img-fluid" alt="Responsive image">
  </div>
  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>4.- Boton de usuario:</b> <p> Un pequeño menú para las opciones del usuario (perfil en construcción)</p>
    
    </label>
    <br>
    <img src="../../assets/btnUser.png" class="img-fluid" alt="Responsive image">
  </div>
  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>5.- Navlinks:</b> <p> Se usa como un elemento de orientación por subcarpetas si se encuentra en una carpeta hija se puede cambiar de modulo entre carpetas padres con solo un click </p>
    
    </label>
    <br>
    <img src="../../assets/navlink.png" class="img-fluid" alt="Responsive image">
  </div>

  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>6.- Menú lateral:</b> <p> Menú de acceso a los módulos minimízable (Módulos en funcionamiento: pedidos)</p>
    
    </label>
    <br>
    <img src="../../assets/menu.png" class="img-fluid" alt="Responsive image">
  </div>

  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>7.- Módulo de pedidos: </b> <p> En este módulo se representan los pedidos, de momento se puede buscar los pedidos por su folio al dar enter en el input text search  </p>
    <p>Tenemos un boton de nuevo para crear un pedido</p>
    <p>Una tabla responsiva donde se muestran los pedidos del sistema con una columna de acciones donde yo puedo ver mi pedido o eliminarlo</p>
    <p>Cuando veo un pedido tengo la posibilidad de modificarlo y guardar los cambios</p>
    
    </label>
    <br>
    <img src="../../assets/pedidos.png" class="img-fluid" alt="Responsive image">
  </div>
  
  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>8.- Formulario de pedido: </b> 
    <p>Formulario para los pedidos con los elementos necesarios
      así como 2 botones ya sea guardar y cancelar o editar y cancelar dependiendo el caso.

      El responsable se llena automáticamente y no se puede modificar 
      así como cuando se crea un nuevo pedido los estatus están bloqueados en nuevo.

      La tabla cuenta con un boton para agregar filas y en cada fila una acción para eliminarlas 
    </p>
    
    </label>
    <br>
    <img src="../../assets/pedidosNuevo.png" class="img-fluid" alt="Responsive image">
  </div>

  <div name="1" class="mb-2">
    <label for="" class="h5 p-5 mb-2"><b>9.- Alertas: </b> 
    <p>Todos los botones con acciones importantes cuentan con una alerta donde retroalimenta la acción del boton 
      
    </p>
      
    
    </label>
    <br>
    <img src="../../assets/alerta.png" class="img-fluid" alt="Responsive image">
  </div>


</div>
     
    </div>
    

  </div>
</template>

<script>

// @ is an alias to /src

import encabezado from '@/components/Tools/header.vue'

export default {
  name: 'home',
  props:{
    ['id']:Number
  },
  components: {
    
    encabezado,
   
  },
  data(){
    return {
      datos:{},
      sesion:false
    }
  },
  methods:{
    ses:function(event){
      this.datos=event
      this.sesion=event.log
    }
  }
}
</script>