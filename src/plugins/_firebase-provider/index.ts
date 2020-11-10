import { initializeFirebase } from './firebase'
import { firebaseConfigType } from '@/plugins/config-type'
import { provideAuth, useAuth } from './auth'
import { provideDoc, useDoc } from './doc'

export function initFirebase(config: firebaseConfigType): void {
  initializeFirebase(config)
  provideAuth()
}

export { useAuth, useDoc, provideDoc }