<template>
    <v-app>
        <v-card>
            <v-card-title class="grey lighten-4"><h2>{{título}}</h2><v-spacer></v-spacer><v-text-field v-model="buscar" label="Buscar..."></v-text-field></v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-tabs>
                    <v-tab>Lista</v-tab>
                    <v-tab>Edición</v-tab>
                    <v-tab-item>
                        <v-data-table :items="lista" :headers="headers">
                            <template v-slot:items="props">
                                <td v-for="(col,key) in headers" :key="key">
                                    {{props.item[key]}}
                                </td>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                    <v-card>
                        <v-card-text>
                            <table>
                                <tr v-for="(col,key) in headers" :key="key">
                                    <th>{{key}}:</th>
                                    <td>
                                        <input :type="col.tipo" v-model="selected[key]">
                                    </td>
                                </tr>
                            </table>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn>Editar&nbsp;<v-icon>fa fa-edit</v-icon></v-btn>
                            <v-btn>Guardar&nbsp;<v-icon>fa fa-save</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tabs>        
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import axios from 'axios'
import {api} from '../router'
export default {
    props:{
        tabla:String,
        condición:String,
        título:String,
        camposOcultos:Array
    },
    data(){
        return{
            buscar:'',
            lista:[]
        }
    },
    methods:{
        obtenerDatos:function(){
           var mv = this 
            axios.post(api,{tabla:tabla,condición:condición}).then(res=>{
                if(res.data.error){console.log(res.data.error)}
                else{mv.lista=res.data}
            })
        }
    },
    computed:{
        headers:function(){
            var result=[]
            if(lista.length>0){
                Object.keys(lista[0]).forEach(k=>{
                    if(camposOcultos.includes(k)) continue
                    result.push({value:k,text:k[0].toUpperCase()+k.substring(2,k.length-1).toLowerCase()})
                })
            }
            return result
        }
    },
    mounted:function(){
        this.obtenerDatos()
    }
}
</script>

<style>
    
</style>
