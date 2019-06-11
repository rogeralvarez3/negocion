<template>
    <v-app>
        <listar-editar :tabla="tabla" título="Clientes" :combos="{}"></listar-editar>
    </v-app>
</template>

<script>
import listarEditar from '../components/listar-editar'
export default {
    components:{listarEditar},
    computed:{
        tabla:function(){
            var result=this.$store.state.db.filter(t=>{return t.name==='clientes'})
            if(result.length>0){result=result[0]}else{result={}}
            //console.log(result)
            return result
        },
        
    }
}
</script>

<style>

</style>
