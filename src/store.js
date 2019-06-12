import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api:'http://localhost:3000',
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
    credentials:{id:0,u:'',permissions:[]},
    db:[],
    cargando:false,
    fieldTypes:{
      1:'number',
      2:'number',
      3:'number',
      4:'number',
      5:'number',
      7:'datetime-local',
      8:'number',
      9:'number',
      10:'date',
      11:'time',
      12:'datetime-local',
      13:'number',
      16:'number',
      253:'text',
      254:'text',
      246:'number'
     }
  },
  mutations: {
    setDb(state,payload){
      state.db=payload
    },
    setCargando(state,payload){
      state.cargando=payload
    },
    setCredentials(state,payload){
      state.credentials=payload
    },
    save(state,payload){
      var tabla = state.db.filter(t=>{return t.name==payload.param.tabla})[0]
      var registro = tabla.items.findIndex(reg=>{return reg.id==payload.param.registro.id})
      if(registro<0){tabla.items.push(payload.param.registro)}
      else{Vue.$set(tabla.items,registro,payload.param.registro)}
    },
    delete(state,payload){
      var tabla = state.db.filter(t=>{return t.name==payload.param.tabla})[0]
      var registro = tabla.items.findIndex(reg=>{return reg.id==payload.param.id})
      tabla.items.splice(registro,1)
    }
  },
  actions: {
    cargarDatos(context){
      context.commit('setCargando',true)
      axios.post(context.state.api+"/obtenerDb").then(res=>{
        if(res.data.errno){console.log(res.data)}else{
        context.commit('setDb',res.data)}
        context.commit('setCargando',false)
      })
    },
  }
})
