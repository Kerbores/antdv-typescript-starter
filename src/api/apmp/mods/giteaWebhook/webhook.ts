/**
 * @desc webhook
 */

import { defaultSuccess, defaultError, http } from "@/plugins/axios";

export default async function(
  giteaWebhook: apmp.GiteaWebhook,

  success: ({
    data,
    ext,
    state,
    errors
  }: {
    data: void;
    ext: ObjectMap;
    state: "SUCCESS" | "FAIL" | "EXCEPTION";
    errors?: Array<string>;
  }) => any = defaultSuccess,
  fail: (error: string) => any = defaultError
) {
  try {
    const data: any = await http({
      method: "post",
      url: `/gitea/webhook`,
      data: giteaWebhook
    });
    return success(data);
  } catch (error) {
    return fail(error);
  }
}
