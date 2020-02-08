import Vue from "vue";
import Storage from "vue-ls";
import config from "@/core/config";
import "./ant-design-vue";

Vue.use(Storage, config.storageOptions);
