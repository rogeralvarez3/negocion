<template>
  <v-dialog persistent v-model="show" width="400">
    <v-card>
      <v-card-title class="grey lighten-4 pa-2 pl-4 pr-4"
        ><v-icon large class="mr-2">mdi-lock</v-icon> Identifícate</v-card-title
      >
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          label="Nombre de usuario"
          prepend-inner-icon="mdi-account"
          class="mt-4"
        ></v-text-field>
        <v-text-field
          label="Contraseña"
          prepend-inner-icon="mdi-key"
          type="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="grey lighten-4 pa-2">
        <v-spacer></v-spacer>
        <v-btn color="primary">Entrar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    show: function () {
      return this.$store.state.usuario.token == null;
    },
  },
};
</script>
