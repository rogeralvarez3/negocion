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
        items:function(){return this.$store.state.menu[2].submenu},
    }
}
</script>
