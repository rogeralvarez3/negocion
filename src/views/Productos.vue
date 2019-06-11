<template>
    <v-app>
        <listar-editar :tabla="tabla" título="Productos" :combos="combos"></listar-editar>
    </v-app>
</template>

<script>
import listarEditar from '../components/listar-editar'
export default {
    components:{listarEditar},
    data(){
        return{
            combos:{
                Suspendido:{
                    items:[
                        {value:0,text:'No'},
                        {value:1,text:'Si'}
                    ],
                    width:'60px'
                }
            }
        }
    },
    computed:{
        tabla:function(){
            var result=this.$store.state.db.filter(t=>{return t.name==='productos'})
            if(result.length>0){result=result[0]}else{result={}}
            //console.log(result)
            return result
        }
        
    }
}
</script>

<style>

</style>
