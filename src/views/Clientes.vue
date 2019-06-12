<template>
    <v-app>
        <listar-editar :tabla="tabla" título="Clientes" :combos="{}" @save="guardar" @delete="borrar"></listar-editar>
    </v-app>
</template>

<script>
import listarEditar from '../components/listar-editar'
import axios from 'axios'
export default {
    components:{listarEditar},
    computed:{
        tabla:function(){
            var result=this.$store.state.db.filter(t=>{return t.name==='clientes'})
            if(result.length>0){result=result[0]}else{result={}}
            //console.log(result)
            return result
        }
    },
    methods:{
        guardar:function(evt,reg){
            var mv=this
            var url = mv.$store.state.api+"/save"
            axios.post(url,{tabla:'clientes',registro:reg}).then(res=>{
                delete res.data.param
                mv.$swal(res.data)
            })
        },
        borrar: function(evt,id){
            var mv=this
            var url = mv.$store.state.api+"/delete"
            axios.post(url,{tabla:'clientes',id:id}).then(res=>{
                delete res.data.param
                mv.$swal(res.data)
            })
        }
    }
}
</script>

<style>

</style>
