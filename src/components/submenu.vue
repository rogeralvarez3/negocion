<template>
  <v-app class="white">
    <div>
      <div v-for="item in items" :key="item.text" class="ma-2 submenu">
        <v-card class="centrado" width="160" :to="item.text">
          <v-card-title class="blue-grey lighten-5 pa-1"><h3 v-text="item.text"></h3></v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-icon v-text="item.icon" style="font-size:64px"></v-icon>
          </v-card-text>
        </v-card>  
      </div>
    </div>    
  </v-app>
</template>

<script>
  export default {
    props:{
      items:Array,
    },
    data(){
      return {

      }
    },
    methods:{
      openThread:function(t){

      }
    }
  }
</script>
<style scoped>
  .submenu{cursor:pointer;display: inline-block;}
  .centrado{text-align: center;align-content: center;align-items: center}
  .submenu .centrado:hover{background: linear-gradient(to bottom,#ffffff00 0%,#0077ff50 100%)}
</style>

