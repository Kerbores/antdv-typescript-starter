/**
 * @desc organizations
 */

import { defaultSuccess, defaultError, http } from "@/plugins/axios";

export default async function(
  success: ({
    data,
    ext,
    state,
    errors
  }: {
    data: Array<apmp.Organization>;
    ext: ObjectMap;
    state: "SUCCESS" | "FAIL" | "EXCEPTION";
    errors?: Array<string>;
  }) => any = defaultSuccess,
  fail: (error: string) => any = defaultError
) {
  try {
    const data: any = await http({
      method: "get",
      url: `/admin/orgs`
    });
    return success(data);
  } catch (error) {
    return fail(error);
  }
}
