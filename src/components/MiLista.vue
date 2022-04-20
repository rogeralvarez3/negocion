<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab>
        <v-tab-title>Lista</v-tab-title>
      </v-tab>
      <v-tab>
        <v-tab-title>Nuevo</v-tab-title>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-simple-table>
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
            </tr>
          </thead>
        </v-simple-table>
      </v-tab-item>
      <v-tab-item>
        <h1>Nuevo</h1>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script>
export default {
  name: "mi-lista",
  props: {
    title: String,
    data: Array,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
