import * as Firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfigType } from '@/plugins/config-type'

export let firestore: Firebase.firestore.Firestore | null = null 

export function initializeFirebase(options: firebaseConfigType): void {
  if (Firebase.apps.length > 0) {
    return
  }

  Firebase.initializeApp(options)

  Firebase
    .firestore()
    .enablePersistence()
    .catch((err) => {
      if (err.code === 'failed-precondition'){
        throw new Error(
          'multiple tabs open, persistence can only be enabled in one tab at a time.'
        )
      } else if (err.code === 'unimplemented') {
        throw new Error(
          'The current browser does not support all of the features required to enable persistence.'
        )
      }
    })

  firestore = Firebase.firestore()
}