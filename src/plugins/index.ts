import Vue from "vue";
import Storage from "vue-ls";
import Auth from "@/core/directives/auth";
import { ApiPlugin } from "@/api/index";

import config from "@/core/config";
import "./ant-design-vue";
import "@/core/filters";
import "./axios";

Vue.use(Storage, config.storageOptions);
Vue.use(Auth);
Vue.use(ApiPlugin);
