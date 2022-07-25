import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(route, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const ok = (yield this.auth.isAuthenticated()) && this.isValidRole(route);
            if (!ok)
                this.auth.loginRedirect();
            return ok;
        });
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    isValidRole(route) {
        const { role } = this.auth.user;
        const { roles } = route.data;
        return role && (!roles || roles.includes(role));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.AuthService)); };
AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJDOi9zb3VyY2UvTUZFL3BlY29zLXVpLWNvcmUtbWFzdGVyL3BlY29zLXVpLWNvcmUtbWFzdGVyL3NyYy9saWIvIiwic291cmNlcyI6WyJhdXRoL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVUzQyxNQUFNLE9BQU8sU0FBUztJQUNwQixZQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUcsQ0FBQztJQUVuQyxXQUFXLENBQUMsS0FBNkIsRUFBRSxLQUEwQjs7WUFDekUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUE2QjtRQUN2QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7a0VBakJVLFNBQVM7aURBQVQsU0FBUyxXQUFULFNBQVM7a0RBQVQsU0FBUztjQURyQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIENhbkFjdGl2YXRlQ2hpbGQsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge31cblxuICBhc3luYyBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBjb25zdCBvayA9IChhd2FpdCB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCkpICYmIHRoaXMuaXNWYWxpZFJvbGUocm91dGUpO1xuICAgIGlmICghb2spIHRoaXMuYXV0aC5sb2dpblJlZGlyZWN0KCk7XG4gICAgcmV0dXJuIG9rO1xuICB9XG5cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpO1xuICB9XG5cbiAgaXNWYWxpZFJvbGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBjb25zdCB7IHJvbGUgfSA9IHRoaXMuYXV0aC51c2VyO1xuICAgIGNvbnN0IHsgcm9sZXMgfSA9IHJvdXRlLmRhdGE7XG4gICAgcmV0dXJuIHJvbGUgJiYgKCFyb2xlcyB8fCByb2xlcy5pbmNsdWRlcyhyb2xlKSk7XG4gIH1cbn1cbiJdfQ==