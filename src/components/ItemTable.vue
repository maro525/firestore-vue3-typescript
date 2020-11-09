<template>
  <div>
    <p>item list</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <input type="text" v-model="newItem" />
  </div>
  <p>footer</p>
</template>


<script lang="ts">
import { defineComponent, watchEffect } from 'vue';

import { Item, ItemDoc, state} from '@/store'

/*
firestore-simple based
*/
export default defineComponent({
  name: 'ItemTable',
  props: {
    msg: String,
  },
  async setup() {

    const items = watchEffect(() => state.itemdoc)

    const newItem = ""

    return {
      newItem,
      items
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
