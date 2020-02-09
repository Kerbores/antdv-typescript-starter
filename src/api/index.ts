import { PluginObject } from "vue";

export interface Api {
  name: string;
}

export const ApiPlugin: PluginObject<Api> = {
  install: Vue => {
    Object.defineProperties(Vue.prototype, {
      $api: {
        get() {
          return {
            name: "api"
          };
        }
      }
    });
  }
};
