<template>
    <v-app>
        <v-card width="800">
            <v-card-title class="blue-grey lighten-4"><h3>{{título}}</h3></v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div>
                    <v-text-field v-for="(item,key) in maestro" v-model="maestro[key]" :key="key" :label="key"></v-text-field>
                    <v-data-table :items="detalle" hide-actions :headers="headers_detalle">
                        <template v-slot:props="items">
                            <td v-for="(field,i) in headers_detalle" :key="i">{{props.item[field]}}</td>
                        </template>
                    </v-data-table>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn class="primary"><v-icon>fa fa-save</v-icon>&nbsp;guardar</v-btn>
                <v-btn class="primary"><v-icon>fa fa-print</v-icon>&nbsp;guardar e imprimir</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
export default {
    props:{
        título:String,
        maestro:Object,
        detalle:Array
    },
    data(){
        return{
            
        }
    },
    computed:{
        headers_detalle:function(){
            var mv=this
            if(mv.detalle.length===0){return[]}
            var result=[]
            Object.keys(mv.detalle[0]).forEach(k=>{result.push({value:k,text:k})})
            return result
        }
    }
}
</script>

<style>

</style>
