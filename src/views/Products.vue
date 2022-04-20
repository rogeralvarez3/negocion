<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-4">Productos</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <mi-lista :data="productos" />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import MiLista from "../components/MiLista.vue";
export default {
  components: {
    MiLista,
  },
  data() {
    return {
      productos: [],
    };
  },
};
</script>
