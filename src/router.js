import Vue from 'vue'
import Router from 'vue-router'
import general from './views/General.vue'
import home from './components/Home/home.vue'

import about from './components/About/About.vue'
import getpedidos from './components/Tools/pedidos.vue'
import pags from './components/Tools/pagination.vue'
import notifi from './components/Tools/notifiaciones.vue'
//ORDEN
import getOrden from './components/Orden/getOrden.vue'
import nuevaOrden from './components/Orden/nuevaOrden.vue'
import editarOrden from './components/Orden/editarOrden.vue'

//CLIENTE
import getCliente from './components/Cliente/getCliente.vue'
import nuevoCliente from './components/Cliente/nuevoCliente.vue'
import editarCliente from './components/Cliente/editarCliente.vue'

//PRODUCTO
import getProducto from './components/Producto/getProducto.vue'
import nuevoProducto from './components/Producto/nuevoProducto.vue'
import editarProducto from './components/Producto/editarProducto.vue'


import vuefire from './components/Tools/vuefire.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/', 
    component: general, 
    children: [ 
        { path: '', component: home }, 
      ] 
    },
    // ABOUT
    {
      path: '/about/:id',
      name: 'about',
      props: true,
      component: about
    },
    //PEDIDO OLD
    {
      path: '/pedidos',
      name: 'pedidos',
      props: true,
      component: getpedidos
    },

    //ORDENES
    {
      path: '/orden',
      name: 'getOrden',
      component: getOrden
    },
    {
      path: '/orden/nueva',
      name: 'nuevaOrden',
      component: nuevaOrden
    },
    {
      path: '/orden/:id',
      name: 'editarOrden',
      component: editarOrden
    },

    //CLIENTES
    {
      path: '/cliente',
      name: 'getCliente',
      component: getCliente
    },
    {
      path: '/cliente/nuevo',
      name: 'nuevoCliente',
      component: nuevoCliente
    },
    {
      path: '/cliente/:id',
      name: 'editarCliente',
      component: editarCliente
    },

    //PRODUCTO
    {
      path: '/producto',
      name: 'getProducto',
      component: getProducto
    },
    {
      path: '/producto/nuevo',
      name: 'nuevoProducto',
      component: nuevoProducto
    },
    {
      path: '/producto/:id',
      name: 'editarProducto',
      component: editarProducto
    },
    
    //TESTS
    {
      path: '/pagination',
      name: 'pags',
      props: true,
      component: pags
    },
    {
      path: '/notifi',
      name: 'notifi',
      props: true,
      component: notifi
    },
    {
      path: '/vuefire',
      name: 'vuefire',
      props: true,
      component: vuefire
    }
    
  ]
})
