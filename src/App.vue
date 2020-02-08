<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

@Component({
  components: {}
})
export default class App extends Vue {
  public locale: any = zhCN;
  @Getter language?: string;

  @Getter("token") token?: string;

  @Watch("$route.path")
  routePathChange(val: any) {
    const isUserPage = val.indexOf("/user") == 0 || val.indexOf("/test") == 0;
    const token = this.token;
    if (!token && !isUserPage) {
      this.$router.push({ path: "/user" });
    }
  }
}
</script>
<style lang="less">
#app {
  height: 100%;
}
/**这个样式很奇特吧 */
.uuid_no_show {
  position: fixed;
  bottom: -10000px;
}
</style>
