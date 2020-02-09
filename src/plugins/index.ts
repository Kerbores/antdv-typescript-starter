import Vue from "vue";
import Storage from "vue-ls";
import config from "@/core/config";
import "./ant-design-vue";
import "@/core/filters";
import Auth from "@/core/directives/auth";

Vue.use(Storage, config.storageOptions);
Vue.use(Auth);
