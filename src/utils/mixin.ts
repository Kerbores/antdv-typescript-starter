import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";

@Component
class Mixin extends Vue {
  public AppModule = AppModule;
  public UserModule = UserModule;
  public isTopMenu() {
    return AppModule.layoutMode === "topmenu";
  }
  public isSideMenu() {
    return !this.isTopMenu();
  }
}

export { Mixin };
