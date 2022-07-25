export interface PecosUiLink {
    children?: PecosUiLink[];
    emulate?: {
        username: string;
        role: string;
    };
    expanded?: boolean;
    href?: string;
    icon?: string;
    role?: string[] | boolean;
    text: string;
    tooltip?: string;
}
//# sourceMappingURL=pecos-ui.models.d.ts.map