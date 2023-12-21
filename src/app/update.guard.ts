import { CanActivateFn } from '@angular/router';

export const updateGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem("permissions") != null && (localStorage.getItem("permissions")!.includes("can_update_users"))
};
