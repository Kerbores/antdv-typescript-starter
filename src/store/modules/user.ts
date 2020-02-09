import Vue from "vue";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import * as types from "@/store/mutation-types";

export interface UserState {
  avatarUrl: string;

  created: string;

  email: string;

  fullName: string;

  id: number;

  jwtToken: string;

  lastLogin: string;

  userName: string;

  roles: Array<string>;

  permissions: Array<string>;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  public avatarUrl = "";
  public created = "";
  public email = "";
  public fullName = "";
  public id = 0;
  public jwtToken = "";
  public lastLogin = "";
  public userName = "";
  public roles: Array<string> = [];
  public permissions: Array<string> = [];

  @Mutation
  public login(user: UserState) {
    Vue.ls.set(types.LOGIN_USER, user);
    Object.assign(this, user);
  }

  @Mutation
  public logout() {
    this.jwtToken = "";
  }
  @Action
  public hasRole(role: string) {
    if (!role || role == null) return true;
    return this.roles.filter(r => r === role).length > 0;
  }
  @Action
  public hasPermission(permission: string) {
    if (!permission || permission == null) return true;
    return this.permissions.filter(p => p === permission).length > 0;
  }
}

export const UserModule = getModule(User);
