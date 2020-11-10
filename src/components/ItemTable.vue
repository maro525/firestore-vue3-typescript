<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <input type="text" v-model="newItem" />
    <button @click="add(newItem)">add</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue';

import { Item, useStateReactive } from '@/store'

/*
firestore-simple based
*/
export default defineComponent({
  name: 'ItemTable',
  setup() {

    const { items, ItemDoc } = useStateReactive()

    const newItem = ""

    const check = (itemname: string) => {
      console.log("add")
    }

    return {
      newItem,
      items,
      check
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
