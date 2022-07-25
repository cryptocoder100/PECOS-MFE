import { __awaiter } from 'tslib';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵelementContainer, ɵɵelement, ɵɵtemplate, ɵɵclassProp, ɵɵattribute, ɵɵpropertyInterpolate1, ɵɵsanitizeUrl, ɵɵproperty, ɵɵpureFunction1, ɵɵpropertyInterpolate2, ɵɵsanitizeHtml, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtext, ɵɵtextInterpolate1, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵresolveDocument, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplateRefExtractor, Component, Input, HostListener, ɵɵdefinePipe, Pipe } from '@angular/core';
import { throwError, timer, BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { retryWhen, mergeMap, catchError } from 'rxjs/operators';
import { OktaAuthService, OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgTemplateOutlet, NgForOf, TitleCasePipe, DatePipe, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

const generateUUID = () => {
    const u = crypto.getRandomValues(new Uint8Array(16));
    u[6] = (u[6] & 0x0f) | 0x40;
    u[8] = (u[8] & 0x3f) | 0x80;
    return u.reduce((s, v, i) => {
        s += v.toString(16);
        if (/^(3|5|7)$/.test(i.toString(10)))
            s += '-';
        return s;
    }, '');
};

class DataService {
    constructor(http) {
        this.http = http;
        this.apiURL = '/api';
        this.excludedStatusCodes = [400, 401, 500, 504];
        this.maxRetries = 2;
        this.requestIndex = 0;
        this.uniqueId = generateUUID();
        this.headers = {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error(`Frontend error: ${error.error.message}`);
        }
        else {
            console.error(`Backend error: ${error.status}, ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }
    api(path, data, method) {
        if (!method)
            method = data ? 'POST' : 'GET';
        const xid = `${this.uniqueId}-${++this.requestIndex}`;
        const res = this.http.request(method, this.apiURL + path, {
            headers: new HttpHeaders(this.headers).append('x-correlation-id', xid),
            body: data,
        });
        const { excludedStatusCodes, maxRetries } = this;
        return res.pipe(retryWhen(mergeMap((error, i) => {
            if (i + 1 > maxRetries ||
                excludedStatusCodes.includes(error.status)) {
                return throwError(error);
            }
            return timer(1000);
        })), catchError(this.handleError));
    }
    mock(path) {
        return this.http.get(`assets/mock/${path}.json?ds`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(ɵɵinject(HttpClient)); };
DataService.ɵprov = ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class AuthService {
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵɵinject(DataService), ɵɵinject(OktaAuthService), ɵɵinject(Router)); };
AuthService.ɵprov = ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: DataService }, { type: OktaAuthService }, { type: Router }]; }, null); })();

class AuthGuard {
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
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(ɵɵinject(AuthService)); };
AuthGuard.ɵprov = ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthGuard, [{
        type: Injectable
    }], function () { return [{ type: AuthService }]; }, null); })();

class AuthModule {
}
AuthModule.ɵmod = ɵɵdefineNgModule({ type: AuthModule });
AuthModule.ɵinj = ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        AuthGuard,
        {
            provide: OKTA_CONFIG,
            useFactory() {
                const oktaConfig = {
                    clientId: '0oa6tmw4miQat1NYq297',
                    issuer: 'https://test.idp.idm.cms.gov/oauth2/aus6tmyyb6L0OyTyk297',
                    postLogoutRedirectUri: location.origin,
                    redirectUri: `${location.origin}/login/cms`,
                    scopes: ['email', 'openid', 'profile'],
                    tokenManager: { autoRenew: true },
                };
                if (/impl/.test(location.host)) {
                    Object.assign(oktaConfig, {
                        clientId: '0oa7qkhh76WNK5c1V297',
                        issuer: 'https://impl.idp.idm.cms.gov/oauth2/aus7qki1fpUtKDSfi297',
                    });
                }
                if (/^idp|beta/.test(location.host)) {
                    Object.assign(oktaConfig, {
                        clientId: '0oa8yvyzjuTQUZudp297',
                        issuer: 'https://idm.cms.gov/oauth2/aus8yw3rdypeR9sdd297',
                    });
                }
                return oktaConfig;
            },
        },
    ], imports: [[OktaAuthModule, RouterModule.forRoot([])], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AuthModule, { imports: [OktaAuthModule, RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                imports: [OktaAuthModule, RouterModule.forRoot([])],
                exports: [RouterModule],
                providers: [
                    AuthGuard,
                    {
                        provide: OKTA_CONFIG,
                        useFactory() {
                            const oktaConfig = {
                                clientId: '0oa6tmw4miQat1NYq297',
                                issuer: 'https://test.idp.idm.cms.gov/oauth2/aus6tmyyb6L0OyTyk297',
                                postLogoutRedirectUri: location.origin,
                                redirectUri: `${location.origin}/login/cms`,
                                scopes: ['email', 'openid', 'profile'],
                                tokenManager: { autoRenew: true },
                            };
                            if (/impl/.test(location.host)) {
                                Object.assign(oktaConfig, {
                                    clientId: '0oa7qkhh76WNK5c1V297',
                                    issuer: 'https://impl.idp.idm.cms.gov/oauth2/aus7qki1fpUtKDSfi297',
                                });
                            }
                            if (/^idp|beta/.test(location.host)) {
                                Object.assign(oktaConfig, {
                                    clientId: '0oa8yvyzjuTQUZudp297',
                                    issuer: 'https://idm.cms.gov/oauth2/aus8yw3rdypeR9sdd297',
                                });
                            }
                            return oktaConfig;
                        },
                    },
                ],
            }]
    }], null, null); })();

const headerLinks = (includeEmulate = false) => {
    const links = [
        { text: 'About', role: [] },
        { text: 'Helpful Links', role: [] },
        { text: 'Knowledge Base', role: [] },
        {
            text: 'Quick References',
            role: ['CMS', 'Provider'],
            children: [
                { text: 'Frequently Asked Questions' },
                { text: 'User Guide' },
                { text: 'Quick Reference' },
            ],
        },
        {
            icon: 'user',
            text: '%user%',
            role: ['CMS', 'Provider'],
            children: [
                { text: 'View Authorizations' },
                { text: 'Logout', href: '/logout' },
            ],
        },
    ];
    if (includeEmulate) {
        links.push({
            text: 'Emulate',
            role: [],
            children: [
                { text: 'mac', emulate: { username: 'mac-user', role: 'CMS' } },
                {
                    text: 'pecos2test1',
                    emulate: { username: 'pecos2test2', role: 'Provider' },
                },
                {
                    text: 'pecos2test2',
                    emulate: { username: 'pecos2test2', role: 'Provider' },
                },
                { text: 'CMS/Mac Login', href: '/login/cms' },
            ],
        });
    }
    return links;
};
const sideLinks = [
    {
        href: '/dashboard',
        icon: 'home',
        text: 'Home',
    },
    {
        href: '/workqueue',
        icon: 'work-queue',
        role: ['CMS'],
        text: 'Work Queue',
    },
    {
        href: '/reports',
        icon: 'reports',
        role: ['CMS'],
        text: 'Reports',
    },
    {
        href: '/search',
        icon: 'search',
        role: ['CMS'],
        text: 'Search',
    },
    {
        href: '/search',
        icon: 'my-connections',
        role: ['Provider'],
        text: 'My Connections',
    },
    {
        href: '/examples',
        icon: 'help',
        text: 'Knowledge Base',
    },
];
const footerLinks = [
    { text: 'Accessibility' },
    {
        text: 'CMS.gov',
        href: 'https://www.cms.gov/',
    },
    {
        text: 'Department of Health and Human Services (HHS)',
        href: 'https://www.cms.gov/',
    },
    {
        text: 'Agreements & Policies',
        href: 'https://www.cms.gov/about-cms/agency-information/aboutwebsite',
    },
    { text: 'How to Use this Site', tooltip: 'Knowledge Base to be developed' },
    { text: 'Contact', tooltip: 'Knowledge Base to be developed' },
];

function PecosUiComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 14, 15);
    ɵɵelementStart(2, "input", 16);
    ɵɵlistener("keyup.enter", function PecosUiComponent_form_5_Template_input_keyup_enter_2_listener() { ɵɵrestoreView(_r10); const _r8 = ɵɵreference(1); return _r8.submit(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ctx_r0.search);
} }
function PecosUiComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PecosUiComponent_aside_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { links: a0 }; };
function PecosUiComponent_aside_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "aside", 17);
    ɵɵelementStart(1, "button", 18);
    ɵɵlistener("click", function PecosUiComponent_aside_9_Template_button_click_1_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.sideNavExpanded = !ctx_r12.sideNavExpanded; });
    ɵɵelement(2, "img", 19);
    ɵɵelement(3, "img", 20);
    ɵɵelementEnd();
    ɵɵelementStart(4, "nav", 21);
    ɵɵtemplate(5, PecosUiComponent_aside_9_ng_container_5_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r6 = ɵɵreference(16);
    ɵɵclassProp("pecos-ui__aside--collapsed", !ctx_r2.sideNavExpanded)("pecos-ui__aside--expanded", ctx_r2.sideNavExpanded);
    ɵɵadvance(1);
    ɵɵattribute("aria-expanded", ctx_r2.sideNavExpanded);
    ɵɵadvance(1);
    ɵɵclassProp("d-none", ctx_r2.sideNavExpanded);
    ɵɵpropertyInterpolate1("src", "", ctx_r2.iconsPath, "icon-expand.svg", ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵclassProp("d-none", !ctx_r2.sideNavExpanded);
    ɵɵpropertyInterpolate1("src", "", ctx_r2.iconsPath, "icon-collapse.svg", ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c0, ctx_r2.sideLinks));
} }
function PecosUiComponent_footer_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PecosUiComponent_footer_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "footer", 22);
    ɵɵelementStart(1, "nav", 23);
    ɵɵtemplate(2, PecosUiComponent_footer_12_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r6 = ɵɵreference(16);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r3.footerLinks));
} }
function PecosUiComponent_ng_template_13_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵelement(1, "img", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r15 = ɵɵnextContext().link;
    const ctx_r16 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate2("src", "", ctx_r16.iconsPath, "icon-", link_r15.icon, ".svg", ɵɵsanitizeUrl);
} }
function PecosUiComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PecosUiComponent_ng_template_13_span_0_Template, 2, 2, "span", 24);
    ɵɵelement(1, "span", 25);
} if (rf & 2) {
    const link_r15 = ctx.link;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", link_r15.icon);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", link_r15.text.replace("%user%", ctx_r5.user.lastName ? ctx_r5.user.lastName + ", " + ctx_r5.user.firstName : ctx_r5.user.username), ɵɵsanitizeHtml);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { link: a0 }; };
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 34);
    ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template_button_click_1_listener() { ɵɵrestoreView(_r28); const link_r20 = ɵɵnextContext(2).$implicit; const ctx_r26 = ɵɵnextContext(2); return ctx_r26.toggle(link_r20); });
    ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r20 = ɵɵnextContext(2).$implicit;
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(14);
    const _r6 = ɵɵreference(16);
    ɵɵadvance(1);
    ɵɵattribute("aria-expanded", !!link_r20.expanded);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c1, link_r20));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0, link_r20.children));
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 35);
    ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template_a_click_0_listener($event) { ɵɵrestoreView(_r33); const link_r20 = ɵɵnextContext(2).$implicit; const ctx_r31 = ɵɵnextContext(2); return ctx_r31.onClick(link_r20, $event); });
    ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r20 = ɵɵnextContext(2).$implicit;
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(14);
    ɵɵproperty("href", link_r20.href || "#", ɵɵsanitizeUrl);
    ɵɵattribute("rel", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "noopener noreferrer" : null)("target", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "_blank" : null);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c1, link_r20));
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 31);
    ɵɵtext(1);
    ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template, 4, 9, "ng-container", 32);
    ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template, 2, 7, "a", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r20 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", link_r20.roles, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", link_r20.children);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !link_r20.children);
} }
function PecosUiComponent_ng_template_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_Template, 4, 3, "li", 30);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r20 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !link_r20.role || link_r20.role.includes(ctx_r19.user.role) || link_r20.role.length === 0 && !ctx_r19.user.role);
} }
function PecosUiComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 28);
    ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_Template, 2, 1, "ng-container", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const links_r18 = ctx.links;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", links_r18);
} }
const _c2 = ["*"];
class PecosUiComponent {
    constructor(auth) {
        this.auth = auth;
        this.footerLinks = footerLinks;
        this.headerLinks = headerLinks(!/demo|impl/.test(location.host));
        this.search = 'Search';
        this.sideLinks = sideLinks;
        this.sideNavExpanded = false;
        this.iconsPath = '/assets/icons/page-framework/';
        this.user = this.auth.user;
    }
    ngOnInit() {
        this.auth.state.subscribe(() => (this.user = this.auth.user));
    }
    onDocumentClick(target) {
        if (this._activeLink &&
            !target.closest('.pecos-ui__link[aria-expanded="true"]')) {
            this._activeLink.expanded = false;
        }
    }
    onClick(link, e) {
        if (link.href === '/logout') {
            e.preventDefault();
            this.auth.logout();
        }
        else if (link.emulate) {
            e.preventDefault();
            this.auth.login(link.emulate);
        }
    }
    toggle(link) {
        if (this._activeLink && this._activeLink !== link) {
            this._activeLink.expanded = false;
        }
        link.expanded = !link.expanded;
        this._activeLink = link;
    }
}
PecosUiComponent.ɵfac = function PecosUiComponent_Factory(t) { return new (t || PecosUiComponent)(ɵɵdirectiveInject(AuthService)); };
PecosUiComponent.ɵcmp = ɵɵdefineComponent({ type: PecosUiComponent, selectors: [["pecos-ui"]], hostAttrs: [1, "pecos-ui"], hostBindings: function PecosUiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function PecosUiComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event.target); }, false, ɵɵresolveDocument);
    } }, inputs: { footerLinks: "footerLinks", headerLinks: "headerLinks", search: "search", sideLinks: "sideLinks", sideNavExpanded: "sideNavExpanded" }, ngContentSelectors: _c2, decls: 17, vars: 8, consts: [[1, "pecos-ui__header"], [1, "pecos-ui__header__logo"], ["href", "/"], ["alt", "PECOS logo", 3, "src"], [1, "pecos-ui__header__search"], ["action", "/search", "class", "pecos-ui__header__search__form", "method", "get", 4, "ngIf"], [1, "pecos-ui__header__links"], ["aria-label", "main", 1, "pecos-ui__nav"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "pecos-ui__aside", 3, "pecos-ui__aside--collapsed", "pecos-ui__aside--expanded", 4, "ngIf"], ["id", "pecos-ui-main", 1, "pecos-ui__main"], ["class", "pecos-ui__footer", 4, "ngIf"], ["linkTemplate", ""], ["listTemplate", ""], ["action", "/search", "method", "get", 1, "pecos-ui__header__search__form"], ["searchForm", ""], ["aria-label", "search site", "name", "q", "type", "search", 1, "pecos-ui__header__search__input", 3, "placeholder", "keyup.enter"], [1, "pecos-ui__aside"], ["aria-controls", "pecos-ui-site-nav", "aria-label", "site navigation section", 1, "pecos-ui__aside__toggle", 3, "click"], ["alt", "expand", 1, "pecos-ui__icon__expand", 3, "src"], ["alt", "collapse", 1, "pecos-ui__icon__collapse", 3, "src"], ["aria-label", "site", "id", "pecos-ui-site-nav", 1, "pecos-ui__nav"], [1, "pecos-ui__footer"], ["aria-label", "footer", 1, "pecos-ui__nav"], ["class", "pecos-ui__link__icon", 4, "ngIf"], [1, "pecos-ui__link__text", 3, "innerHTML"], [1, "pecos-ui__link__icon"], ["alt", "", 3, "src"], [1, "pecos-ui__list"], [4, "ngFor", "ngForOf"], ["class", "pecos-ui__list__item", 4, "ngIf"], [1, "pecos-ui__list__item"], [4, "ngIf"], ["class", "pecos-ui__link", 3, "href", "click", 4, "ngIf"], ["type", "button", 1, "pecos-ui__link", 3, "click"], [1, "pecos-ui__link", 3, "href", "click"]], template: function PecosUiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "header", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵelement(3, "img", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵtemplate(5, PecosUiComponent_form_5_Template, 3, 1, "form", 5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵelementStart(7, "nav", 7);
        ɵɵtemplate(8, PecosUiComponent_ng_container_8_Template, 1, 0, "ng-container", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, PecosUiComponent_aside_9_Template, 6, 15, "aside", 9);
        ɵɵelementStart(10, "main", 10);
        ɵɵprojection(11);
        ɵɵelementEnd();
        ɵɵtemplate(12, PecosUiComponent_footer_12_Template, 3, 4, "footer", 11);
        ɵɵtemplate(13, PecosUiComponent_ng_template_13_Template, 2, 2, "ng-template", null, 12, ɵɵtemplateRefExtractor);
        ɵɵtemplate(15, PecosUiComponent_ng_template_15_Template, 2, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r6 = ɵɵreference(16);
        ɵɵadvance(3);
        ɵɵpropertyInterpolate1("src", "", ctx.iconsPath, "icon-pecos-logo.svg", ɵɵsanitizeUrl);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.user.role);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c0, ctx.headerLinks));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.sideLinks.length);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.footerLinks.length);
    } }, directives: [NgIf, NgTemplateOutlet, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PecosUiComponent, [{
        type: Component,
        args: [{
                host: { class: 'pecos-ui' },
                selector: 'pecos-ui',
                template: `
    <header class="pecos-ui__header">
      <div class="pecos-ui__header__logo">
        <a href="/">
          <img src="{{ iconsPath }}icon-pecos-logo.svg" alt="PECOS logo" />
        </a>
      </div>
      <div class="pecos-ui__header__search">
        <form
          *ngIf="user.role"
          action="/search"
          class="pecos-ui__header__search__form"
          method="get"
          #searchForm
        >
          <input
            aria-label="search site"
            class="pecos-ui__header__search__input"
            name="q"
            placeholder="{{ search }}"
            (keyup.enter)="searchForm.submit()"
            type="search"
          />
        </form>
      </div>
      <div class="pecos-ui__header__links">
        <nav class="pecos-ui__nav" aria-label="main">
          <ng-container
            *ngTemplateOutlet="listTemplate; context: { links: headerLinks }"
          ></ng-container>
        </nav>
      </div>
    </header>
    <aside
      *ngIf="sideLinks.length"
      class="pecos-ui__aside"
      [class.pecos-ui__aside--collapsed]="!sideNavExpanded"
      [class.pecos-ui__aside--expanded]="sideNavExpanded"
    >
      <button
        aria-controls="pecos-ui-site-nav"
        [attr.aria-expanded]="sideNavExpanded"
        aria-label="site navigation section"
        class="pecos-ui__aside__toggle"
        (click)="sideNavExpanded = !sideNavExpanded"
      >
        <img
          class="pecos-ui__icon__expand"
          [class.d-none]="sideNavExpanded"
          src="{{ iconsPath }}icon-expand.svg"
          alt="expand"
        />
        <img
          class="pecos-ui__icon__collapse"
          [class.d-none]="!sideNavExpanded"
          src="{{ iconsPath }}icon-collapse.svg"
          alt="collapse"
        />
      </button>
      <nav class="pecos-ui__nav" aria-label="site" id="pecos-ui-site-nav">
        <ng-container
          *ngTemplateOutlet="listTemplate; context: { links: sideLinks }"
        ></ng-container>
      </nav>
    </aside>
    <main class="pecos-ui__main" id="pecos-ui-main">
      <ng-content></ng-content>
    </main>
    <footer class="pecos-ui__footer" *ngIf="footerLinks.length">
      <nav class="pecos-ui__nav" aria-label="footer">
        <ng-container
          *ngTemplateOutlet="listTemplate; context: { links: footerLinks }"
        ></ng-container>
      </nav>
    </footer>

    <ng-template #linkTemplate let-link="link">
      <span class="pecos-ui__link__icon" *ngIf="link.icon">
      <img src="{{ iconsPath }}icon-{{ link.icon }}.svg" alt="" />
      </span>
      <span
        class="pecos-ui__link__text"
        [innerHTML]="
          link.text.replace(
            '%user%',
            user.lastName
              ? user.lastName + ', ' + user.firstName
              : user.username
          )
        "
      ></span>
    </ng-template>

    <ng-template #listTemplate let-links="links">
      <ul class="pecos-ui__list">
        <ng-container *ngFor="let link of links">
          <li
            *ngIf="
              !link.role ||
              link.role.includes(user.role) ||
              (link.role.length === 0 && !user.role)
            "
            class="pecos-ui__list__item"
          >
            {{ link.roles }}
            <ng-container *ngIf="link.children">
              <button
                [attr.aria-expanded]="!!link.expanded"
                class="pecos-ui__link"
                (click)="toggle(link)"
                type="button"
              >
                <ng-container
                  *ngTemplateOutlet="linkTemplate; context: { link: link }"
                ></ng-container>
              </button>
              <ng-container
                *ngTemplateOutlet="
                  listTemplate;
                  context: { links: link.children }
                "
              ></ng-container>
            </ng-container>
            <a
              *ngIf="!link.children"
              class="pecos-ui__link"
              [attr.rel]="
                link.href?.startsWith('http') ? 'noopener noreferrer' : null
              "
              [attr.target]="link.href?.startsWith('http') ? '_blank' : null"
              (click)="onClick(link, $event)"
              [href]="link.href || '#'"
              ><ng-container
                *ngTemplateOutlet="linkTemplate; context: { link: link }"
              ></ng-container>
            </a>
          </li>
        </ng-container>
      </ul>
    </ng-template>
  `,
            }]
    }], function () { return [{ type: AuthService }]; }, { footerLinks: [{
            type: Input
        }], headerLinks: [{
            type: Input
        }], search: [{
            type: Input
        }], sideLinks: [{
            type: Input
        }], sideNavExpanded: [{
            type: Input
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();

class ZipCodePipe {
    transform(value) {
        let zip = value;
        if (zip && zip.length > 5) {
            if (zip.includes('-'))
                return zip;
            return `${zip.substr(0, 5)}-${zip.substr(5)}`;
        }
        else {
            return zip;
        }
    }
}
ZipCodePipe.ɵfac = function ZipCodePipe_Factory(t) { return new (t || ZipCodePipe)(); };
ZipCodePipe.ɵpipe = ɵɵdefinePipe({ name: "zipCode", type: ZipCodePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ZipCodePipe, [{
        type: Pipe,
        args: [{ name: 'zipCode' }]
    }], null, null); })();

class AddressPipe {
    transform(o, isHTML = false, applyTitleCase = true, pattern = 'default', emptyValue = '-') {
        if (!o)
            return emptyValue;
        let line1 = o.addressLine1 || o.addrLine1 || o.street1 || '';
        let line2 = o.addressLine2 || o.addrLine2 || o.street2 || '';
        let city = o.city || o.cityName || '';
        let state = o.state || o.stateCd || o.stateCode || o.addressStateCode || '';
        let zip = o.zip || o.zipCd || o.zipCode || o.zipcode || '';
        const all = line1 + line2 + city + state + zip;
        if (all.trim() === '')
            return emptyValue;
        if (zip)
            zip = new ZipCodePipe().transform(zip);
        if (applyTitleCase === true) {
            const titleCasePipe = new TitleCasePipe();
            line1 = titleCasePipe.transform(line1);
            line2 = titleCasePipe.transform(line2);
            city = titleCasePipe.transform(city);
        }
        const usps = pattern === 'usps';
        const lines = [line1];
        if (line2)
            lines.push(line2);
        if (isHTML) {
            let s = '';
            if (line1 || line2) {
                s += lines.join(usps ? ' ' : '<br>') + '<br>';
            }
            if (city)
                s += city;
            if (city && (state || zip))
                s += ', ';
            if (state)
                s += state;
            if (s.length)
                s += '<br>';
            if (zip)
                s += zip;
            return `<address>${s}</address>`;
        }
        else {
            return [lines.join(' '), city, state, zip]
                .map((s) => s.trim())
                .filter((s) => s !== '')
                .join(', ');
        }
    }
}
AddressPipe.ɵfac = function AddressPipe_Factory(t) { return new (t || AddressPipe)(); };
AddressPipe.ɵpipe = ɵɵdefinePipe({ name: "address", type: AddressPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddressPipe, [{
        type: Pipe,
        args: [{ name: 'address' }]
    }], null, null); })();

const DATE_FORMAT = 'MM/dd/yyyy';
const YEAR_DATE_FORMAT = 'yyyy-MM-dd';
const isUTCTimeZone = /\+0000$/;
class DateFormatPipe {
    constructor() {
        this.datePipe = new DatePipe('en-US');
    }
    transform(value, nullValue = '-', isDateYearFormat) {
        if (value === null || !value || value === '-') {
            return nullValue;
            //if it's a masked DOB just return it as-is b/c it's already formatted
        }
        else if (value.includes('XX')) {
            return value;
        }
        const timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
        return this.datePipe.transform(value, isDateYearFormat ? YEAR_DATE_FORMAT : DATE_FORMAT, timezone);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'dateFormat',
            }]
    }], null, null); })();

class EmptyDashPipe {
    transform(value) {
        if (value === null ||
            value === '' ||
            value === undefined ||
            value === ' ') {
            return '-';
        }
        else
            return value;
    }
}
EmptyDashPipe.ɵfac = function EmptyDashPipe_Factory(t) { return new (t || EmptyDashPipe)(); };
EmptyDashPipe.ɵpipe = ɵɵdefinePipe({ name: "emptyDash", type: EmptyDashPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmptyDashPipe, [{
        type: Pipe,
        args: [{ name: 'emptyDash' }]
    }], null, null); })();

const hasValue = (o, fn) => {
    switch (Object.prototype.toString.call(o).charAt(8)) {
        case 'O':
            return Object.values(o).some((value) => hasValue(value, fn));
        case 'A':
            return o.some((child) => hasValue(child, fn));
        default:
            return fn(o);
    }
};
class FilterPipe {
    transform(items, value) {
        return FilterPipe.filter(items, value);
    }
    static filter(items, value) {
        const lowerValue = value.toLowerCase();
        const testValue = (v) => String(v !== null && v !== void 0 ? v : '')
            .toLowerCase()
            .indexOf(lowerValue) > -1;
        return items.filter((item) => hasValue(item, testValue));
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{ name: 'filter' }]
    }], null, null); })();

class FullNamePipe {
    transform(value, pattern = 'f m l s') {
        const safeValue = value !== null && value !== void 0 ? value : {};
        const { firstName: f, lastName: l, middleName: m, middleInitial: mi = (m || '').trim().charAt(0), suffix = '', } = safeValue;
        const s = (suffix !== null && suffix !== void 0 ? suffix : '').trim().replace('N/A', '');
        const macro = pattern
            .replace(/f/g, '\u0001')
            .replace(/l/g, '\u0002')
            .replace(/mi/g, '\u0004')
            .replace(/m/g, '\u0003')
            .replace(/s/g, '\u0005');
        return macro
            .replace(/\u0001/g, f !== null && f !== void 0 ? f : '')
            .replace(/\u0002/g, l !== null && l !== void 0 ? l : '')
            .replace(/\u0003/g, m !== null && m !== void 0 ? m : '')
            .replace(/\u0004/g, mi !== null && mi !== void 0 ? mi : '')
            .replace(/\u0005/g, s !== null && s !== void 0 ? s : '')
            .replace(/ {2,}/g, ' ')
            .trim();
    }
}
FullNamePipe.ɵfac = function FullNamePipe_Factory(t) { return new (t || FullNamePipe)(); };
FullNamePipe.ɵpipe = ɵɵdefinePipe({ name: "fullName", type: FullNamePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FullNamePipe, [{
        type: Pipe,
        args: [{ name: 'fullName' }]
    }], null, null); })();

class HighlightKeywordPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(list, searchText, type) {
        if (!list) {
            return '';
        }
        if (!searchText ||
            searchText.indexOf('*') === 0 ||
            list === '-' ||
            type !== 'search') {
            return list;
        }
        const sText = searchText.trim();
        const sList = list && list.toString();
        const regex = new RegExp(sText, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        const value = sList.replace(regex, '<span style="background-color:#FFF3BD">$&</span>');
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
}
HighlightKeywordPipe.ɵfac = function HighlightKeywordPipe_Factory(t) { return new (t || HighlightKeywordPipe)(ɵɵdirectiveInject(DomSanitizer)); };
HighlightKeywordPipe.ɵpipe = ɵɵdefinePipe({ name: "highlightKeyword", type: HighlightKeywordPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighlightKeywordPipe, [{
        type: Pipe,
        args: [{
                name: 'highlightKeyword',
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

class PhoneNumberPipe {
    transform(value) {
        if (value) {
            value = value.replace(/\D/g, '');
            if (value.length <= 10) {
                return `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6)}`;
            }
            else {
                return `(${value.substr(0, 3)}) ${value.substr(3, 3)}-${value.substr(6, 4)} ext ${value.substr(10)}`;
            }
        }
        else {
            return '-';
        }
    }
}
PhoneNumberPipe.ɵfac = function PhoneNumberPipe_Factory(t) { return new (t || PhoneNumberPipe)(); };
PhoneNumberPipe.ɵpipe = ɵɵdefinePipe({ name: "phoneNumber", type: PhoneNumberPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PhoneNumberPipe, [{
        type: Pipe,
        args: [{ name: 'phoneNumber' }]
    }], null, null); })();

class TimeFormatPipe extends DatePipe {
    constructor() {
        super('en-US');
    }
    transform(value, nullValue = '-') {
        if (value === null)
            return nullValue;
        let timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
        return super.transform(value, 'shortTime', timezone);
    }
}
TimeFormatPipe.ɵfac = function TimeFormatPipe_Factory(t) { return new (t || TimeFormatPipe)(); };
TimeFormatPipe.ɵpipe = ɵɵdefinePipe({ name: "timeFormat", type: TimeFormatPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeFormatPipe, [{
        type: Pipe,
        args: [{ name: 'timeFormat' }]
    }], function () { return []; }, null); })();

const format = (s = '', pattern = '', i = 0) => pattern.replace(/#/g, () => s[i++] || '');
class TinPipe {
    transform({ id, idType = 'ein' }, isTokenized = false) {
        let tin = String(id !== null && id !== void 0 ? id : '').replace(/-/g, '');
        if (tin === '')
            return '-';
        if ('ssn' === idType) {
            if (isTokenized) {
                tin = `XXXXX${tin.slice(-4)}`;
            }
            tin = format(tin, '###-##-####');
        }
        else {
            tin = format(tin, '##-#######');
        }
        return tin;
    }
}
TinPipe.ɵfac = function TinPipe_Factory(t) { return new (t || TinPipe)(); };
TinPipe.ɵpipe = ɵɵdefinePipe({ name: "TIN", type: TinPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TinPipe, [{
        type: Pipe,
        args: [{ name: 'TIN' }]
    }], null, null); })();

class TitleCaseExtendedPipe extends TitleCasePipe {
    constructor() {
        super();
    }
    transform(value, ...args) {
        if (!value)
            return null;
        let words = value.split(' ');
        for (var index = 0; index < words.length; index++) {
            var word = words[index];
            if (index > 0 && this.isAbbreviation(word)) {
                words[index] = word.toUpperCase();
            }
            else {
                words[index] = this.forSpecialCharacters(word);
            }
        }
        return words.join(' ');
    }
    isAbbreviation(word) {
        //this method will override any words you need full capitalized
        let upperCaseWords = ['II', 'III', 'IV']; // add more words to include here, currently suffixes
        return upperCaseWords.includes(word.toUpperCase());
    }
    forSpecialCharacters(str) {
        //this method will uppercase letters after a hyphen or slash or whitespace
        return str.toLowerCase().replace(/(?:^|\s|\/|\-|\()\w/g, function (match) {
            return match.toUpperCase();
        });
    }
}
TitleCaseExtendedPipe.ɵfac = function TitleCaseExtendedPipe_Factory(t) { return new (t || TitleCaseExtendedPipe)(); };
TitleCaseExtendedPipe.ɵpipe = ɵɵdefinePipe({ name: "titleCaseExtended", type: TitleCaseExtendedPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TitleCaseExtendedPipe, [{
        type: Pipe,
        args: [{ name: 'titleCaseExtended' }]
    }], function () { return []; }, null); })();

class AnnouncerService {
    constructor() {
        const el = (this._element = document.createElement('div'));
        el.className = 'sr-only';
        el.setAttribute('aria-live', 'polite');
        el.setAttribute('role', 'status');
        document.body.appendChild(el);
    }
    announce(text) {
        this._element.textContent = '';
        setTimeout(() => {
            this._element.textContent = text;
        }, 100);
    }
}
AnnouncerService.ɵfac = function AnnouncerService_Factory(t) { return new (t || AnnouncerService)(); };
AnnouncerService.ɵprov = ɵɵdefineInjectable({ token: AnnouncerService, factory: AnnouncerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnnouncerService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

const sortByKey = (key) => (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
class ReferenceDataService {
    constructor(dataService) {
        this.dataService = dataService;
        this.cache = {};
    }
    api(path = '/referenceData') {
        return this.dataService.api(`/reference${path}`).toPromise();
    }
    getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache[type];
                if (!list) {
                    const data = yield this.api(`/referenceByType/${type}`);
                    list = data._embedded.codeReferenceDTOList;
                    list.sort(sortByKey('value'));
                    this.cache[type] = list;
                }
                return [...list]; // return a copy
            }
            catch (e) {
                return [];
            }
        });
    }
    getDocumentTypeByCategory(categoryType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache[categoryType];
                if (!list) {
                    const data = yield this.api(`/reference/documentType/${categoryType || ''}`);
                    list = data;
                    list.sort(sortByKey('code'));
                    this.cache[categoryType] = list;
                }
                return [...list]; // return a copy
            }
            catch (e) {
                return [];
            }
        });
    }
    getDocumentCategories() {
        return this.getByType('Document Category');
    }
    getCountries() {
        return this.getByType('Country Code');
    }
    getEvents() {
        return this.getByType('event');
    }
    getEventsByReferenceType(referenceType) {
        return this.getByType(`event/${referenceType}`);
    }
    getFlagTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.flagTypes;
                if (!list) {
                    const data = yield this.api('/flagTypes');
                    list = data._embedded.pecosFlagReferenceDTOList;
                    list.sort(sortByKey('label'));
                    this.cache.flagTypes = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getLineOfBusinessInfo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { formType, physicianInd = '', specialtyCode = '' } = options;
            if (!formType) {
                throw new Error(`formType must be supplied.`);
            }
            const cacheKey = ['lob', ...Object.values(options)].join('-');
            try {
                let data = this.cache[cacheKey];
                if (!data) {
                    const qs = `physicianInd=${physicianInd}&specialtyCode=${specialtyCode}`;
                    data = yield this.api(`/getFormLineOfBusinessInfo/${formType}?${qs}`);
                    this.cache[cacheKey] = data;
                }
                return data;
            }
            catch (e) {
                return null;
            }
        });
    }
    getMacGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.macGroups;
                if (!list) {
                    const data = yield this.api('/macGroups');
                    list = data._embedded.contractorGroupDTOList;
                    list.sort(sortByKey('value'));
                    this.cache.macGroups = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getNameSuffixes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.nameSuffixes;
                if (!list) {
                    // TODO: actually use /api if one becomes available
                    list = [
                        { code: 'JR', value: 'Jr.' },
                        { code: 'SR', value: 'Sr.' },
                        { code: 'II', value: 'II' },
                        { code: 'III', value: 'III' },
                        { code: 'IV', value: 'IV' },
                        { code: 'N/A', value: 'N/A' },
                    ];
                    this.cache.nameSuffixes = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getPecosUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.pecosUsers;
                if (!list) {
                    const data = yield this.api('/pecosUser');
                    list = data._embedded.pecosUserDTOList;
                    list.sort(sortByKey('cmsUserId'));
                    this.cache.pecosUsers = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialties() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let list = this.cache.specialties;
                if (!list) {
                    const data = yield this.api('/referenceData/specialties');
                    list = data._embedded.pecosReferenceDataDTOList;
                    list.sort(sortByKey('codeDescription'));
                    this.cache.specialties = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialtiesByFormType(formType, providerType = 'NA') {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `specialties-${formType}-${providerType}`;
            try {
                let list = this.cache[cacheKey];
                if (!list) {
                    const data = yield this.api(`/specialtyRef/${formType}/${providerType}`);
                    list = data._embedded.specialtyReferenceDTOList;
                    list.sort(sortByKey('specialtyReferenceDesc'));
                    this.cache[cacheKey] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getSpecialtiesWithFormType() {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `specialties-with-form-type`;
            try {
                let list = this.cache[cacheKey];
                if (!list) {
                    const data = yield this.api(`/referenceByType/specialties`);
                    list = data._embedded.specialtyReferenceDTOList;
                    list.sort(sortByKey('specialtyReferenceDesc'));
                    this.cache[cacheKey] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    getStates() {
        return this.getByType('State Code');
    }
    getVehicleTypes() {
        return this.getByType('Vehicle Type');
    }
    getDispositionReasons(reasonType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.cache.dispositionReasons) {
                    this.cache.dispositionReasons = [];
                }
                let list = this.cache.dispositionReasons[reasonType];
                if (!list) {
                    const data = yield this.api(`/disposition-reason/${reasonType}`);
                    list = data;
                    list.sort(sortByKey('conceptReasonSubtype'));
                    this.cache.dispositionReasons[reasonType] = list;
                }
                return [...list];
            }
            catch (e) {
                return [];
            }
        });
    }
    fetchRfiCorrespondenceSection(applicationEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = 'rfi' + applicationEnum;
            try {
                if (!this.cache[cacheKey]) {
                    this.cache[cacheKey] = [];
                }
                let list = this.cache[cacheKey];
                if (list.length === 0) {
                    const csData = yield this.dataService.api('/content/rfiCorrespondenceSections/' + applicationEnum).toPromise();
                    this.cache[cacheKey] = csData;
                    list = csData;
                }
                return list;
            }
            catch (e) {
                return [];
            }
        });
    }
}
ReferenceDataService.ɵfac = function ReferenceDataService_Factory(t) { return new (t || ReferenceDataService)(ɵɵinject(DataService)); };
ReferenceDataService.ɵprov = ɵɵdefineInjectable({ token: ReferenceDataService, factory: ReferenceDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReferenceDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: DataService }]; }, null); })();

class StorageService {
    getItem(key, defaultValue) {
        const value = sessionStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return defaultValue;
    }
    setItem(key, data) {
        const value = JSON.stringify(data);
        sessionStorage.setItem(key, value);
    }
    removeItem(key) {
        sessionStorage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

const uids = {};
const UID = (ns = 'uid') => {
    if (!uids[ns])
        uids[ns] = 0;
    return `${ns}-${++uids[ns]}`;
};

const components = [PecosUiComponent];
const imports = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
];
const pipes = [
    AddressPipe,
    DateFormatPipe,
    EmptyDashPipe,
    FilterPipe,
    FullNamePipe,
    HighlightKeywordPipe,
    PhoneNumberPipe,
    TimeFormatPipe,
    TinPipe,
    TitleCaseExtendedPipe,
    ZipCodePipe,
];
class PecosUiCoreModule {
}
PecosUiCoreModule.ɵmod = ɵɵdefineNgModule({ type: PecosUiCoreModule });
PecosUiCoreModule.ɵinj = ɵɵdefineInjector({ factory: function PecosUiCoreModule_Factory(t) { return new (t || PecosUiCoreModule)(); }, imports: [imports, CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PecosUiCoreModule, { declarations: [AddressPipe, DateFormatPipe, EmptyDashPipe, FilterPipe, FullNamePipe, HighlightKeywordPipe, PhoneNumberPipe, TimeFormatPipe, TinPipe, TitleCaseExtendedPipe, ZipCodePipe, PecosUiComponent], imports: [CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule], exports: [CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthModule, AddressPipe, DateFormatPipe, EmptyDashPipe, FilterPipe, FullNamePipe, HighlightKeywordPipe, PhoneNumberPipe, TimeFormatPipe, TinPipe, TitleCaseExtendedPipe, ZipCodePipe, PecosUiComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PecosUiCoreModule, [{
        type: NgModule,
        args: [{
                imports,
                declarations: [...pipes, ...components],
                exports: [...imports, ...pipes, ...components],
            }]
    }], null, null); })();

/*
 * Public API Surface of pecos-ui-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddressPipe, AnnouncerService, AuthGuard, AuthModule, AuthService, DATE_FORMAT, DataService, DateFormatPipe, EmptyDashPipe, FilterPipe, FullNamePipe, HighlightKeywordPipe, PecosUiComponent, PecosUiCoreModule, PhoneNumberPipe, ReferenceDataService, StorageService, TimeFormatPipe, TinPipe, TitleCaseExtendedPipe, UID, YEAR_DATE_FORMAT, ZipCodePipe, generateUUID, hasValue, isUTCTimeZone, sortByKey };
//# sourceMappingURL=pecos-pecos-ui-core.js.map
