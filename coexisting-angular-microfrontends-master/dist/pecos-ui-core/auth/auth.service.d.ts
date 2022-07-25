import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { DataService } from '../services/data.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private dataService;
    private oktaAuth;
    private router;
    private _activityId;
    private _state;
    readonly state: import("rxjs").Observable<boolean>;
    private _storageKey;
    private _waitForState;
    get cache(): any;
    set cache(value: any);
    private _user;
    get user(): any;
    constructor(dataService: DataService, oktaAuth: OktaAuthService, router: Router);
    private authAPI;
    isAuthenticated(): Promise<unknown>;
    loginRedirect(): void;
    login(o?: any): Promise<void>;
    logout(): Promise<void>;
    onOktaAuthStateChange(isAuthenticated: boolean): Promise<void>;
    onProviderStateChange(isAuthenticated: boolean): Promise<void>;
    setAuthHeaders(isOktaAuthenticated?: boolean): Promise<void>;
    updateActivity(login: boolean): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map