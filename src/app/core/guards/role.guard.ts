import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: 'root' })
// CanActivate, which is the interface Angular uses to decide if a route can be activated.
export class RoleGuard implements CanActivate {
  constructor(private userSession: UserSessionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.userSession.getUserRole();

    console.log("user Role: ", userRole);

    if (userRole === expectedRole) {
      return true;
    }

    this.router.navigate(['/not-authorized']);
    return false;
  }
}
