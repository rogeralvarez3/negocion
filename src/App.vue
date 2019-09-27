<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      width="250"
      style="background:none;background-color:rgba(0,150,180,0.9);color:black"
    >
      <v-list style="background:none">
        <v-list-tile
          v-for="item in menu"
          :key="item.text"
          :to="item.text!='Salir'?item.text:''"
          @click="item.text==='Salir'?$store.state.credentials.id=0:null"
        >
          <v-list-tile-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-html="item.text"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense app clipped-left style="background:none;background-color:rgba(50,80,100,0.2)">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon style="font-size:32px">fas fa-award</v-icon>
        <span>negoci</span>
        <span class="font-weight-light blue--text">on</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="blue-grey lighten" icon flat>
        <v-icon style="font-size:32px">fa fa-user-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-scale-transition leave-absolute origin="top-left">
          <router-view />
        </v-scale-transition>
      </v-container>
    </v-content>
    <login :dlg="$store.state.credentials.id===0"></login>
    <v-footer
      dense
      class="pa-3"
      style="background:none;background-color:rgba(50,80,100,0.3);box-shadow:0 0 2px gray"
      app
    >
      <div>RaeSoft 2019</div>
    </v-footer>
    <v-dialog v-model="$store.state.cargando" width="400">
      <v-flex row class="white pa-4">
        <v-layout>
          <v-progress-circular indeterminate color="blue-grey"></v-progress-circular>
        </v-layout>
        <v-layout>
          <h3>Espere...</h3>
        </v-layout>
      </v-flex>
    </v-dialog>
  </v-app>
</template>

<script>
import io from "socket.io-client";
import login from "./components/login";
export default {
  name: "App",
  components: { login },
  data() {
    return {
      //
      drawer: undefined
    };
  },
  methods: {
    setSocketHandler: function() {
      var mv = this;
      var socket = io(this.$store.state.api);
      socket.on("login", res => {
        //console.log('recibiendo datos del evento login')
        //console.log(res)
      });
      socket.on("save", res => {
        console.log("recibiendo datos del evento save");
        console.log(res);
        mv.$store.commit("save", res);
      });
      socket.on("delete", res => {
        mv.$store.commit("delete", res);
      });
    }
  },
  computed: {
    menu: function() {
      return this.$store.state.menu;
    }
  },
  mounted: function() {
    this.setSocketHandler();
  }
};
</script>
<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-shadow: 1px 1px 2px rgb(255, 255, 255);
  background-image: url(assets/background.jpg);
  background-repeat: repeat;
}

.application--wrap {
  min-height: 100%;
}
.theme--light .application {
  background: none;
  background-color: transparent;
}
#app {
  background: none;
}
</style>


