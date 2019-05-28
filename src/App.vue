<template>
  <v-app>
    <v-navigation-drawer app clipped dark class="blue-grey darken-3" v-model="drawer">
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.text" :to="item.text!='Salir'?item.text:''" @click="item.text==='Salir'?$store.state.credentials.id=0:null">
          <v-list-tile-action><v-icon v-text="item.icon"></v-icon></v-list-tile-action>
          <v-list-tile-title v-html="item.text"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left class="elevation-0" style="border-bottom:1px solid #ddd">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon style="font-size:32px">fas fa-award</v-icon>
        <span>negoci</span>
        <span class="font-weight-light blue--text">on</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="blue-grey darken-3"
        icon
        flat   
      >
        <v-icon style="font-size:32px">fa fa-user-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="white">
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <login :dlg="$store.state.credentials.id===0"></login>
    <v-footer class="pa-3" style="border-top:1px solid #ddd" app>
      <div>RaeSoft 2019</div>
    </v-footer>
  </v-app>
</template>

<script>
import io from "socket.io-client"
import login from "./components/login"
export default {
  name: 'App',
  components:{login},
  data () {
    return {
      //
      drawer:undefined
    }
  },
  methods:{
    setSocketHandler:function(){
      var socket = io(this.$store.state.api)
      socket.on('msg',res=>{
        console.log(res)
      })
    }
  },
  computed:{
    menu:function(){return this.$store.state.menu}
  },
  mounted:function(){
    this.setSocketHandler()
  }
}
</script>

