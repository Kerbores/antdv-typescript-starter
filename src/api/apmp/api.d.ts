declare namespace apmp {
  export class GiteaWebhook {
    /** name */
    name?: string;
  }

  export class Organization {
    /** avatarUrl */
    avatarUrl?: string;

    /** description */
    description?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** location */
    location?: string;

    /** repoAdminChangeTeamAccess */
    repoAdminChangeTeamAccess?: boolean;

    /** username */
    username?: string;

    /** visibility */
    visibility?: string;

    /** website */
    website?: string;
  }

  export class Result<T0 = any> {
    /** 响应数据 */
    data: T0;

    /** 错误信息列表 */
    errors?: Array<string>;

    /** 响应扩展数据 */
    ext?: ObjectMap<any, object>;

    /** 响应状态 */
    state: "SUCCESS" | "FAIL" | "EXCEPTION";

    /** success */
    success?: boolean;
  }

  export class UserWithToken {
    /** admin */
    admin?: boolean;

    /** avatarUrl */
    avatarUrl?: string;

    /** created */
    created?: string;

    /** email */
    email?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** jwtToken */
    jwtToken?: string;

    /** language */
    language?: string;

    /** lastLogin */
    lastLogin?: string;

    /** token */
    token?: string;

    /** userName */
    userName?: string;
  }
}
