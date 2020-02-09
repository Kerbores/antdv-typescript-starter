/**
 * @description Gitea Webhook Controller
 */
import webhook from "./webhook";

export class GiteaWebhookApi {
  constructor(
    public webhook: (
      giteaWebhook: apmp.GiteaWebhook,

      success?: ({
        data,
        ext,
        state,
        errors
      }: {
        data: void;
        ext: ObjectMap;
        state: "SUCCESS" | "FAIL" | "EXCEPTION";
        errors?: Array<string>;
      }) => any,
      fail?: (error: string) => any
    ) => void
  ) {}
}

export default {
  webhook
} as GiteaWebhookApi;
