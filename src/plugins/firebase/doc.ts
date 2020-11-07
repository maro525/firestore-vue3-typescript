import { provide, inject, reactive, toRefs } from 'vue'
import { firestore } from './firebase'
import * as Firebase from 'firebase/app';

interface Doc {
  data: object;
  id: string;
}

interface DocState {
  loading: boolean;
  exists: boolean;
  saving: boolean;
  id: string | null;
  doc: any[];
}

export function useDoc(key: symbol): any {
  const result = inject(key)

  if (!result) {
    throw new Error("No doc provider")
  }

  return result
}


export function provideDoc<T>(name: string, key: symbol) {

  const state = reactive<DocState>({
    loading: false,
    exists: false,
    saving: false,
    id: null,
    doc: []
  })

  const collection = firestore.collection(name)

  function sync(): void {
    state.loading = true;
    collection.onSnapshot((snapshot: Firebase.firestore.QuerySnapshot) => {

      const document: Array<Doc> = snapshot.docs.map((v: Firebase.firestore.QueryDocumentSnapshot) => {
        return {data: v.data(), id: v.id}
      })

      state.loading = false

      state.doc = document
    })
  }

  async function create(item: T): Promise<any> {
    state.saving = true
    const PromiseObj = await collection.doc().set(item)
    state.saving = false
    return PromiseObj
  }

  sync();

  provide(key, {
    ...toRefs(state),
    sync,
    create
  })
}