<template>
  <div class="innerBlock">
    <div class="centered">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { initFirebase, provideDoc } from "@/plugins/firebase-provider";
import { firebaseConfig } from "@/plugins/config";

import { Todo, TodoDocKey } from '@/plugins/types'

export default defineComponent({
  name: "App",
  setup() {
    // initFirebase(firebaseConfig)
    // provideDoc<Todo>("todos", TodoDocKey)

    return {};
  },
});
</script>