import Vue from "vue";
import Storage from "vue-ls";
import config from "@/core/config";
import "./ant-design-vue";
import "@/core/filters";
Vue.use(Storage, config.storageOptions);
