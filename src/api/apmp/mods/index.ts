import admin, { AdminApi } from "./admin";

import giteaWebhook, { GiteaWebhookApi } from "./giteaWebhook";

import user, { UserApi } from "./user";

export class ApmpApi {
  constructor(
    public admin: AdminApi,
    public giteaWebhook: GiteaWebhookApi,
    public user: UserApi
  ) {}
}

export default {
  admin,
  giteaWebhook,
  user
} as ApmpApi;
