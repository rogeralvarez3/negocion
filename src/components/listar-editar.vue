<template>
  <v-app>
    <v-card style="background:none;background-color:rgba(50,100,255,0.1)">
      <v-card-title class="pa-0">
        <v-flex>
          <h2 style="padding:10px 0 0 10px" class="blue--text">{{título}}</h2>
          <v-text-field
            style="margin:0 10px 0 10px;"
            :class="resultSearch.length===0?'no-encontrado':''"
            outline
            v-model="buscar"
            label="Buscar..."
            prepend-inner-icon="fa fa-search"
          ></v-text-field>
        </v-flex>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-tabs show-arrows>
          <v-tab>Lista</v-tab>
          <v-tab>{{selected.id?'Editar':'Nuevo'}}</v-tab>
          <v-tab v-if="selected.id" @click="selected={}">
            <v-icon color="success">fa fa-plus-circle</v-icon>
          </v-tab>
          <v-tab v-if="selected.id" @click="confirmarBorrar()">
            <v-icon color="error">fa fa-times</v-icon>
          </v-tab>
          <v-tab-item>
            <div style="overflow:auto;max-height:550px;min-height:550px">
              <v-data-table
                :items="resultSearch"
                :headers="headers"
                :rows-per-page-items="[15,30,45]"
                rows-per-page-text="Filas por página"
              >
                <template v-slot:items="props">
                  <tr
                    @click="selected=JSON.parse(JSON.stringify(props.item));selected2=JSON.parse(JSON.stringify(selected))"
                    :class="props.item.id===selected.id?'blue lighten-2 blue--text text--darken-4':''"
                  >
                    <td
                      v-for="col in tabla.headers"
                      :key="col.value"
                      :class="$store.state.fieldTypes[col.type]==='number'?'text-right':'text-left'"
                    >
                      <span v-if="!(col.value in combos)">{{props.item[col.value]}}</span>
                      <span
                        v-if="col.value in combos"
                      >{{combos[col.value].items.filter(v=>{return v.value==props.item[col.value]})[0]?props.item[col.value].text:combos[col.value].items[0].text}}</span>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </div>
          </v-tab-item>
          <v-tab-item ref="tabEditar">
            <v-flex pa-4>
              <table>
                <tr v-for="(col,key) in tabla.headers" :key="key">
                  <th class="text-left">{{col.text}}:&nbsp;</th>
                  <td width="450">
                    <select
                      v-if="col.value in combos"
                      v-model="selected[col.value]"
                      v-bind:style="{width:combos[col.value].width}"
                    >
                      <option
                        v-for="item in combos[col.value].items"
                        :value="item.value"
                        :key="item.value"
                      >{{item.text}}</option>
                    </select>
                    <input
                      v-if="!(col.value in combos)"
                      :class="$store.state.fieldTypes[col.type]==='number'?'text-right':'text-left'"
                      :type="$store.state.fieldTypes[col.type]"
                      v-model="selected[col.value]"
                      :disabled="col.text.toLowerCase()==='id'"
                    />
                  </td>
                </tr>
              </table>
            </v-flex>
            <v-btn v-if="editando" @click="guardar()">
              Guardar&nbsp;
              <v-icon>fa fa-save</v-icon>
            </v-btn>
            <v-btn v-if="editando" @click="selected=JSON.parse(JSON.stringify(selected2))">
              Cancelar&nbsp;
              <v-icon>fa fa-times</v-icon>
            </v-btn>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { api } from "../router";
export default {
  name: "listar-editar",
  props: {
    tabla: Object,
    título: String,
    combos: Object
  },
  data() {
    return {
      buscar: "",
      selected: {},
      selected2: {}
    };
  },
  methods: {
    guardar: function() {
      var mv = this;
      mv.selected2 = JSON.parse(JSON.stringify(mv.selected));
      mv.$emit("save", mv.$event, mv.selected);
    },
    confirmarBorrar: function() {
      var mv = this;
      mv.$swal({
        type: "warning",
        title: "ADVERTENCIA!!!",
        text:
          "Está a punto de borrar el registro seleccionado [id: " +
          mv.selected.id +
          "].\n ¿Desea continuar?",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
        showCancelButton: true
      }).then(res => {
        if (res.value) {
          this.$emit("delete", mv.$event, mv.selected.id);
          mv.selected = {};
        }
      });
    },
    editar: function() {
      this.$refs.tabEditar.isActive = true;
    }
  },
  computed: {
    resultSearch: function() {
      var mv = this;
      if (!mv.tabla.items) return [];
      var result = mv.tabla.items.filter(item => {
        var strSearch = [];
        Object.values(item).forEach(val => {
          if (val != null) {
            strSearch.push(val.toString());
          }
        });
        strSearch = strSearch.join(" ").toLowerCase();
        return strSearch.indexOf(mv.buscar.toString().toLowerCase()) >= 0;
      });
      return result;
    },
    itemSelected: function() {
      var id = this.selected.id;
      if (!this.tabla.items) return {};
      var result = this.tabla.items.filter(item => {
        return item.id === id;
      });
      if (result.length > 0) {
        result = result[0];
      }
      return result;
    },
    editando: function() {
      var mv = this;
      Object.keys(mv.itemSelected).forEach(k => {
        if (mv.itemSelected[k] === null) {
          mv.itemSelected[k] = "";
        }
      });
      return !(JSON.stringify(mv.selected) == JSON.stringify(mv.itemSelected));
    },
    headers: function() {
      var mv = this;
      if (mv.tabla.headers) {
        mv.tabla.headers.forEach(col => {
          if (mv.$store.state.fieldTypes[col.type] === "number") {
            col.align = "right";
          } else {
            col.align = "left";
          }
        });
      }
      return mv.tabla.headers;
    }
  }
};
</script>

<style>
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
td input,
td select {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}

td input[disabled] {
  background: none;
}
.v-datatable tbody tr {
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #eee;
}
.v-datatable tbody tr:nth-child(odd) {
  background-color: rgba(252, 252, 252, 0.2);
}
.theme--light .v-table thead th {
  color: black;
  /*border: 1px solid #ddd;*/
  border: none;
  background-color: rgba(82, 134, 158, 0.2);
}
.theme--light .v-table tbody td,
.theme--light .v-table thead tr {
  height: 30px;
  /*border: 1px solid #ddd;*/
  background: none;
  background-color: rgba(255, 255, 255, 0.2);
}

input[type="number"] {
  width: 100px;
}
.v-text-field__slot {
  padding: 3px;
}
.no-encontrado .v-text-field__slot {
  background: rgba(255, 50, 50, 0.2);
}
.theme--light .v-table,
.theme--light .v-tabs__bar,
.theme--light .v-datatable .v-datatable__actions {
  background: none;
  background-image: linear-gradient(
    to top,
    rgba(100, 100, 100, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background: none;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(100, 100, 150, 0.2) 50%,
    rgba(250, 250, 250, 0.15) 100%
  );
  text-shadow: 1px 1px 2px white;
  border-radius: 5px;
  box-shadow: 0 1px 4px #666;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat):hover {
  color: rgb(9, 39, 73);
}
</style>
