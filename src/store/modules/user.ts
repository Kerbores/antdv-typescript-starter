import Vue from "vue";

import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface UserState {
  /** admin */
  admin: boolean;

  /** avatarUrl */
  avatarUrl: string;

  /** created */
  created: string;

  /** email */
  email: string;

  /** fullName */
  fullName: string;

  /** id */
  id: number;

  /** jwtToken */
  jwtToken: string;

  /** language */
  language: string;

  /** lastLogin */
  lastLogin: string;

  /** token */
  token: string;

  /** userName */
  userName: string;

  roles: Array<string>;
  permissions: Array<string>;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  public admin = false;
  public avatarUrl = "";
  public created = "";
  public email = "";
  public fullName = "";
  public id = 0;
  public jwtToken = "";
  public language = "";
  public lastLogin = "";
  public token = "";
  public userName = "";
  public roles: Array<string> = [];
  public permissions: Array<string> = [];

  @Mutation
  public login(user: IUserState) {
    Object.assign(this, user);
  }

  @Mutation
  public logout() {
    this.token = "";
  }

  @Action
  public isAdmin() {
    return this.admin;
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
