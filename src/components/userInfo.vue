<template>
  <v-card>
    <v-card-title class="grey lighten-4 pa-0 pr-2 pl-2"
      >Información del usuario</v-card-title
    >
    <v-divider></v-divider>
    <v-card-text>
      <v-simple-table dense>
        <tbody>
          <tr>
            <td colspan="2">
              <img
                :src="`./uploads/usuarios/${user.name}.jpg`"
                alt=""
                width="100%"
                height="100"
              />
            </td>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{{ user.téfono }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
    <v-card-actions>
      <v-btn>Cerrar sesión</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      email: null,
      teléfono: null,
    },
  }),
};
</script>
