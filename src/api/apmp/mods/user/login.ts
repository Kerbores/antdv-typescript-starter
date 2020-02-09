/**
 * @desc login
 */

import { defaultSuccess, defaultError, http } from "@/plugins/axios";

export class LoginParams {
  constructor(public password: string, public user: string) {}
}

export default async function(
  params: LoginParams,
  success: ({
    data,
    ext,
    state,
    errors
  }: {
    data: apmp.UserWithToken;
    ext: ObjectMap;
    state: "SUCCESS" | "FAIL" | "EXCEPTION";
    errors?: Array<string>;
  }) => any = defaultSuccess,
  fail: (error: string) => any = defaultError
) {
  try {
    const data: any = await http({
      method: "post",
      url: `/user/auth`,

      params
    });
    return success(data);
  } catch (error) {
    return fail(error);
  }
}
