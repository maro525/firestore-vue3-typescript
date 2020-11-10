<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}<button @click="deleteItem(item.id)">delete</button></li>
    </ul>
    <input type="text" v-model="newItem" />
    <button @click="addItem(newItem)">add</button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

import { useStateReactive } from '@/store'

/*
firestore-simple based
*/
export default defineComponent({
  name: 'ItemTable',
  setup() {

    const { items, ItemDoc } = useStateReactive()

    const newItem = ""

    const addItem = async (itemname: string) => {
      const newid = await ItemDoc.add({name: itemname, favorite: false, description: ''})
      console.log(newid)
    }

    const deleteItem = async (id: string) => {
      const deleteid = await ItemDoc.delete(id)
      console.log(deleteid)
    }

    return {
      newItem,
      items,
      addItem,
      deleteItem
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
