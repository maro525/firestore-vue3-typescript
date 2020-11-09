<template>
  <div>
    <ul>
      <li v-for="d in doc" :key="d.id">{{ d.data.content }}</li>
    </ul>
    <input type="text" v-model="newItem" />
    <button @click="addItem(newItem)">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useDoc } from '@/plugins/firebase-provider'
import { Todo, TodoDocKey } from '@/plugins/types';

/*
provider based
*/
export default defineComponent({
  name: 'TodoTable',
  props: {
    msg: String,
  },
  setup() {
    // const { doc, create }= useDoc(TodoDocKey)
    const doc: any[] = []

    const newItem = ""

    const addItem = () => {
      console.log('add item')
    }
    // const addItem = (_item: string) => {
    //   const item = {
    //     name: _item,
    //   }
    //   create(item)
    //     .then(() => console.log("succeeded"))
    //     .catch((err: unknown) => console.log(err))
    // }

    return {
      doc,
      newItem,
      addItem
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
