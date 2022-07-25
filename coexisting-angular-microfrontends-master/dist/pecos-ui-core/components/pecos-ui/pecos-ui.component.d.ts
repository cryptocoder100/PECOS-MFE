import { AuthService } from '../../auth';
import { PecosUiLink } from './pecos-ui.models';
import * as i0 from "@angular/core";
export declare class PecosUiComponent {
    private auth;
    private _activeLink;
    footerLinks: PecosUiLink[];
    headerLinks: PecosUiLink[];
    search: string;
    sideLinks: PecosUiLink[];
    sideNavExpanded: boolean;
    iconsPath: string;
    user: any;
    constructor(auth: AuthService);
    ngOnInit(): void;
    onDocumentClick(target: any): void;
    onClick(link: any, e: Event): void;
    toggle(link: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PecosUiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PecosUiComponent, "pecos-ui", never, { "footerLinks": "footerLinks"; "headerLinks": "headerLinks"; "search": "search"; "sideLinks": "sideLinks"; "sideNavExpanded": "sideNavExpanded"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=pecos-ui.component.d.ts.map