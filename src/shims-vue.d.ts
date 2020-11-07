declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent
  export default component;
}

declare module "vuex" {
  function useStore<T = any>(key?: string): T
}

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}