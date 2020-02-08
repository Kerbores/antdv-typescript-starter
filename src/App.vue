<template>
  <a-locale-provider :locale="zhCN">
    <div id="app">
      <img src="./assets/logo.png" />
      <div>
        <p>
          If Ant-Design-Vue is successfully added to this project, you'll see an
          <code v-text="'<a-button>'"></code>
          <code v-text="'<a-pagination>'"></code>
          below
        </p>
        <a-button type="primary">Primary</a-button>
        <a-pagination
          size="small"
          :total="50"
          show-size-changer
          show-quick-jumper
        />
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      zhCN
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
