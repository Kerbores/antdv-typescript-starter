/**
 * @description User Controller
 */
import login, { LoginParams } from "./login";

export class UserApi {
  constructor(
    public login: (
      params: LoginParams,
      success?: ({
        data,
        ext,
        state,
        errors
      }: {
        data: apmp.UserWithToken;
        ext: ObjectMap;
        state: "SUCCESS" | "FAIL" | "EXCEPTION";
        errors?: Array<string>;
      }) => any,
      fail?: (error: string) => any
    ) => void
  ) {}
}

export default {
  login
} as UserApi;
