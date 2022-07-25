import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/data.service";
import * as i2 from "@okta/okta-angular";
import * as i3 from "@angular/router";
export class AuthService {
    constructor(dataService, oktaAuth, router) {
        this.dataService = dataService;
        this.oktaAuth = oktaAuth;
        this.router = router;
        this._activityId = '';
        this._state = new BehaviorSubject(false);
        this.state = this._state.asObservable();
        this._storageKey = 'pecos-cache';
        this._waitForState = false;
        this._user = this.cache;
        if (this.user.role) {
            this._waitForState = true;
            this.onProviderStateChange(true);
        }
        this.oktaAuth.$authenticationState.subscribe((value) => {
            this.onOktaAuthStateChange(value);
        });
    }
    get cache() {
        return JSON.parse(localStorage.getItem(this._storageKey) || '{}');
    }
    set cache(value) {
        localStorage.setItem(this._storageKey, JSON.stringify(value));
    }
    get user() {
        return this._user;
    }
    authAPI(path = '', data) {
        return this.dataService.api(`/authentication/${path}`, data).toPromise();
    }
    isAuthenticated() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._waitForState) {
                return new Promise((resolve) => {
                    const tick = () => {
                        if (!this._waitForState)
                            resolve(this._state.getValue());
                        setTimeout(tick, 100);
                    };
                    tick();
                });
            }
            else {
                return this._state.getValue() || (yield this.oktaAuth.isAuthenticated());
            }
        });
    }
    loginRedirect() {
        window.location.href = '/login';
    }
    login(o = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let { cookieId, role, token, username } = o;
            if (!role)
                role = /^p/.test(username) ? 'Provider' : 'CMS';
            this.cache = { role, token, username, cookieId };
            this._user = { role, username };
            yield this.onProviderStateChange(true);
            this.router.navigateByUrl('/');
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            this._user = {};
            localStorage.removeItem(this._storageKey);
            if (yield this.oktaAuth.isAuthenticated()) {
                yield this.onOktaAuthStateChange(false);
                this.oktaAuth.signOut().catch(console.error);
            }
            else {
                yield this.onProviderStateChange(false);
                this.loginRedirect();
            }
        });
    }
    onOktaAuthStateChange(isAuthenticated) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isAuthenticated) {
                yield this.setAuthHeaders(true);
                this._user.role = 'CMS';
                const info = yield this.oktaAuth.getUser();
                Object.assign(this._user, {
                    firstName: info.given_name,
                    lastName: info.family_name,
                    username: info.name,
                    info,
                });
                this._state.next(true);
                this.updateActivity(true);
            }
            else if (!this.cache.role) {
                this.updateActivity(false);
                yield this.setAuthHeaders(false);
                this._user = {};
                this._state.next(false);
            }
        });
    }
    onProviderStateChange(isAuthenticated) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isAuthenticated) {
                yield this.setAuthHeaders();
                const info = yield this.authAPI('loggedInUserDetails');
                const { firstName, lastName, username } = info;
                Object.assign(this._user, { firstName, lastName, username, info });
                this._state.next(true);
                this._waitForState = false;
                this.updateActivity(true);
            }
            else {
                this.updateActivity(false);
                yield this.setAuthHeaders();
                this._state.next(false);
            }
        });
    }
    setAuthHeaders(isOktaAuthenticated) {
        return __awaiter(this, void 0, void 0, function* () {
            const { headers } = this.dataService;
            delete headers.Authorization;
            delete headers.PecosTokenType;
            const { role, token, username } = this.cache;
            switch (role) {
                case 'Provider':
                    if (token) {
                        headers.Authorization = `Bearer ${token.access_token}`;
                        headers.PecosTokenType = 'PROVIDER_AUTH_TOKEN';
                    }
                    else {
                        headers.Authorization = username;
                        headers.PecosTokenType = 'FAKE_PROVIDER_AUTH_TOKEN';
                    }
                    break;
                case 'CMS':
                    headers.Authorization = 'CMS';
                    headers.PecosTokenType = 'FAKE_MAC_AUTH_TOKEN';
                    break;
                default:
                    if (isOktaAuthenticated) {
                        const idToken = yield this.oktaAuth.tokenManager.get('idToken');
                        headers.Authorization = `Bearer ${idToken.value}`;
                        headers.PecosTokenType = 'MAC_AUTH_TOKEN';
                    }
            }
        });
    }
    updateActivity(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this._activityId;
            try {
                if (login) {
                    this._activityId = yield this.authAPI('loginActivity', {});
                }
                else if (id) {
                    yield this.authAPI(`logoutActivity?activityLogId=${id}`, {});
                }
            }
            catch (error) { }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.DataService), i0.ɵɵinject(i2.OktaAuthService), i0.ɵɵinject(i3.Router)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.DataService }, { type: i2.OktaAuthService }, { type: i3.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBS3ZDLE1BQU0sT0FBTyxXQUFXO0lBbUJ0QixZQUNVLFdBQXdCLEVBQ3hCLFFBQXlCLEVBQ3pCLE1BQWM7UUFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckJoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFTdEIsVUFBSyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUM7UUFVOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4QkQsSUFBSSxLQUFL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QUFLLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxtQkFBbUIsRUFBRTt3QkFDdkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2hFLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBVSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2xELE9BQU8sQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7cUJBQzNDO2FBQ0o7UUFDSCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYzs7WUFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM1QixJQUFJO2dCQUNGLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFTLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDcEU7cUJBQU0sSUFBSSxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtZQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7UUFDcEIsQ0FBQztLQUFBOztzRUF0SlUsV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVyxtQkFERSxNQUFNO2tEQUNuQixXQUFXO2NBRHZCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPa3RhQXV0aFNlcnZpY2UgfSBmcm9tICdAb2t0YS9va3RhLWFuZ3VsYXInO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfYWN0aXZpdHlJZCA9ICcnO1xuICBwcml2YXRlIF9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICByZWFkb25seSBzdGF0ZSA9IHRoaXMuX3N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIF9zdG9yYWdlS2V5ID0gJ3BlY29zLWNhY2hlJztcbiAgcHJpdmF0ZSBfd2FpdEZvclN0YXRlID0gZmFsc2U7XG5cbiAgZ2V0IGNhY2hlKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX3N0b3JhZ2VLZXkpIHx8ICd7fScpO1xuICB9XG4gIHNldCBjYWNoZSh2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3N0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF91c2VyOiBhbnkgPSB0aGlzLmNhY2hlO1xuICBnZXQgdXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2t0YUF1dGg6IE9rdGFBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIGlmICh0aGlzLnVzZXIucm9sZSkge1xuICAgICAgdGhpcy5fd2FpdEZvclN0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Qcm92aWRlclN0YXRlQ2hhbmdlKHRydWUpO1xuICAgIH1cbiAgICB0aGlzLm9rdGFBdXRoLiRhdXRoZW50aWNhdGlvblN0YXRlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIHRoaXMub25Pa3RhQXV0aFN0YXRlQ2hhbmdlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXV0aEFQSTxUPihwYXRoID0gJycsIGRhdGE/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5hcGk8VD4oYC9hdXRoZW50aWNhdGlvbi8ke3BhdGh9YCwgZGF0YSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBhc3luYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgaWYgKHRoaXMuX3dhaXRGb3JTdGF0ZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl93YWl0Rm9yU3RhdGUpIHJlc29sdmUodGhpcy5fc3RhdGUuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgc2V0VGltZW91dCh0aWNrLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICB0aWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldFZhbHVlKCkgfHwgKGF3YWl0IHRoaXMub2t0YUF1dGguaXNBdXRoZW50aWNhdGVkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luUmVkaXJlY3QoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKG86IGFueSA9IHt9KSB7XG4gICAgbGV0IHsgY29va2llSWQsIHJvbGUsIHRva2VuLCB1c2VybmFtZSB9ID0gbztcbiAgICBpZiAoIXJvbGUpIHJvbGUgPSAvXnAvLnRlc3QodXNlcm5hbWUpID8gJ1Byb3ZpZGVyJyA6ICdDTVMnO1xuICAgIHRoaXMuY2FjaGUgPSB7IHJvbGUsIHRva2VuLCB1c2VybmFtZSwgY29va2llSWQgfTtcbiAgICB0aGlzLl91c2VyID0geyByb2xlLCB1c2VybmFtZSB9O1xuICAgIGF3YWl0IHRoaXMub25Qcm92aWRlclN0YXRlQ2hhbmdlKHRydWUpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgfVxuXG4gIGFzeW5jIGxvZ291dCgpIHtcbiAgICB0aGlzLl91c2VyID0ge307XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgaWYgKGF3YWl0IHRoaXMub2t0YUF1dGguaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIGF3YWl0IHRoaXMub25Pa3RhQXV0aFN0YXRlQ2hhbmdlKGZhbHNlKTtcbiAgICAgIHRoaXMub2t0YUF1dGguc2lnbk91dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLm9uUHJvdmlkZXJTdGF0ZUNoYW5nZShmYWxzZSk7XG4gICAgICB0aGlzLmxvZ2luUmVkaXJlY3QoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbk9rdGFBdXRoU3RhdGVDaGFuZ2UoaXNBdXRoZW50aWNhdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRBdXRoSGVhZGVycyh0cnVlKTtcbiAgICAgIHRoaXMuX3VzZXIucm9sZSA9ICdDTVMnO1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHRoaXMub2t0YUF1dGguZ2V0VXNlcigpO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl91c2VyLCB7XG4gICAgICAgIGZpcnN0TmFtZTogaW5mby5naXZlbl9uYW1lLFxuICAgICAgICBsYXN0TmFtZTogaW5mby5mYW1pbHlfbmFtZSxcbiAgICAgICAgdXNlcm5hbWU6IGluZm8ubmFtZSxcbiAgICAgICAgaW5mbyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3RhdGUubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkodHJ1ZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jYWNoZS5yb2xlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5KGZhbHNlKTtcbiAgICAgIGF3YWl0IHRoaXMuc2V0QXV0aEhlYWRlcnMoZmFsc2UpO1xuICAgICAgdGhpcy5fdXNlciA9IHt9O1xuICAgICAgdGhpcy5fc3RhdGUubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Qcm92aWRlclN0YXRlQ2hhbmdlKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbikge1xuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0QXV0aEhlYWRlcnMoKTtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLmF1dGhBUEk8YW55PignbG9nZ2VkSW5Vc2VyRGV0YWlscycpO1xuICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSB9ID0gaW5mbztcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fdXNlciwgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgaW5mbyB9KTtcbiAgICAgIHRoaXMuX3N0YXRlLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLl93YWl0Rm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkoZmFsc2UpO1xuICAgICAgYXdhaXQgdGhpcy5zZXRBdXRoSGVhZGVycygpO1xuICAgICAgdGhpcy5fc3RhdGUubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2V0QXV0aEhlYWRlcnMoaXNPa3RhQXV0aGVudGljYXRlZD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCB7IGhlYWRlcnMgfSA9IHRoaXMuZGF0YVNlcnZpY2U7XG4gICAgZGVsZXRlIGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICBkZWxldGUgaGVhZGVycy5QZWNvc1Rva2VuVHlwZTtcbiAgICBjb25zdCB7IHJvbGUsIHRva2VuLCB1c2VybmFtZSB9ID0gdGhpcy5jYWNoZTtcbiAgICBzd2l0Y2ggKHJvbGUpIHtcbiAgICAgIGNhc2UgJ1Byb3ZpZGVyJzpcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VuLmFjY2Vzc190b2tlbn1gO1xuICAgICAgICAgIGhlYWRlcnMuUGVjb3NUb2tlblR5cGUgPSAnUFJPVklERVJfQVVUSF9UT0tFTic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gdXNlcm5hbWU7XG4gICAgICAgICAgaGVhZGVycy5QZWNvc1Rva2VuVHlwZSA9ICdGQUtFX1BST1ZJREVSX0FVVEhfVE9LRU4nO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ01TJzpcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0NNUyc7XG4gICAgICAgIGhlYWRlcnMuUGVjb3NUb2tlblR5cGUgPSAnRkFLRV9NQUNfQVVUSF9UT0tFTic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGlzT2t0YUF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICBjb25zdCBpZFRva2VuID0gYXdhaXQgdGhpcy5va3RhQXV0aC50b2tlbk1hbmFnZXIuZ2V0KCdpZFRva2VuJyk7XG4gICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2lkVG9rZW4udmFsdWV9YDtcbiAgICAgICAgICBoZWFkZXJzLlBlY29zVG9rZW5UeXBlID0gJ01BQ19BVVRIX1RPS0VOJztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUFjdGl2aXR5KGxvZ2luOiBib29sZWFuKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9hY3Rpdml0eUlkO1xuICAgIHRyeSB7XG4gICAgICBpZiAobG9naW4pIHtcbiAgICAgICAgdGhpcy5fYWN0aXZpdHlJZCA9IGF3YWl0IHRoaXMuYXV0aEFQSTxzdHJpbmc+KCdsb2dpbkFjdGl2aXR5Jywge30pO1xuICAgICAgfSBlbHNlIGlmIChpZCkge1xuICAgICAgICBhd2FpdCB0aGlzLmF1dGhBUEkoYGxvZ291dEFjdGl2aXR5P2FjdGl2aXR5TG9nSWQ9JHtpZH1gLCB7fSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cbn1cbiJdfQ==