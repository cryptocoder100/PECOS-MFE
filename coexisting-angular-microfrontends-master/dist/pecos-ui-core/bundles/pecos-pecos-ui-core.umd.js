(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('@okta/okta-angular'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@pecos/pecos-ui-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', '@okta/okta-angular', '@angular/router', '@angular/common', '@angular/forms', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.pecos = global.pecos || {}, global.pecos['pecos-ui-core'] = {}), global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators, global['@okta/okta-angular'], global.ng.router, global.ng.common, global.ng.forms, global.ng.platformBrowser));
}(this, (function (exports, i0, rxjs, i1, operators, i2, i3, i2$1, i3$1, i1$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var generateUUID = function () {
        var u = crypto.getRandomValues(new Uint8Array(16));
        u[6] = (u[6] & 0x0f) | 0x40;
        u[8] = (u[8] & 0x3f) | 0x80;
        return u.reduce(function (s, v, i) {
            s += v.toString(16);
            if (/^(3|5|7)$/.test(i.toString(10)))
                s += '-';
            return s;
        }, '');
    };

    var DataService = /** @class */ (function () {
        function DataService(http) {
            this.http = http;
            this.apiURL = '/api';
            this.excludedStatusCodes = [400, 401, 500, 504];
            this.maxRetries = 2;
            this.requestIndex = 0;
            this.uniqueId = generateUUID();
            this.headers = {};
        }
        DataService.prototype.handleError = function (error) {
            if (error.error instanceof ErrorEvent) {
                console.error("Frontend error: " + error.error.message);
            }
            else {
                console.error("Backend error: " + error.status + ", " + error.error);
            }
            return rxjs.throwError('Something bad happened; please try again later.');
        };
        DataService.prototype.api = function (path, data, method) {
            if (!method)
                method = data ? 'POST' : 'GET';
            var xid = this.uniqueId + "-" + ++this.requestIndex;
            var res = this.http.request(method, this.apiURL + path, {
                headers: new i1.HttpHeaders(this.headers).append('x-correlation-id', xid),
                body: data,
            });
            var _a = this, excludedStatusCodes = _a.excludedStatusCodes, maxRetries = _a.maxRetries;
            return res.pipe(operators.retryWhen(operators.mergeMap(function (error, i) {
                if (i + 1 > maxRetries ||
                    excludedStatusCodes.includes(error.status)) {
                    return rxjs.throwError(error);
                }
                return rxjs.timer(1000);
            })), operators.catchError(this.handleError));
        };
        DataService.prototype.mock = function (path) {
            return this.http.get("assets/mock/" + path + ".json?ds");
        };
        return DataService;
    }());
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(i1.HttpClient)); };
    DataService.ɵprov = i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();

    var AuthService = /** @class */ (function () {
        function AuthService(dataService, oktaAuth, router) {
            var _this = this;
            this.dataService = dataService;
            this.oktaAuth = oktaAuth;
            this.router = router;
            this._activityId = '';
            this._state = new rxjs.BehaviorSubject(false);
            this.state = this._state.asObservable();
            this._storageKey = 'pecos-cache';
            this._waitForState = false;
            this._user = this.cache;
            if (this.user.role) {
                this._waitForState = true;
                this.onProviderStateChange(true);
            }
            this.oktaAuth.$authenticationState.subscribe(function (value) {
                _this.onOktaAuthStateChange(value);
            });
        }
        Object.defineProperty(AuthService.prototype, "cache", {
            get: function () {
                return JSON.parse(localStorage.getItem(this._storageKey) || '{}');
            },
            set: function (value) {
                localStorage.setItem(this._storageKey, JSON.stringify(value));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthService.prototype, "user", {
            get: function () {
                return this._user;
            },
            enumerable: false,
            configurable: true
        });
        AuthService.prototype.authAPI = function (path, data) {
            if (path === void 0) { path = ''; }
            return this.dataService.api("/authentication/" + path, data).toPromise();
        };
        AuthService.prototype.isAuthenticated = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this._waitForState) return [3 /*break*/, 1];
                            return [2 /*return*/, new Promise(function (resolve) {
                                    var tick = function () {
                                        if (!_this._waitForState)
                                            resolve(_this._state.getValue());
                                        setTimeout(tick, 100);
                                    };
                                    tick();
                                })];
                        case 1:
                            _a = this._state.getValue();
                            if (_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3: return [2 /*return*/, _a];
                    }
                });
            });
        };
        AuthService.prototype.loginRedirect = function () {
            window.location.href = '/login';
        };
        AuthService.prototype.login = function (o) {
            if (o === void 0) { o = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var cookieId, role, token, username;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cookieId = o.cookieId, role = o.role, token = o.token, username = o.username;
                            if (!role)
                                role = /^p/.test(username) ? 'Provider' : 'CMS';
                            this.cache = { role: role, token: token, username: username, cookieId: cookieId };
                            this._user = { role: role, username: username };
                            return [4 /*yield*/, this.onProviderStateChange(true)];
                        case 1:
                            _a.sent();
                            this.router.navigateByUrl('/');
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.logout = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._user = {};
                            localStorage.removeItem(this._storageKey);
                            return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                        case 1:
                            if (!_a.sent()) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.onOktaAuthStateChange(false)];
                        case 2:
                            _a.sent();
                            this.oktaAuth.signOut().catch(console.error);
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, this.onProviderStateChange(false)];
                        case 4:
                            _a.sent();
                            this.loginRedirect();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.onOktaAuthStateChange = function (isAuthenticated) {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAuthenticated) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.setAuthHeaders(true)];
                        case 1:
                            _a.sent();
                            this._user.role = 'CMS';
                            return [4 /*yield*/, this.oktaAuth.getUser()];
                        case 2:
                            info = _a.sent();
                            Object.assign(this._user, {
                                firstName: info.given_name,
                                lastName: info.family_name,
                                username: info.name,
                                info: info,
                            });
                            this._state.next(true);
                            this.updateActivity(true);
                            return [3 /*break*/, 5];
                        case 3:
                            if (!!this.cache.role) return [3 /*break*/, 5];
                            this.updateActivity(false);
                            return [4 /*yield*/, this.setAuthHeaders(false)];
                        case 4:
                            _a.sent();
                            this._user = {};
                            this._state.next(false);
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.onProviderStateChange = function (isAuthenticated) {
            return __awaiter(this, void 0, void 0, function () {
                var info, firstName, lastName, username;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAuthenticated) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.setAuthHeaders()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.authAPI('loggedInUserDetails')];
                        case 2:
                            info = _a.sent();
                            firstName = info.firstName, lastName = info.lastName, username = info.username;
                            Object.assign(this._user, { firstName: firstName, lastName: lastName, username: username, info: info });
                            this._state.next(true);
                            this._waitForState = false;
                            this.updateActivity(true);
                            return [3 /*break*/, 5];
                        case 3:
                            this.updateActivity(false);
                            return [4 /*yield*/, this.setAuthHeaders()];
                        case 4:
                            _a.sent();
                            this._state.next(false);
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.setAuthHeaders = function (isOktaAuthenticated) {
            return __awaiter(this, void 0, void 0, function () {
                var headers, _a, role, token, username, _b, idToken;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            headers = this.dataService.headers;
                            delete headers.Authorization;
                            delete headers.PecosTokenType;
                            _a = this.cache, role = _a.role, token = _a.token, username = _a.username;
                            _b = role;
                            switch (_b) {
                                case 'Provider': return [3 /*break*/, 1];
                                case 'CMS': return [3 /*break*/, 2];
                            }
                            return [3 /*break*/, 3];
                        case 1:
                            if (token) {
                                headers.Authorization = "Bearer " + token.access_token;
                                headers.PecosTokenType = 'PROVIDER_AUTH_TOKEN';
                            }
                            else {
                                headers.Authorization = username;
                                headers.PecosTokenType = 'FAKE_PROVIDER_AUTH_TOKEN';
                            }
                            return [3 /*break*/, 5];
                        case 2:
                            headers.Authorization = 'CMS';
                            headers.PecosTokenType = 'FAKE_MAC_AUTH_TOKEN';
                            return [3 /*break*/, 5];
                        case 3:
                            if (!isOktaAuthenticated) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.oktaAuth.tokenManager.get('idToken')];
                        case 4:
                            idToken = _c.sent();
                            headers.Authorization = "Bearer " + idToken.value;
                            headers.PecosTokenType = 'MAC_AUTH_TOKEN';
                            _c.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.updateActivity = function (login) {
            return __awaiter(this, void 0, void 0, function () {
                var id, _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = this._activityId;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, , 7]);
                            if (!login) return [3 /*break*/, 3];
                            _a = this;
                            return [4 /*yield*/, this.authAPI('loginActivity', {})];
                        case 2:
                            _a._activityId = _b.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            if (!id) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.authAPI("logoutActivity?activityLogId=" + id, {})];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_1 = _b.sent();
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        return AuthService;
    }());
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(DataService), i0.ɵɵinject(i2.OktaAuthService), i0.ɵɵinject(i3.Router)); };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: DataService }, { type: i2.OktaAuthService }, { type: i3.Router }]; }, null);
    })();

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(auth) {
            this.auth = auth;
        }
        AuthGuard.prototype.canActivate = function (route, state) {
            return __awaiter(this, void 0, void 0, function () {
                var ok;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.auth.isAuthenticated()];
                        case 1:
                            ok = (_a.sent()) && this.isValidRole(route);
                            if (!ok)
                                this.auth.loginRedirect();
                            return [2 /*return*/, ok];
                    }
                });
            });
        };
        AuthGuard.prototype.canActivateChild = function (route, state) {
            return this.canActivate(route, state);
        };
        AuthGuard.prototype.isValidRole = function (route) {
            var role = this.auth.user.role;
            var roles = route.data.roles;
            return role && (!roles || roles.includes(role));
        };
        return AuthGuard;
    }());
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(AuthService)); };
    AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthGuard, [{
                type: i0.Injectable
            }], function () { return [{ type: AuthService }]; }, null);
    })();

    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        return AuthModule;
    }());
    AuthModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthModule });
    AuthModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
            AuthGuard,
            {
                provide: i2.OKTA_CONFIG,
                useFactory: function () {
                    var oktaConfig = {
                        clientId: '0oa6tmw4miQat1NYq297',
                        issuer: 'https://test.idp.idm.cms.gov/oauth2/aus6tmyyb6L0OyTyk297',
                        postLogoutRedirectUri: location.origin,
                        redirectUri: location.origin + "/login/cms",
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
        ], imports: [[i2.OktaAuthModule, i3.RouterModule.forRoot([])], i3.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { imports: [i2.OktaAuthModule, i3.RouterModule], exports: [i3.RouterModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.OktaAuthModule, i3.RouterModule.forRoot([])],
                        exports: [i3.RouterModule],
                        providers: [
                            AuthGuard,
                            {
                                provide: i2.OKTA_CONFIG,
                                useFactory: function () {
                                    var oktaConfig = {
                                        clientId: '0oa6tmw4miQat1NYq297',
                                        issuer: 'https://test.idp.idm.cms.gov/oauth2/aus6tmyyb6L0OyTyk297',
                                        postLogoutRedirectUri: location.origin,
                                        redirectUri: location.origin + "/login/cms",
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
            }], null, null);
    })();

    var headerLinks = function (includeEmulate) {
        if (includeEmulate === void 0) { includeEmulate = false; }
        var links = [
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
    var sideLinks = [
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
    var footerLinks = [
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

    function PecosUiComponent_form_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 14, 15);
            i0.ɵɵelementStart(2, "input", 16);
            i0.ɵɵlistener("keyup.enter", function PecosUiComponent_form_5_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r10_1); var _r8 = i0.ɵɵreference(1); return _r8.submit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.search);
        }
    }
    function PecosUiComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PecosUiComponent_aside_9_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0) { return { links: a0 }; };
    function PecosUiComponent_aside_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "aside", 17);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function PecosUiComponent_aside_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.sideNavExpanded = !ctx_r12.sideNavExpanded; });
            i0.ɵɵelement(2, "img", 19);
            i0.ɵɵelement(3, "img", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 21);
            i0.ɵɵtemplate(5, PecosUiComponent_aside_9_ng_container_5_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r6 = i0.ɵɵreference(16);
            i0.ɵɵclassProp("pecos-ui__aside--collapsed", !ctx_r2.sideNavExpanded)("pecos-ui__aside--expanded", ctx_r2.sideNavExpanded);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-expanded", ctx_r2.sideNavExpanded);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("d-none", ctx_r2.sideNavExpanded);
            i0.ɵɵpropertyInterpolate1("src", "", ctx_r2.iconsPath, "icon-expand.svg", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("d-none", !ctx_r2.sideNavExpanded);
            i0.ɵɵpropertyInterpolate1("src", "", ctx_r2.iconsPath, "icon-collapse.svg", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(13, _c0, ctx_r2.sideLinks));
        }
    }
    function PecosUiComponent_footer_12_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PecosUiComponent_footer_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 22);
            i0.ɵɵelementStart(1, "nav", 23);
            i0.ɵɵtemplate(2, PecosUiComponent_footer_12_ng_container_2_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            var _r6 = i0.ɵɵreference(16);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r3.footerLinks));
        }
    }
    function PecosUiComponent_ng_template_13_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 26);
            i0.ɵɵelement(1, "img", 27);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var link_r15 = i0.ɵɵnextContext().link;
            var ctx_r16 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate2("src", "", ctx_r16.iconsPath, "icon-", link_r15.icon, ".svg", i0.ɵɵsanitizeUrl);
        }
    }
    function PecosUiComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PecosUiComponent_ng_template_13_span_0_Template, 2, 2, "span", 24);
            i0.ɵɵelement(1, "span", 25);
        }
        if (rf & 2) {
            var link_r15 = ctx.link;
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", link_r15.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", link_r15.text.replace("%user%", ctx_r5.user.lastName ? ctx_r5.user.lastName + ", " + ctx_r5.user.firstName : ctx_r5.user.username), i0.ɵɵsanitizeHtml);
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1 = function (a0) { return { link: a0 }; };
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 34);
            i0.ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r28_1); var link_r20 = i0.ɵɵnextContext(2).$implicit; var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.toggle(link_r20); });
            i0.ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var link_r20 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵnextContext(2);
            var _r4 = i0.ɵɵreference(14);
            var _r6 = i0.ɵɵreference(16);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-expanded", !!link_r20.expanded);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, link_r20));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, link_r20.children));
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 35);
            i0.ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r33_1); var link_r20 = i0.ɵɵnextContext(2).$implicit; var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onClick(link_r20, $event); });
            i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template, 1, 0, "ng-container", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var link_r20 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵnextContext(2);
            var _r4 = i0.ɵɵreference(14);
            i0.ɵɵproperty("href", link_r20.href || "#", i0.ɵɵsanitizeUrl);
            i0.ɵɵattribute("rel", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "noopener noreferrer" : null)("target", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "_blank" : null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, link_r20));
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 31);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template, 4, 9, "ng-container", 32);
            i0.ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template, 2, 7, "a", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var link_r20 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", link_r20.roles, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", link_r20.children);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !link_r20.children);
        }
    }
    function PecosUiComponent_ng_template_15_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_Template, 4, 3, "li", 30);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var link_r20 = ctx.$implicit;
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !link_r20.role || link_r20.role.includes(ctx_r19.user.role) || link_r20.role.length === 0 && !ctx_r19.user.role);
        }
    }
    function PecosUiComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 28);
            i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_Template, 2, 1, "ng-container", 29);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var links_r18 = ctx.links;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", links_r18);
        }
    }
    var _c2 = ["*"];
    var PecosUiComponent = /** @class */ (function () {
        function PecosUiComponent(auth) {
            this.auth = auth;
            this.footerLinks = footerLinks;
            this.headerLinks = headerLinks(!/demo|impl/.test(location.host));
            this.search = 'Search';
            this.sideLinks = sideLinks;
            this.sideNavExpanded = false;
            this.iconsPath = '/assets/icons/page-framework/';
            this.user = this.auth.user;
        }
        PecosUiComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.auth.state.subscribe(function () { return (_this.user = _this.auth.user); });
        };
        PecosUiComponent.prototype.onDocumentClick = function (target) {
            if (this._activeLink &&
                !target.closest('.pecos-ui__link[aria-expanded="true"]')) {
                this._activeLink.expanded = false;
            }
        };
        PecosUiComponent.prototype.onClick = function (link, e) {
            if (link.href === '/logout') {
                e.preventDefault();
                this.auth.logout();
            }
            else if (link.emulate) {
                e.preventDefault();
                this.auth.login(link.emulate);
            }
        };
        PecosUiComponent.prototype.toggle = function (link) {
            if (this._activeLink && this._activeLink !== link) {
                this._activeLink.expanded = false;
            }
            link.expanded = !link.expanded;
            this._activeLink = link;
        };
        return PecosUiComponent;
    }());
    PecosUiComponent.ɵfac = function PecosUiComponent_Factory(t) { return new (t || PecosUiComponent)(i0.ɵɵdirectiveInject(AuthService)); };
    PecosUiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PecosUiComponent, selectors: [["pecos-ui"]], hostAttrs: [1, "pecos-ui"], hostBindings: function PecosUiComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function PecosUiComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event.target); }, false, i0.ɵɵresolveDocument);
            }
        }, inputs: { footerLinks: "footerLinks", headerLinks: "headerLinks", search: "search", sideLinks: "sideLinks", sideNavExpanded: "sideNavExpanded" }, ngContentSelectors: _c2, decls: 17, vars: 8, consts: [[1, "pecos-ui__header"], [1, "pecos-ui__header__logo"], ["href", "/"], ["alt", "PECOS logo", 3, "src"], [1, "pecos-ui__header__search"], ["action", "/search", "class", "pecos-ui__header__search__form", "method", "get", 4, "ngIf"], [1, "pecos-ui__header__links"], ["aria-label", "main", 1, "pecos-ui__nav"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "pecos-ui__aside", 3, "pecos-ui__aside--collapsed", "pecos-ui__aside--expanded", 4, "ngIf"], ["id", "pecos-ui-main", 1, "pecos-ui__main"], ["class", "pecos-ui__footer", 4, "ngIf"], ["linkTemplate", ""], ["listTemplate", ""], ["action", "/search", "method", "get", 1, "pecos-ui__header__search__form"], ["searchForm", ""], ["aria-label", "search site", "name", "q", "type", "search", 1, "pecos-ui__header__search__input", 3, "placeholder", "keyup.enter"], [1, "pecos-ui__aside"], ["aria-controls", "pecos-ui-site-nav", "aria-label", "site navigation section", 1, "pecos-ui__aside__toggle", 3, "click"], ["alt", "expand", 1, "pecos-ui__icon__expand", 3, "src"], ["alt", "collapse", 1, "pecos-ui__icon__collapse", 3, "src"], ["aria-label", "site", "id", "pecos-ui-site-nav", 1, "pecos-ui__nav"], [1, "pecos-ui__footer"], ["aria-label", "footer", 1, "pecos-ui__nav"], ["class", "pecos-ui__link__icon", 4, "ngIf"], [1, "pecos-ui__link__text", 3, "innerHTML"], [1, "pecos-ui__link__icon"], ["alt", "", 3, "src"], [1, "pecos-ui__list"], [4, "ngFor", "ngForOf"], ["class", "pecos-ui__list__item", 4, "ngIf"], [1, "pecos-ui__list__item"], [4, "ngIf"], ["class", "pecos-ui__link", 3, "href", "click", 4, "ngIf"], ["type", "button", 1, "pecos-ui__link", 3, "click"], [1, "pecos-ui__link", 3, "href", "click"]], template: function PecosUiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "header", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "a", 2);
                i0.ɵɵelement(3, "img", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵtemplate(5, PecosUiComponent_form_5_Template, 3, 1, "form", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵelementStart(7, "nav", 7);
                i0.ɵɵtemplate(8, PecosUiComponent_ng_container_8_Template, 1, 0, "ng-container", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, PecosUiComponent_aside_9_Template, 6, 15, "aside", 9);
                i0.ɵɵelementStart(10, "main", 10);
                i0.ɵɵprojection(11);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(12, PecosUiComponent_footer_12_Template, 3, 4, "footer", 11);
                i0.ɵɵtemplate(13, PecosUiComponent_ng_template_13_Template, 2, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(15, PecosUiComponent_ng_template_15_Template, 2, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r6 = i0.ɵɵreference(16);
                i0.ɵɵadvance(3);
                i0.ɵɵpropertyInterpolate1("src", "", ctx.iconsPath, "icon-pecos-logo.svg", i0.ɵɵsanitizeUrl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.user.role);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c0, ctx.headerLinks));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.sideLinks.length);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.footerLinks.length);
            }
        }, directives: [i2$1.NgIf, i2$1.NgTemplateOutlet, i3$1.ɵangular_packages_forms_forms_y, i3$1.NgControlStatusGroup, i3$1.NgForm, i2$1.NgForOf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PecosUiComponent, [{
                type: i0.Component,
                args: [{
                        host: { class: 'pecos-ui' },
                        selector: 'pecos-ui',
                        template: "\n    <header class=\"pecos-ui__header\">\n      <div class=\"pecos-ui__header__logo\">\n        <a href=\"/\">\n          <img src=\"{{ iconsPath }}icon-pecos-logo.svg\" alt=\"PECOS logo\" />\n        </a>\n      </div>\n      <div class=\"pecos-ui__header__search\">\n        <form\n          *ngIf=\"user.role\"\n          action=\"/search\"\n          class=\"pecos-ui__header__search__form\"\n          method=\"get\"\n          #searchForm\n        >\n          <input\n            aria-label=\"search site\"\n            class=\"pecos-ui__header__search__input\"\n            name=\"q\"\n            placeholder=\"{{ search }}\"\n            (keyup.enter)=\"searchForm.submit()\"\n            type=\"search\"\n          />\n        </form>\n      </div>\n      <div class=\"pecos-ui__header__links\">\n        <nav class=\"pecos-ui__nav\" aria-label=\"main\">\n          <ng-container\n            *ngTemplateOutlet=\"listTemplate; context: { links: headerLinks }\"\n          ></ng-container>\n        </nav>\n      </div>\n    </header>\n    <aside\n      *ngIf=\"sideLinks.length\"\n      class=\"pecos-ui__aside\"\n      [class.pecos-ui__aside--collapsed]=\"!sideNavExpanded\"\n      [class.pecos-ui__aside--expanded]=\"sideNavExpanded\"\n    >\n      <button\n        aria-controls=\"pecos-ui-site-nav\"\n        [attr.aria-expanded]=\"sideNavExpanded\"\n        aria-label=\"site navigation section\"\n        class=\"pecos-ui__aside__toggle\"\n        (click)=\"sideNavExpanded = !sideNavExpanded\"\n      >\n        <img\n          class=\"pecos-ui__icon__expand\"\n          [class.d-none]=\"sideNavExpanded\"\n          src=\"{{ iconsPath }}icon-expand.svg\"\n          alt=\"expand\"\n        />\n        <img\n          class=\"pecos-ui__icon__collapse\"\n          [class.d-none]=\"!sideNavExpanded\"\n          src=\"{{ iconsPath }}icon-collapse.svg\"\n          alt=\"collapse\"\n        />\n      </button>\n      <nav class=\"pecos-ui__nav\" aria-label=\"site\" id=\"pecos-ui-site-nav\">\n        <ng-container\n          *ngTemplateOutlet=\"listTemplate; context: { links: sideLinks }\"\n        ></ng-container>\n      </nav>\n    </aside>\n    <main class=\"pecos-ui__main\" id=\"pecos-ui-main\">\n      <ng-content></ng-content>\n    </main>\n    <footer class=\"pecos-ui__footer\" *ngIf=\"footerLinks.length\">\n      <nav class=\"pecos-ui__nav\" aria-label=\"footer\">\n        <ng-container\n          *ngTemplateOutlet=\"listTemplate; context: { links: footerLinks }\"\n        ></ng-container>\n      </nav>\n    </footer>\n\n    <ng-template #linkTemplate let-link=\"link\">\n      <span class=\"pecos-ui__link__icon\" *ngIf=\"link.icon\">\n      <img src=\"{{ iconsPath }}icon-{{ link.icon }}.svg\" alt=\"\" />\n      </span>\n      <span\n        class=\"pecos-ui__link__text\"\n        [innerHTML]=\"\n          link.text.replace(\n            '%user%',\n            user.lastName\n              ? user.lastName + ', ' + user.firstName\n              : user.username\n          )\n        \"\n      ></span>\n    </ng-template>\n\n    <ng-template #listTemplate let-links=\"links\">\n      <ul class=\"pecos-ui__list\">\n        <ng-container *ngFor=\"let link of links\">\n          <li\n            *ngIf=\"\n              !link.role ||\n              link.role.includes(user.role) ||\n              (link.role.length === 0 && !user.role)\n            \"\n            class=\"pecos-ui__list__item\"\n          >\n            {{ link.roles }}\n            <ng-container *ngIf=\"link.children\">\n              <button\n                [attr.aria-expanded]=\"!!link.expanded\"\n                class=\"pecos-ui__link\"\n                (click)=\"toggle(link)\"\n                type=\"button\"\n              >\n                <ng-container\n                  *ngTemplateOutlet=\"linkTemplate; context: { link: link }\"\n                ></ng-container>\n              </button>\n              <ng-container\n                *ngTemplateOutlet=\"\n                  listTemplate;\n                  context: { links: link.children }\n                \"\n              ></ng-container>\n            </ng-container>\n            <a\n              *ngIf=\"!link.children\"\n              class=\"pecos-ui__link\"\n              [attr.rel]=\"\n                link.href?.startsWith('http') ? 'noopener noreferrer' : null\n              \"\n              [attr.target]=\"link.href?.startsWith('http') ? '_blank' : null\"\n              (click)=\"onClick(link, $event)\"\n              [href]=\"link.href || '#'\"\n              ><ng-container\n                *ngTemplateOutlet=\"linkTemplate; context: { link: link }\"\n              ></ng-container>\n            </a>\n          </li>\n        </ng-container>\n      </ul>\n    </ng-template>\n  ",
                    }]
            }], function () { return [{ type: AuthService }]; }, { footerLinks: [{
                    type: i0.Input
                }], headerLinks: [{
                    type: i0.Input
                }], search: [{
                    type: i0.Input
                }], sideLinks: [{
                    type: i0.Input
                }], sideNavExpanded: [{
                    type: i0.Input
                }], onDocumentClick: [{
                    type: i0.HostListener,
                    args: ['document:click', ['$event.target']]
                }] });
    })();

    var ZipCodePipe = /** @class */ (function () {
        function ZipCodePipe() {
        }
        ZipCodePipe.prototype.transform = function (value) {
            var zip = value;
            if (zip && zip.length > 5) {
                if (zip.includes('-'))
                    return zip;
                return zip.substr(0, 5) + "-" + zip.substr(5);
            }
            else {
                return zip;
            }
        };
        return ZipCodePipe;
    }());
    ZipCodePipe.ɵfac = function ZipCodePipe_Factory(t) { return new (t || ZipCodePipe)(); };
    ZipCodePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "zipCode", type: ZipCodePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ZipCodePipe, [{
                type: i0.Pipe,
                args: [{ name: 'zipCode' }]
            }], null, null);
    })();

    var AddressPipe = /** @class */ (function () {
        function AddressPipe() {
        }
        AddressPipe.prototype.transform = function (o, isHTML, applyTitleCase, pattern, emptyValue) {
            if (isHTML === void 0) { isHTML = false; }
            if (applyTitleCase === void 0) { applyTitleCase = true; }
            if (pattern === void 0) { pattern = 'default'; }
            if (emptyValue === void 0) { emptyValue = '-'; }
            if (!o)
                return emptyValue;
            var line1 = o.addressLine1 || o.addrLine1 || o.street1 || '';
            var line2 = o.addressLine2 || o.addrLine2 || o.street2 || '';
            var city = o.city || o.cityName || '';
            var state = o.state || o.stateCd || o.stateCode || o.addressStateCode || '';
            var zip = o.zip || o.zipCd || o.zipCode || o.zipcode || '';
            var all = line1 + line2 + city + state + zip;
            if (all.trim() === '')
                return emptyValue;
            if (zip)
                zip = new ZipCodePipe().transform(zip);
            if (applyTitleCase === true) {
                var titleCasePipe = new i2$1.TitleCasePipe();
                line1 = titleCasePipe.transform(line1);
                line2 = titleCasePipe.transform(line2);
                city = titleCasePipe.transform(city);
            }
            var usps = pattern === 'usps';
            var lines = [line1];
            if (line2)
                lines.push(line2);
            if (isHTML) {
                var s = '';
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
                return "<address>" + s + "</address>";
            }
            else {
                return [lines.join(' '), city, state, zip]
                    .map(function (s) { return s.trim(); })
                    .filter(function (s) { return s !== ''; })
                    .join(', ');
            }
        };
        return AddressPipe;
    }());
    AddressPipe.ɵfac = function AddressPipe_Factory(t) { return new (t || AddressPipe)(); };
    AddressPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "address", type: AddressPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AddressPipe, [{
                type: i0.Pipe,
                args: [{ name: 'address' }]
            }], null, null);
    })();

    var DATE_FORMAT = 'MM/dd/yyyy';
    var YEAR_DATE_FORMAT = 'yyyy-MM-dd';
    var isUTCTimeZone = /\+0000$/;
    var DateFormatPipe = /** @class */ (function () {
        function DateFormatPipe() {
            this.datePipe = new i2$1.DatePipe('en-US');
        }
        DateFormatPipe.prototype.transform = function (value, nullValue, isDateYearFormat) {
            if (nullValue === void 0) { nullValue = '-'; }
            if (value === null || !value || value === '-') {
                return nullValue;
                //if it's a masked DOB just return it as-is b/c it's already formatted
            }
            else if (value.includes('XX')) {
                return value;
            }
            var timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
            return this.datePipe.transform(value, isDateYearFormat ? YEAR_DATE_FORMAT : DATE_FORMAT, timezone);
        };
        return DateFormatPipe;
    }());
    DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
    DateFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormat", type: DateFormatPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateFormatPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'dateFormat',
                    }]
            }], null, null);
    })();

    var EmptyDashPipe = /** @class */ (function () {
        function EmptyDashPipe() {
        }
        EmptyDashPipe.prototype.transform = function (value) {
            if (value === null ||
                value === '' ||
                value === undefined ||
                value === ' ') {
                return '-';
            }
            else
                return value;
        };
        return EmptyDashPipe;
    }());
    EmptyDashPipe.ɵfac = function EmptyDashPipe_Factory(t) { return new (t || EmptyDashPipe)(); };
    EmptyDashPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "emptyDash", type: EmptyDashPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmptyDashPipe, [{
                type: i0.Pipe,
                args: [{ name: 'emptyDash' }]
            }], null, null);
    })();

    var hasValue = function (o, fn) {
        switch (Object.prototype.toString.call(o).charAt(8)) {
            case 'O':
                return Object.values(o).some(function (value) { return hasValue(value, fn); });
            case 'A':
                return o.some(function (child) { return hasValue(child, fn); });
            default:
                return fn(o);
        }
    };
    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        FilterPipe.prototype.transform = function (items, value) {
            return FilterPipe.filter(items, value);
        };
        FilterPipe.filter = function (items, value) {
            var lowerValue = value.toLowerCase();
            var testValue = function (v) { return String(v !== null && v !== void 0 ? v : '')
                .toLowerCase()
                .indexOf(lowerValue) > -1; };
            return items.filter(function (item) { return hasValue(item, testValue); });
        };
        return FilterPipe;
    }());
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterPipe, [{
                type: i0.Pipe,
                args: [{ name: 'filter' }]
            }], null, null);
    })();

    var FullNamePipe = /** @class */ (function () {
        function FullNamePipe() {
        }
        FullNamePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'f m l s'; }
            var safeValue = value !== null && value !== void 0 ? value : {};
            var f = safeValue.firstName, l = safeValue.lastName, m = safeValue.middleName, _a = safeValue.middleInitial, mi = _a === void 0 ? (m || '').trim().charAt(0) : _a, _b = safeValue.suffix, suffix = _b === void 0 ? '' : _b;
            var s = (suffix !== null && suffix !== void 0 ? suffix : '').trim().replace('N/A', '');
            var macro = pattern
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
        };
        return FullNamePipe;
    }());
    FullNamePipe.ɵfac = function FullNamePipe_Factory(t) { return new (t || FullNamePipe)(); };
    FullNamePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "fullName", type: FullNamePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FullNamePipe, [{
                type: i0.Pipe,
                args: [{ name: 'fullName' }]
            }], null, null);
    })();

    var HighlightKeywordPipe = /** @class */ (function () {
        function HighlightKeywordPipe(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        HighlightKeywordPipe.prototype.transform = function (list, searchText, type) {
            if (!list) {
                return '';
            }
            if (!searchText ||
                searchText.indexOf('*') === 0 ||
                list === '-' ||
                type !== 'search') {
                return list;
            }
            var sText = searchText.trim();
            var sList = list && list.toString();
            var regex = new RegExp(sText, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
            var value = sList.replace(regex, '<span style="background-color:#FFF3BD">$&</span>');
            return this._sanitizer.bypassSecurityTrustHtml(value);
        };
        return HighlightKeywordPipe;
    }());
    HighlightKeywordPipe.ɵfac = function HighlightKeywordPipe_Factory(t) { return new (t || HighlightKeywordPipe)(i0.ɵɵdirectiveInject(i1$1.DomSanitizer)); };
    HighlightKeywordPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "highlightKeyword", type: HighlightKeywordPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HighlightKeywordPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'highlightKeyword',
                    }]
            }], function () { return [{ type: i1$1.DomSanitizer }]; }, null);
    })();

    var PhoneNumberPipe = /** @class */ (function () {
        function PhoneNumberPipe() {
        }
        PhoneNumberPipe.prototype.transform = function (value) {
            if (value) {
                value = value.replace(/\D/g, '');
                if (value.length <= 10) {
                    return "(" + value.substr(0, 3) + ") " + value.substr(3, 3) + "-" + value.substr(6);
                }
                else {
                    return "(" + value.substr(0, 3) + ") " + value.substr(3, 3) + "-" + value.substr(6, 4) + " ext " + value.substr(10);
                }
            }
            else {
                return '-';
            }
        };
        return PhoneNumberPipe;
    }());
    PhoneNumberPipe.ɵfac = function PhoneNumberPipe_Factory(t) { return new (t || PhoneNumberPipe)(); };
    PhoneNumberPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "phoneNumber", type: PhoneNumberPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PhoneNumberPipe, [{
                type: i0.Pipe,
                args: [{ name: 'phoneNumber' }]
            }], null, null);
    })();

    var TimeFormatPipe = /** @class */ (function (_super) {
        __extends(TimeFormatPipe, _super);
        function TimeFormatPipe() {
            return _super.call(this, 'en-US') || this;
        }
        TimeFormatPipe.prototype.transform = function (value, nullValue) {
            if (nullValue === void 0) { nullValue = '-'; }
            if (value === null)
                return nullValue;
            var timezone = isUTCTimeZone.test(value) ? 'UTC' : undefined;
            return _super.prototype.transform.call(this, value, 'shortTime', timezone);
        };
        return TimeFormatPipe;
    }(i2$1.DatePipe));
    TimeFormatPipe.ɵfac = function TimeFormatPipe_Factory(t) { return new (t || TimeFormatPipe)(); };
    TimeFormatPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "timeFormat", type: TimeFormatPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TimeFormatPipe, [{
                type: i0.Pipe,
                args: [{ name: 'timeFormat' }]
            }], function () { return []; }, null);
    })();

    var format = function (s, pattern, i) {
        if (s === void 0) { s = ''; }
        if (pattern === void 0) { pattern = ''; }
        if (i === void 0) { i = 0; }
        return pattern.replace(/#/g, function () { return s[i++] || ''; });
    };
    var TinPipe = /** @class */ (function () {
        function TinPipe() {
        }
        TinPipe.prototype.transform = function (_a, isTokenized) {
            var id = _a.id, _b = _a.idType, idType = _b === void 0 ? 'ein' : _b;
            if (isTokenized === void 0) { isTokenized = false; }
            var tin = String(id !== null && id !== void 0 ? id : '').replace(/-/g, '');
            if (tin === '')
                return '-';
            if ('ssn' === idType) {
                if (isTokenized) {
                    tin = "XXXXX" + tin.slice(-4);
                }
                tin = format(tin, '###-##-####');
            }
            else {
                tin = format(tin, '##-#######');
            }
            return tin;
        };
        return TinPipe;
    }());
    TinPipe.ɵfac = function TinPipe_Factory(t) { return new (t || TinPipe)(); };
    TinPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "TIN", type: TinPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TinPipe, [{
                type: i0.Pipe,
                args: [{ name: 'TIN' }]
            }], null, null);
    })();

    var TitleCaseExtendedPipe = /** @class */ (function (_super) {
        __extends(TitleCaseExtendedPipe, _super);
        function TitleCaseExtendedPipe() {
            return _super.call(this) || this;
        }
        TitleCaseExtendedPipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!value)
                return null;
            var words = value.split(' ');
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
        };
        TitleCaseExtendedPipe.prototype.isAbbreviation = function (word) {
            //this method will override any words you need full capitalized
            var upperCaseWords = ['II', 'III', 'IV']; // add more words to include here, currently suffixes
            return upperCaseWords.includes(word.toUpperCase());
        };
        TitleCaseExtendedPipe.prototype.forSpecialCharacters = function (str) {
            //this method will uppercase letters after a hyphen or slash or whitespace
            return str.toLowerCase().replace(/(?:^|\s|\/|\-|\()\w/g, function (match) {
                return match.toUpperCase();
            });
        };
        return TitleCaseExtendedPipe;
    }(i2$1.TitleCasePipe));
    TitleCaseExtendedPipe.ɵfac = function TitleCaseExtendedPipe_Factory(t) { return new (t || TitleCaseExtendedPipe)(); };
    TitleCaseExtendedPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "titleCaseExtended", type: TitleCaseExtendedPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TitleCaseExtendedPipe, [{
                type: i0.Pipe,
                args: [{ name: 'titleCaseExtended' }]
            }], function () { return []; }, null);
    })();

    var AnnouncerService = /** @class */ (function () {
        function AnnouncerService() {
            var el = (this._element = document.createElement('div'));
            el.className = 'sr-only';
            el.setAttribute('aria-live', 'polite');
            el.setAttribute('role', 'status');
            document.body.appendChild(el);
        }
        AnnouncerService.prototype.announce = function (text) {
            var _this = this;
            this._element.textContent = '';
            setTimeout(function () {
                _this._element.textContent = text;
            }, 100);
        };
        return AnnouncerService;
    }());
    AnnouncerService.ɵfac = function AnnouncerService_Factory(t) { return new (t || AnnouncerService)(); };
    AnnouncerService.ɵprov = i0.ɵɵdefineInjectable({ token: AnnouncerService, factory: AnnouncerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnnouncerService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return []; }, null);
    })();

    var sortByKey = function (key) { return function (a, b) { return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0; }; };
    var ReferenceDataService = /** @class */ (function () {
        function ReferenceDataService(dataService) {
            this.dataService = dataService;
            this.cache = {};
        }
        ReferenceDataService.prototype.api = function (path) {
            if (path === void 0) { path = '/referenceData'; }
            return this.dataService.api("/reference" + path).toPromise();
        };
        ReferenceDataService.prototype.getByType = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache[type];
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api("/referenceByType/" + type)];
                        case 1:
                            data = _a.sent();
                            list = data._embedded.codeReferenceDTOList;
                            list.sort(sortByKey('value'));
                            this.cache[type] = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)]; // return a copy
                        case 3:
                            e_1 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getDocumentTypeByCategory = function (categoryType) {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache[categoryType];
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api("/reference/documentType/" + (categoryType || ''))];
                        case 1:
                            data = _a.sent();
                            list = data;
                            list.sort(sortByKey('code'));
                            this.cache[categoryType] = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)]; // return a copy
                        case 3:
                            e_2 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getDocumentCategories = function () {
            return this.getByType('Document Category');
        };
        ReferenceDataService.prototype.getCountries = function () {
            return this.getByType('Country Code');
        };
        ReferenceDataService.prototype.getEvents = function () {
            return this.getByType('event');
        };
        ReferenceDataService.prototype.getEventsByReferenceType = function (referenceType) {
            return this.getByType("event/" + referenceType);
        };
        ReferenceDataService.prototype.getFlagTypes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache.flagTypes;
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api('/flagTypes')];
                        case 1:
                            data = _a.sent();
                            list = data._embedded.pecosFlagReferenceDTOList;
                            list.sort(sortByKey('label'));
                            this.cache.flagTypes = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)];
                        case 3:
                            e_3 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getLineOfBusinessInfo = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var formType, _a, physicianInd, _b, specialtyCode, cacheKey, data, qs, e_4;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            formType = options.formType, _a = options.physicianInd, physicianInd = _a === void 0 ? '' : _a, _b = options.specialtyCode, specialtyCode = _b === void 0 ? '' : _b;
                            if (!formType) {
                                throw new Error("formType must be supplied.");
                            }
                            cacheKey = __spread(['lob'], Object.values(options)).join('-');
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 4, , 5]);
                            data = this.cache[cacheKey];
                            if (!!data) return [3 /*break*/, 3];
                            qs = "physicianInd=" + physicianInd + "&specialtyCode=" + specialtyCode;
                            return [4 /*yield*/, this.api("/getFormLineOfBusinessInfo/" + formType + "?" + qs)];
                        case 2:
                            data = _c.sent();
                            this.cache[cacheKey] = data;
                            _c.label = 3;
                        case 3: return [2 /*return*/, data];
                        case 4:
                            e_4 = _c.sent();
                            return [2 /*return*/, null];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getMacGroups = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache.macGroups;
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api('/macGroups')];
                        case 1:
                            data = _a.sent();
                            list = data._embedded.contractorGroupDTOList;
                            list.sort(sortByKey('value'));
                            this.cache.macGroups = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)];
                        case 3:
                            e_5 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getNameSuffixes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
                    try {
                        list = this.cache.nameSuffixes;
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
                        return [2 /*return*/, __spread(list)];
                    }
                    catch (e) {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
                });
            });
        };
        ReferenceDataService.prototype.getPecosUsers = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache.pecosUsers;
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api('/pecosUser')];
                        case 1:
                            data = _a.sent();
                            list = data._embedded.pecosUserDTOList;
                            list.sort(sortByKey('cmsUserId'));
                            this.cache.pecosUsers = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)];
                        case 3:
                            e_6 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getSpecialties = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            list = this.cache.specialties;
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api('/referenceData/specialties')];
                        case 1:
                            data = _a.sent();
                            list = data._embedded.pecosReferenceDataDTOList;
                            list.sort(sortByKey('codeDescription'));
                            this.cache.specialties = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)];
                        case 3:
                            e_7 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getSpecialtiesByFormType = function (formType, providerType) {
            if (providerType === void 0) { providerType = 'NA'; }
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, list, data, e_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = "specialties-" + formType + "-" + providerType;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            list = this.cache[cacheKey];
                            if (!!list) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.api("/specialtyRef/" + formType + "/" + providerType)];
                        case 2:
                            data = _a.sent();
                            list = data._embedded.specialtyReferenceDTOList;
                            list.sort(sortByKey('specialtyReferenceDesc'));
                            this.cache[cacheKey] = list;
                            _a.label = 3;
                        case 3: return [2 /*return*/, __spread(list)];
                        case 4:
                            e_8 = _a.sent();
                            return [2 /*return*/, []];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getSpecialtiesWithFormType = function () {
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, list, data, e_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = "specialties-with-form-type";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            list = this.cache[cacheKey];
                            if (!!list) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.api("/referenceByType/specialties")];
                        case 2:
                            data = _a.sent();
                            list = data._embedded.specialtyReferenceDTOList;
                            list.sort(sortByKey('specialtyReferenceDesc'));
                            this.cache[cacheKey] = list;
                            _a.label = 3;
                        case 3: return [2 /*return*/, __spread(list)];
                        case 4:
                            e_9 = _a.sent();
                            return [2 /*return*/, []];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.getStates = function () {
            return this.getByType('State Code');
        };
        ReferenceDataService.prototype.getVehicleTypes = function () {
            return this.getByType('Vehicle Type');
        };
        ReferenceDataService.prototype.getDispositionReasons = function (reasonType) {
            return __awaiter(this, void 0, void 0, function () {
                var list, data, e_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            if (!this.cache.dispositionReasons) {
                                this.cache.dispositionReasons = [];
                            }
                            list = this.cache.dispositionReasons[reasonType];
                            if (!!list) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.api("/disposition-reason/" + reasonType)];
                        case 1:
                            data = _a.sent();
                            list = data;
                            list.sort(sortByKey('conceptReasonSubtype'));
                            this.cache.dispositionReasons[reasonType] = list;
                            _a.label = 2;
                        case 2: return [2 /*return*/, __spread(list)];
                        case 3:
                            e_10 = _a.sent();
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReferenceDataService.prototype.fetchRfiCorrespondenceSection = function (applicationEnum) {
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, list, csData, e_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = 'rfi' + applicationEnum;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            if (!this.cache[cacheKey]) {
                                this.cache[cacheKey] = [];
                            }
                            list = this.cache[cacheKey];
                            if (!(list.length === 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.dataService.api('/content/rfiCorrespondenceSections/' + applicationEnum).toPromise()];
                        case 2:
                            csData = _a.sent();
                            this.cache[cacheKey] = csData;
                            list = csData;
                            _a.label = 3;
                        case 3: return [2 /*return*/, list];
                        case 4:
                            e_11 = _a.sent();
                            return [2 /*return*/, []];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return ReferenceDataService;
    }());
    ReferenceDataService.ɵfac = function ReferenceDataService_Factory(t) { return new (t || ReferenceDataService)(i0.ɵɵinject(DataService)); };
    ReferenceDataService.ɵprov = i0.ɵɵdefineInjectable({ token: ReferenceDataService, factory: ReferenceDataService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ReferenceDataService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: DataService }]; }, null);
    })();

    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        StorageService.prototype.getItem = function (key, defaultValue) {
            var value = sessionStorage.getItem(key);
            if (value !== null) {
                return JSON.parse(value);
            }
            return defaultValue;
        };
        StorageService.prototype.setItem = function (key, data) {
            var value = JSON.stringify(data);
            sessionStorage.setItem(key, value);
        };
        StorageService.prototype.removeItem = function (key) {
            sessionStorage.removeItem(key);
        };
        return StorageService;
    }());
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StorageService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();

    var uids = {};
    var UID = function (ns) {
        if (ns === void 0) { ns = 'uid'; }
        if (!uids[ns])
            uids[ns] = 0;
        return ns + "-" + ++uids[ns];
    };

    var components = [PecosUiComponent];
    var imports = [
        i2$1.CommonModule,
        i3$1.FormsModule,
        i1.HttpClientModule,
        i3$1.ReactiveFormsModule,
        AuthModule,
    ];
    var pipes = [
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
    var PecosUiCoreModule = /** @class */ (function () {
        function PecosUiCoreModule() {
        }
        return PecosUiCoreModule;
    }());
    PecosUiCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: PecosUiCoreModule });
    PecosUiCoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PecosUiCoreModule_Factory(t) { return new (t || PecosUiCoreModule)(); }, imports: [imports, i2$1.CommonModule,
            i3$1.FormsModule,
            i1.HttpClientModule,
            i3$1.ReactiveFormsModule,
            AuthModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PecosUiCoreModule, { declarations: [AddressPipe, DateFormatPipe, EmptyDashPipe, FilterPipe, FullNamePipe, HighlightKeywordPipe, PhoneNumberPipe, TimeFormatPipe, TinPipe, TitleCaseExtendedPipe, ZipCodePipe, PecosUiComponent], imports: [i2$1.CommonModule,
                i3$1.FormsModule,
                i1.HttpClientModule,
                i3$1.ReactiveFormsModule,
                AuthModule], exports: [i2$1.CommonModule,
                i3$1.FormsModule,
                i1.HttpClientModule,
                i3$1.ReactiveFormsModule,
                AuthModule, AddressPipe, DateFormatPipe, EmptyDashPipe, FilterPipe, FullNamePipe, HighlightKeywordPipe, PhoneNumberPipe, TimeFormatPipe, TinPipe, TitleCaseExtendedPipe, ZipCodePipe, PecosUiComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PecosUiCoreModule, [{
                type: i0.NgModule,
                args: [{
                        imports: imports,
                        declarations: __spread(pipes, components),
                        exports: __spread(imports, pipes, components),
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of pecos-ui-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AddressPipe = AddressPipe;
    exports.AnnouncerService = AnnouncerService;
    exports.AuthGuard = AuthGuard;
    exports.AuthModule = AuthModule;
    exports.AuthService = AuthService;
    exports.DATE_FORMAT = DATE_FORMAT;
    exports.DataService = DataService;
    exports.DateFormatPipe = DateFormatPipe;
    exports.EmptyDashPipe = EmptyDashPipe;
    exports.FilterPipe = FilterPipe;
    exports.FullNamePipe = FullNamePipe;
    exports.HighlightKeywordPipe = HighlightKeywordPipe;
    exports.PecosUiComponent = PecosUiComponent;
    exports.PecosUiCoreModule = PecosUiCoreModule;
    exports.PhoneNumberPipe = PhoneNumberPipe;
    exports.ReferenceDataService = ReferenceDataService;
    exports.StorageService = StorageService;
    exports.TimeFormatPipe = TimeFormatPipe;
    exports.TinPipe = TinPipe;
    exports.TitleCaseExtendedPipe = TitleCaseExtendedPipe;
    exports.UID = UID;
    exports.YEAR_DATE_FORMAT = YEAR_DATE_FORMAT;
    exports.ZipCodePipe = ZipCodePipe;
    exports.generateUUID = generateUUID;
    exports.hasValue = hasValue;
    exports.isUTCTimeZone = isUTCTimeZone;
    exports.sortByKey = sortByKey;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pecos-pecos-ui-core.umd.js.map
