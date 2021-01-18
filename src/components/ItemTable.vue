<template>
  <div class="items">
    <div class="row" id="tableHeader">
      <span class="name">name</span>
      <span class="description">description</span>
      <span class="favorite">favorite</span>
      <span class="deleteBtn">delete</span>
    </div>
    <div v-for="item in items" class="row" :key="item.id">
      <span class="name">{{ item.name }}</span>
      <span class="description">{{ item.description }}</span>
      <span class="favorite">{{ item.favorite }}</span>
      <span class="deleteBtn"><button @click="deleteItem(item.id)">delete</button></span>
    </div>
    <div class="row">
      <span class="name"><input type="text" v-model="newItemName" /></span>
      <span class="description"><input type="text" v-model="newItemDescription" /></span>
      <span class="favorite"><input type="checkbox" v-model="newItemFavorite" /></span>
      <span class="deleteBtn"><button @click="addItem()">add</button></span>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

<<<<<<< HEAD
import { useFirestore, ItemDoc  } from '@/store'
=======
import { useStateReactive } from "@/store";
>>>>>>> 4df4e5959510cee5e4f361fc1b659b3d9d8213c4

/*
firestore-simple based
*/
export default defineComponent({
  name: "ItemTable",
  setup() {
    const { items, ItemDoc } = useStateReactive();

<<<<<<< HEAD
    const { items } = useFirestore()
=======
    const state = reactive({
      newItemName: "",
      newItemDescription: "",
      newItemFavorite: false
    })
>>>>>>> 4df4e5959510cee5e4f361fc1b659b3d9d8213c4

    const addItem = async () => {
      const newid = await ItemDoc.add({
        name: state.newItemName,
        favorite: state.newItemFavorite,
        description: state.newItemDescription 
      });
      console.log(newid);
      state.newItemName = ""
      state.newItemFavorite = false;
      state.newItemDescription = "";
    };

    const deleteItem = async (id: string) => {
      const deleteid = await ItemDoc.delete(id);
      console.log(deleteid);
    };

    return {
      ...toRefs(state),
      items,
      addItem,
      deleteItem,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  #tableHeader {
    background-color: #b2b1be;
    font-weight: 600;
  }

  .row {
    display: flex;
    padding: 10px;
    border-top: 1px solid #b1b0b9;

    .name {
      width: 25%;
    }

    .description {
      width: 45%;
    }

    .favorite { 
      width: 15%;
    }

    .deleteBtn {
      width: 15%;
    }
  }
}
</style>
