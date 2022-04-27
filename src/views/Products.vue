<template>
  <div class="ma-4 mt-0">
    <v-card>
      <v-card-title class="pa-0 pl-2 pr-2 primary white--text"
        >Productos</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    productos: function (filtro) {
      const mv = this;
      let data = mv.$store.state.db.productos.filter((item) => {
        let campos = Object.values(item).join(" ");
        return (
          campos
            .toString()
            .toLowerCase()
            .indexOf(filtro.toString().toLowerCase()) >= 0
        );
      });
      return data;
    },
  },
};
</script>
