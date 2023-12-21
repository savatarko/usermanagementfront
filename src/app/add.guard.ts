import { CanActivateFn } from '@angular/router';

export const addGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem("permissions") != null && (localStorage.getItem("permissions")!.includes("can_create_users"))
};
