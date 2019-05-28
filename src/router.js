import Vue from 'vue'
import Router from 'vue-router'
import Tareas from './views/Tareas.vue'
import Reportes from './views/Reportes.vue'
import Herramientas from './views/Herramientas.vue'
import Opciones from './views/Opciones.vue'
import Ayuda from './views/Ayuda.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
