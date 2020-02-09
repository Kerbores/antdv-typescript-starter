/**
 * @description Admin Controller
 */
import organizations from "./organizations";

export class AdminApi {
  constructor(
    public organizations: (
      success?: ({
        data,
        ext,
        state,
        errors
      }: {
        data: Array<apmp.Organization>;
        ext: ObjectMap;
        state: "SUCCESS" | "FAIL" | "EXCEPTION";
        errors?: Array<string>;
      }) => any,
      fail?: (error: string) => any
    ) => void
  ) {}
}

export default {
  organizations
} as AdminApi;
