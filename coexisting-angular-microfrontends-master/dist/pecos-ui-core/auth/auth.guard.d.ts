import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate, CanActivateChild {
    private auth;
    constructor(auth: AuthService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>;
    isValidRole(route: ActivatedRouteSnapshot): any;
    static ɵfac: i0.ɵɵFactoryDef<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthGuard>;
}
//# sourceMappingURL=auth.guard.d.ts.map