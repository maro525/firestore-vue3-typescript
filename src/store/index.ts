import { Firestore } from '@/plugins/firebase'
import { FirestoreSimple } from '@firestore-simple/web'
import { QuerySnapshot } from '@firestore-simple/web/dist/types'
import { reactive, toRefs } from 'vue'

const firestoreSimple = new FirestoreSimple(Firestore)

export interface Item {
  id: string;
  name: string;
  favorite: boolean;
  description: string | null;
  itemId: string;
}

interface DocState {
  itemdoc: Item[];
  tododoc: Todo[];
}

export const state = reactive<DocState>({
  itemdoc: [],
  tododoc: []
})

export const ItemDoc = firestoreSimple.collection<Item>({ path: `items` })
ItemDoc.onSnapshot((QuerySnapshot, toObject) => {
  const document: Item[] = QuerySnapshot.docs.map((v) => {
    return v.data() as Item
  })
  state.itemdoc = document
  console.log(state.itemdoc)
})


export interface Todo {
  id: string;
  content: string;
  finished: boolean;
}

export const TodoDoc = firestoreSimple.collection<Todo>({ path: `todos` })