<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3';
import { ref } from 'vue';

const rowData = ref([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { field: "URL" },
  { field: "Name" },
  { field: "FTP URL" },
  { field: "Port" },
  { field: "Username" },
  { field: "Actions" }
]);
</script>

<template>
  <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px">
  </ag-grid-vue>
</template>

<style scoped>
.container {}
</style>
