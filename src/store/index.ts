import { Firestore } from '@/plugins/firebase'
import { FirestoreSimple } from '@firestore-simple/web'
import { reactive, toRefs } from 'vue'

const firestoreSimple = new FirestoreSimple(Firestore)


// interfaces
export interface Item {
  id: string;
  name: string;
  favorite: boolean;
  description: string | null;
}


export interface Todo {
  id: string;
  content: string;
  finished: boolean;
}

interface ReactiveState{
  items: Item[];
  todos: Todo[];
}

/*
main store function
*/
  
const state = reactive<ReactiveState>({
  items: [],
  todos: []
})

  // item doc sync
<<<<<<< HEAD
export const ItemDoc = firestoreSimple.collection<Item>({ path: `items` })
ItemDoc.onSnapshot((QuerySnapshot) => {
  state.items = QuerySnapshot.docs.map(v => {
    return {
      ...v.data(),
      id: v.id
   } as Item;
=======
  const ItemDoc = firestoreSimple.collection<Item>({ path: `items` })
  ItemDoc.onSnapshot((QuerySnapshot) => {
    state.items = QuerySnapshot.docs.map(v => {
      return {
        ...v.data(),
        id: v.id
      } as Item
    })
>>>>>>> 4df4e5959510cee5e4f361fc1b659b3d9d8213c4
  })
  console.log(state.items.length)
});

<<<<<<< HEAD
// todo doc sync
export const TodoDoc = firestoreSimple.collection<Todo>({ path: `todos` })
TodoDoc.onSnapshot((QuerySnapshot) => {
  state.todos = QuerySnapshot.docs.map(v => v.data() as Todo)
})
=======
  // todo doc sync
  const TodoDoc = firestoreSimple.collection<Todo>({ path: `todos` })
  TodoDoc.onSnapshot((QuerySnapshot) => {
    state.todos = QuerySnapshot.docs.map(v => {
      return {
        ...v.data(),
        id: v.id
      } as Todo
    })
  })
>>>>>>> 4df4e5959510cee5e4f361fc1b659b3d9d8213c4

export function useFirestore() {
  return {
    ...toRefs(state),
  }
}