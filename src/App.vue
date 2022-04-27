<template>
  <v-app>
    <v-navigation-drawer clipped app v-model="drawer" :mini-variant="mini">
      <v-list dense>
        <v-list-item v-for="mn in menú" :key="mn.name" :to="mn.name">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item-icon v-on="mini ? on : null">
                <v-icon v-text="mn.icon"></v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ mn.title }}</span>
          </v-tooltip>
          <v-list-item-title v-text="mn.title"></v-list-item-title>
        </v-list-item>
        <v-list-item @click="mini = !mini">
          <v-list-item-icon>
            <v-icon
              v-text="mini ? 'mdi-arrow-right' : 'mdi-arrow-left'"
            ></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="!drawer"
      ></v-app-bar-nav-icon>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn fab text v-on="on"
            ><v-icon large>mdi-account-circle</v-icon></v-btn
          >
        </template>
        <userInfo />
      </v-menu>
    </v-app-bar>
    <v-system-bar></v-system-bar>
    <v-main>
      <router-view />
    </v-main>
    <login-form />
  </v-app>
</template>
<script>
import userInfo from "./components/userInfo.vue";
import LoginForm from "./views/Login.vue";
export default {
  name: "App",
  components: {
    userInfo,
    LoginForm,
  },
  data: () => ({
    //
    menú: [
      { icon: "mdi-account-group", title: "Clientes", name: "clientes" },
      { icon: "mdi-view-quilt-outline", title: "Productos", name: "productos" },
      { icon: "mdi-cart", title: "Movimientos", name: "movimientos" },
      {
        icon: "mdi-file-multiple-outline",
        title: "Reportes",
        name: "reportes",
      },
      { icon: "mdi-cogs", title: "Preferencias", name: "preferencias" },
    ],
    title: "NEGOCIÓN",
    drawer: null,
    mini: false,
  }),
  methods: {},
  mounted: function () {
    this.$store.dispatch("cargarDatos");
  },
};
</script>
