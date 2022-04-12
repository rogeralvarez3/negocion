<template>
  <v-app dark>
    <v-navigation-drawer dark clipped app></v-navigation-drawer>
    <v-app-bar app clipped-left dark> </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
