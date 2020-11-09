<template>
  <h1>Provider</h1>
  <TodoTable />
  <h1>Firestore Simple</h1>
  <ItemTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoTable from "@/components/TodoTable.vue";
import ItemTable from "@/components/ItemTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    ItemTable,
    TodoTable
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>