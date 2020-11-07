import 'firebase/auth'
import * as Firebase from 'firebase/app';
import { reactive, provide, inject, toRefs } from 'vue'

const AuthKey = Symbol('FirebaseAuth')

export function useAuth() {
  const result = inject(AuthKey)

  if (!result) {
    throw new Error('No Auth provided')
  }

  return result
}

export function provideAuth() {

  const state = reactive({
    loading: true,
    signingIn: false,
    uid: null,
    user: null,
  })

  async function setUser(user: any) {
    state.user = user
    state.uid = user ? user.uid : null
    state.loading = false
    state.signingIn = false
  }

  async function signOut() {
    await Firebase.auth().signOut()
    setUser(null)
  }

  async function signInWithEmailLink(link: string) {
    state.signingIn = true

    const email = ''
    if (!email) {
      console.log('email is missing')
    }

    await Firebase.auth().signInWithEmailLink(email, link)
  }

  Firebase.auth().onAuthStateChanged(setUser) 

  if (Firebase.auth().isSignInWithEmailLink(window.location.href)) {
    signInWithEmailLink(window.location.href)
  }

  provide(AuthKey, {
    ...toRefs(state),
    signOut,
    signInWithEmailLink
  })
}