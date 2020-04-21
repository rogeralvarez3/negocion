<template>
  <v-app>
    <v-card width="800">
      <v-card-title class="blue-grey lighten-4">
        <h3>{{título}}</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-text-field
            v-for="item in textFieldsMaestro"
            v-model="item.valor"
            :key="item.value"
            :label="item.text"
            :width="300"
            class="mr-2 xs-1"
          ></v-text-field>
          <v-select
            v-for="item in selectFieldsMaestro"
            :items="item.control.items"
            :key="item.value"
            :width="item.width"
            class="mr-2 xs-1"
          ></v-select>
          <v-data-table :items="detalle.campos" hide-actions :headers="headers_detalle">
            <template v-slot:props="items">
              <td v-for="(field,i) in headers_detalle" :key="i">{{props.item[field]}}</td>
            </template>
          </v-data-table>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn>
          <v-icon>fa fa-save</v-icon>&nbsp;guardar
        </v-btn>
        <v-btn>
          <v-icon>fa fa-print</v-icon>&nbsp;guardar e imprimir
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog>
      <v-card>
        <v-card-title></v-card-title>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  props: {
    título: String,
    maestro: Object,
    detalle: Object
  },
  data() {
    return {
      showAddDetail: false
    };
  },
  methods: {
    agregarADetalle: function() {}
  },
  computed: {
    headers_detalle: function() {
      var result = [];
      this.detalle.campos.forEach(campo => {
        if (campo.text) {
          result.push(campo);
        }
      });
      return result;
    },
    textFieldsMaestro: function() {
      var result = this.maestro.campos.filter(c => {
        return !c.control;
      });
      return result;
    },
    selectFieldsMaestro: function() {
      var result = this.maestro.campos.filter(c => {
        return c.control;
      });
      return result;
    }
  }
};
</script>

<style>
</style>
