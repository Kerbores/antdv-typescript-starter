import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@/plugins";
import validators from "@/core/validators";
Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return { validators };
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
