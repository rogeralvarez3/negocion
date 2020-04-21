<template>
  <v-app>
    <maestro-detalle título="facturación" :maestro="maestro" :detalle="detalle"></maestro-detalle>
  </v-app>
</template>

<script>
import maestroDetalle from "../components/maestro-detalle";
export default {
  components: { maestroDetalle },
  data() {
    return {
      maestro: {
        tabla: "ventas",
        campos: [
          { value: "cliente", text: "Cliente", width: 300 },
          {
            value: "tipo",
            text: "Tipo",
            control: {
              tipo: "select",
              items: [
                { value: 1, text: "Al contado" },
                { value: 2, text: "Al crédito" }
              ]
            },
            width: 150
          }
        ]
      },
      detalle: {
        tabla: "detalle de ventas",
        campos: [
          { value: "ventasId", text: "" },
          { value: "producto", text: "Producto" },
          { value: "cantidad", text: "Cantidad", align: "center" },
          { value: "precio", text: "Precio", align: "end" },
          { value: "subtotal", text: "Subtotal", align: "end" }
        ]
      }
    };
  }
};
</script>

<style>
</style>
