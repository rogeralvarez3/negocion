import Vue from 'vue'
import Router from 'vue-router'
import Tareas from './views/Tareas.vue'
import Reportes from './views/Reportes.vue'
import Herramientas from './views/Herramientas.vue'
import Opciones from './views/Opciones.vue'
import Ayuda from './views/Ayuda.vue'
import Facturación from './views/Facturación.vue'

import Productos from './views/Productos.vue'
import Clientes from './views/Clientes.vue'
import Proveedores from './views/Proveedores.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Tareas',
      name: 'Tareas',
      component: Tareas
    },
    {
      path: '/Reportes',
      name: 'Reportes',
      component: Reportes
    },
    {
      path: '/Herramientas',
      name: 'Herramientas',
      component: Herramientas
    },
    {
      path: '/Opciones',
      name: 'Opciones',
      component: Opciones
    },
    {
      path: '/Ayuda',
      name: 'Ayuda',
      component: Ayuda
    },
    {
      path: '/Productos',
      name: 'Productos',
      component: Productos
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: Clientes
    },
    {
      path: '/Proveedores',
      name: 'Proveedores',
      component: Proveedores
    },
    {
      path: '/Facturación',
      name: 'Facturación',
      component: Facturación
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
