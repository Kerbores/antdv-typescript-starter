import { PluginObject } from "vue";

import { default as apmpApi, ApmpApi } from "./apmp/mods";

export interface Api {
  apmpApi: ApmpApi;
}

export const ApiPlugin: PluginObject<Api> = {
  install: Vue => {
    Object.defineProperties(Vue.prototype, {
      $api: {
        get() {
          return {
            apmpApi
          };
        }
      }
    });
  }
};
