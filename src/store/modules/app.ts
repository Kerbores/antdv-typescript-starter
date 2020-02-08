import Vue from "vue";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface AppState {
  navTheme: string;
  primaryColor: string;
  sidebar: boolean;
  layoutMode: string;
  contentWidth: string;
  fixedHeader: boolean;
  fixSiderbar: boolean;
  autoHideHeader: boolean;
  colorWeak: boolean;
  multiTab: boolean;
  language: string;
  title: string;
  description: string;
  uuid: string;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements AppState {
  public sidebar = true;
  public navTheme = "dark";
  public primaryColor = "";
  public layoutMode = "";
  public contentWidth = "";
  public colorWeak = false;
  public fixedHeader = false;
  public autoHideHeader = false;
  public fixSiderbar = false;
  public multiTab = true;
  public language = "zhCN";
  public title = "";
  public description = "";
  public copyright = "";
  public uuid = "";
}
export const AppModule = getModule(App);
