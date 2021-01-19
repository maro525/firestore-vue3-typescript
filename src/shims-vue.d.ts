declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent
  export default component;
}

declare module "vuex" {
  function useStore<T = any>(key?: string): T
}

declare module '*.svg' {
  import Vue, {VueConstructor} from 'vue';
  const content: vueConstructor<Vue>
  export default content;
}