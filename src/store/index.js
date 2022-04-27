/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "http://localhost:3000",
    usuario: { id: null, nombre: null, token: null, permisos: [] },
    db: {
      productos: [],
      clientes: [],
      proveedores: [],
      movimientos: [],
    },
  },
  getters: {},
  mutations: {
    setData(state, payload) {
      Vue.set(state.db, payload.key, payload.data);
    },
  },
  actions: {
    cargarDatos({ state, commit }) {
      Object.keys(state.db).forEach((k) => {
        fetch(`${state.api}/mostrar`, {
          body: JSON.stringify({ tabla: k }),
          method: "get",
          headers: { 'content-type': 'application/json' }
        }).then((result) => {
          return result.json();
        }).then((json) => { commit("setData", { key: k, data: json }) });
      });
    }
  },
  modules: {},
});
