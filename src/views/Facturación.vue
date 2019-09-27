<template>
    <v-app>
        <maestro-detalle título="facturación" :maestro="maestro" :detalle="detalle"></maestro-detalle>
    </v-app>
</template>

<script>
import maestroDetalle from '../components/maestro-detalle'
export default {
    components:{maestroDetalle},
    data(){
        return{
            maestro:{Cliente:''},
            detalle:[
                {Producto:'',Cantidad:'',Precio:'',Subtotal:''}
            ]
        }
    }
}
</script>

<style>

</style>
