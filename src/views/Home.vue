<template>
  <h1>Firestore Simple</h1>
  <ItemTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ItemTable from "@/components/ItemTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    ItemTable,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>