import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthGuard } from './auth.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthModule {
}
AuthModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthModule });
AuthModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { imports: [OktaAuthModule, i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiQzovc291cmNlL01GRS9wZWNvcy11aS1jb3JlLW1hc3Rlci9wZWNvcy11aS1jb3JlLW1hc3Rlci9zcmMvbGliLyIsInNvdXJjZXMiOlsiYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBYyxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQW1DekMsTUFBTSxPQUFPLFVBQVU7OzhDQUFWLFVBQVU7bUdBQVYsVUFBVSxtQkE5QlY7UUFDVCxTQUFTO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsV0FBVztZQUNwQixVQUFVO2dCQUNSLE1BQU0sVUFBVSxHQUFlO29CQUM3QixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxNQUFNLEVBQUUsMERBQTBEO29CQUNsRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsTUFBTTtvQkFDdEMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sWUFBWTtvQkFDM0MsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7aUJBQ2xDLENBQUM7Z0JBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7d0JBQ3hCLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLE1BQU0sRUFBRSwwREFBMEQ7cUJBQ25FLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTt3QkFDeEIsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsTUFBTSxFQUFFLGlEQUFpRDtxQkFDMUQsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sVUFBVSxDQUFDO1lBQ3BCLENBQUM7U0FDRjtLQUNGLFlBOUJRLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekMsWUFBWTt3RkErQlgsVUFBVSxjQWhDWCxjQUFjLDhCQUNkLFlBQVk7a0RBK0JYLFVBQVU7Y0FqQ3RCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1QsU0FBUztvQkFDVDt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsVUFBVTs0QkFDUixNQUFNLFVBQVUsR0FBZTtnQ0FDN0IsUUFBUSxFQUFFLHNCQUFzQjtnQ0FDaEMsTUFBTSxFQUFFLDBEQUEwRDtnQ0FDbEUscUJBQXFCLEVBQUUsUUFBUSxDQUFDLE1BQU07Z0NBQ3RDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLFlBQVk7Z0NBQzNDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO2dDQUN0QyxZQUFZLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFOzZCQUNsQyxDQUFDOzRCQUNGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO29DQUN4QixRQUFRLEVBQUUsc0JBQXNCO29DQUNoQyxNQUFNLEVBQUUsMERBQTBEO2lDQUNuRSxDQUFDLENBQUM7NkJBQ0o7NEJBQ0QsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0NBQ3hCLFFBQVEsRUFBRSxzQkFBc0I7b0NBQ2hDLE1BQU0sRUFBRSxpREFBaUQ7aUNBQzFELENBQUMsQ0FBQzs2QkFDSjs0QkFDRCxPQUFPLFVBQVUsQ0FBQzt3QkFDcEIsQ0FBQztxQkFDRjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPS1RBX0NPTkZJRywgT2t0YUF1dGhNb2R1bGUsIE9rdGFDb25maWcgfSBmcm9tICdAb2t0YS9va3RhLWFuZ3VsYXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW09rdGFBdXRoTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aEd1YXJkLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE9LVEFfQ09ORklHLFxuICAgICAgdXNlRmFjdG9yeSgpIHtcbiAgICAgICAgY29uc3Qgb2t0YUNvbmZpZzogT2t0YUNvbmZpZyA9IHtcbiAgICAgICAgICBjbGllbnRJZDogJzBvYTZ0bXc0bWlRYXQxTllxMjk3JyxcbiAgICAgICAgICBpc3N1ZXI6ICdodHRwczovL3Rlc3QuaWRwLmlkbS5jbXMuZ292L29hdXRoMi9hdXM2dG15eWI2TDBPeVR5azI5NycsXG4gICAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiBsb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgcmVkaXJlY3RVcmk6IGAke2xvY2F0aW9uLm9yaWdpbn0vbG9naW4vY21zYCxcbiAgICAgICAgICBzY29wZXM6IFsnZW1haWwnLCAnb3BlbmlkJywgJ3Byb2ZpbGUnXSxcbiAgICAgICAgICB0b2tlbk1hbmFnZXI6IHsgYXV0b1JlbmV3OiB0cnVlIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICgvaW1wbC8udGVzdChsb2NhdGlvbi5ob3N0KSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2t0YUNvbmZpZywge1xuICAgICAgICAgICAgY2xpZW50SWQ6ICcwb2E3cWtoaDc2V05LNWMxVjI5NycsXG4gICAgICAgICAgICBpc3N1ZXI6ICdodHRwczovL2ltcGwuaWRwLmlkbS5jbXMuZ292L29hdXRoMi9hdXM3cWtpMWZwVXRLRFNmaTI5NycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eaWRwfGJldGEvLnRlc3QobG9jYXRpb24uaG9zdCkpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG9rdGFDb25maWcsIHtcbiAgICAgICAgICAgIGNsaWVudElkOiAnMG9hOHl2eXpqdVRRVVp1ZHAyOTcnLFxuICAgICAgICAgICAgaXNzdWVyOiAnaHR0cHM6Ly9pZG0uY21zLmdvdi9vYXV0aDIvYXVzOHl3M3JkeXBlUjlzZGQyOTcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBva3RhQ29uZmlnO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHt9XG4iXX0=