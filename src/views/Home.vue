<template>
  <p>test</p>
  <TodoTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoTable from "@/components/TodoTable.vue";

export default defineComponent({
  name: "Home",
  components: {
    TodoTable,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>