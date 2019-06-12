<template>
    <v-app>
        <listar-editar :tabla="tabla" título="Productos" :combos="combos" v-on:save="guardar" v-on:delete="borrar"></listar-editar>
    </v-app>
</template>

<script>
import listarEditar from '../components/listar-editar'
import axios from 'axios'
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
        
    },
    methods:{
        guardar:function(evt,reg){
            var mv=this
            var url = mv.$store.state.api+"/save"
            axios.post(url,{tabla:'productos',registro:reg}).then(res=>{
                delete res.data.param
                mv.$swal(res.data)
            })
        },
        borrar: function(evt,id){
            var mv=this
            var url = mv.$store.state.api+"/delete"
            axios.post(url,{tabla:'productos',id:id}).then(res=>{
                delete res.data.param
                mv.$swal(res.data)
            })
        }
    }
}
</script>

<style>

</style>
