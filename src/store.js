import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api:'http://localhost:3000',
    db:'http://localhost:3000/db',
    menu:[
      {text:'Tareas',icon:'fab fa-elementor',submenu:[
        {text:'Productos',icon:'fa fa-box'},
        {text:'Clientes',icon:'fa fa-users'},
        {text:'Proveedores',icon:'fa fa-store-alt'},
        {text:'Facturación',icon:'fa fa-calculator'},
        {text:'Compras',icon:'fa fa-shopping-cart'},
        {text:'Ajustes',icon:'fas fa-tasks'},
        {text:'Cuentas x cobrar',icon:'fas fa-money-bill-alt'},
        {text:'Cuentas x pagar',icon:'far fa-money-bill-alt'},
      ]},
      {text:'Reportes',icon:'fas fa-chart-pie',submenu:[
        {text:'Ventas por producto',icon:'fas fa-chart-pie'},
        {text:'Ventas por cliente',icon:'fas fa-chart-pie'},
        {text:'Ventas por usuario',icon:'fas fa-chart-pie'},
        {text:'Compras',icon:'fa fa-chart-bar'},
        {text:'Inventario',icon:'fa fa-chart-bar'},
      ]},
      {text:'Herramientas',icon:'fa fa-wrench',submenu:[
        {text:'Hacer pedido',icon:'fa fa-cubes'},
        {text:'Guardar en la nube',icon:'fa fa-cloud'},
        {text:'Buscar cliente en la nube',icon:'fas fa-download'},
        {text:'Buscar producto en la nube',icon:'fas fa-money-bill'},
      ]},
      {text:'Opciones',icon:'fa fa-cogs',submenu:[
        {text:'Generales',icon:'fas fa-money-bill'},
        {text:'Parámetros',icon:'fas fa-money-bill'},
        {text:'Usuarios',icon:'fa fa-users'},
      ]},
      {text:'Ayuda',icon:'fa fa-question',submenu:[
        {text:'Acerca de...',icon:'fas fa-money-bill'},
        {text:'Tutorial',icon:'fas fa-money-bill'},
        {text:'Registro',icon:'fas fa-money-bill'},
      ]},
      {text:'Salir',icon:'fa fa-times'},
    ],
    login:false,
    credentials:{id:1,u:'',permissions:[]}
  },
  mutations: {

  },
  actions: {

  }
})
