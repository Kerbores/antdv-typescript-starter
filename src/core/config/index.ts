export default {
  primaryColor: "#1890FF", // primary color of ant design
  navTheme: "dark", // theme for nav menu
  layoutMode: "sidemenu", // nav menu position: sidemenu or topmenu
  contentWidth: "Fixed", // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  autoHideHeader: false, //  auto hide header
  colorWeak: false,
  multiTab: false,
  language: "zhCN",
  name: "antdv typescript starter",
  title: "ATS(antdv typescript starter)",
  description: "基于typescript 开发 ant design vue 应用的一键启动器",
  copyright: "Copyright &copy;  ats.kerbores.com",
  storageOptions: {
    namespace: "ats__", // key prefix
    name: "ls", // name variable Vue.[ls] or this.[$ls],
    storage: "local" // storage name session, local, memory
  },
  http: {
    prefix: process.env.NODE_ENV === "production" ? "/" : "/api",
    timeout: 60 * 1000
  }
};
