/* eslint-disable @typescript-eslint/no-explicit-any */
import { PluginObject } from "vue";
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import settings from "@/core/config";
import store from "@/store";
import { notification } from "ant-design-vue";
import enUS from "@/locale/enUS";
import zhCN from "@/locale/zhCN";
import { AppModule } from "../store/modules/app";

const lan = AppModule.language;
const errorTitle =
  lan === "enUS" ? enUS.global.http.error : zhCN.global.http.error;
const forbidden =
  lan === "enUS" ? enUS.global.http.forbidden : zhCN.global.http.forbidden;
const notFount =
  lan === "enUS" ? enUS.global.http.notFount : zhCN.global.http.notFount;
const configError =
  lan === "enUS" ? enUS.global.http.configError : zhCN.global.http.configError;
export function defaultSuccess(data: any) {
  console.log(data);
}
export function defaultError(error: string) {
  notification.error({
    message: errorTitle,
    description: error
  });
}
export function msgAndLogout(msg: string) {
  console.log(msg);
}

const config = {
  baseURL: settings.http.prefix,
  timeout: settings.http.timeout
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  (cfg: AxiosRequestConfig) => {
    const token = store && store.getters.token;
    if (token) {
      cfg.headers.Authorization = token;
    }
    return cfg;
  },
  (err: any) => {
    console.warn(err);
    return Promise.reject(configError);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response: any) => {
    console.log(response);
    if (response.data.state == "SUCCESS") {
      //数据成功
      return Promise.resolve(response.data);
    } else {
      //数据失败直接reject
      return Promise.reject(response.data.errors[0]);
    }
  },
  (error: any) => {
    switch (error.response.status) {
      case 403 | 401:
        msgAndLogout(forbidden);
        break;
      case 404:
        return Promise.reject(notFount);
      case 500:
        return Promise.reject(error.response.data.errors[0]);
      default:
        return Promise.reject(error.response.data.msg[0]);
    }
  }
);

const Plugin: PluginObject<AxiosInstance> = {
  install: Vue => {
    Object.defineProperties(Vue.prototype, {
      $axios: {
        get() {
          return _axios;
        }
      }
    });
  }
};

export { _axios as http, Plugin as axiosPlugin };
