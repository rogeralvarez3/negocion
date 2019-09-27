<template>
  <v-dialog v-model="dlg" width="400" persistent>
    <v-card>
      <v-card-title class="blue-grey lighten-5 blue-grey--text">
        <h2>
          <v-icon color="blue-grey">fa fa-user-lock</v-icon>Identifíquese
        </h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          v-model="u"
          label="Nombre de usuario"
          prepend-inner-icon="fa fa-user"
          @keypress.13="$refs.txtP.focus()"
        ></v-text-field>
        <v-text-field
          ref="txtP"
          v-model="p"
          label="Contraseña"
          prepend-inner-icon="fa fa-lock"
          :type="showPass ? 'text' : 'password'"
          @keypress.13="login()"
          @click:append="showPass=!showPass"
          :append-icon="showPass ? 'fa fa-eye-slash' : 'fa fa-eye'"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="u.length===0 || p.length===0"
          icon
          dark
          color="blue-grey darken-3"
          large
          @click="login()"
        >
          <v-icon>fa fa-key</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  props: {
    dlg: Boolean
  },
  data: () => ({
    u: "",
    p: "",
    showPass: false
  }),
  methods: {
    login: function() {
      var mv = this;
      mv.$store.commit("setCargando", true);
      var params = { u: this.u, p: this.p };
      axios.post(mv.$store.state.api + "/login", params).then(res => {
        if (res.data.errno) {
          mv.$swal({
            type: "error",
            title: "Error al iniciar sesión",
            text: res.data.err_msg
          });
        } else {
          if (res.data.type) {
            mv.$swal(res.data);
            mv.$store.commit("setCargando", false);
            return;
          }
          mv.$store.commit("setCredentials", res.data);
          mv.$store.dispatch("cargarDatos");
        }
        mv.$store.commit("setCargando", false);
      });
    }
  }
};
</script>

<style>
</style>
