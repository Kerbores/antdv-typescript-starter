import { UserModule } from "@/store/modules/user";
export function getCurrentAuthority(): string[] {
  return UserModule.permissions;
}

export function isLogin(): boolean {
  return !!UserModule.jwtToken;
}
export function check(authority: string): boolean {
  if (!isLogin()) return false;
  if (!authority || authority == null) return true;
  return getCurrentAuthority().filter(p => p === authority).length > 0;
}
