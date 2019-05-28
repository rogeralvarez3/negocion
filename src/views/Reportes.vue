<template>
    <v-app>
        <submenu :items="items"></submenu>
    </v-app>
</template>

<script>
import submenu from "../components/submenu"
export default {
    components:{submenu},
    computed:{
        items:function(){return this.$store.state.menu[1].submenu},
        título:function(){return this.$store.state.menu[1].text.toUpperCase()}
    }
}
</script>
