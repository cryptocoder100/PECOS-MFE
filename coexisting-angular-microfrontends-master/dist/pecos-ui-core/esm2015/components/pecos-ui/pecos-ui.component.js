import { Component, HostListener, Input } from '@angular/core';
import { footerLinks, headerLinks, sideLinks } from './pecos-ui.constants';
import * as i0 from "@angular/core";
import * as i1 from "../../auth";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function PecosUiComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 14, 15);
    i0.ɵɵelementStart(2, "input", 16);
    i0.ɵɵlistener("keyup.enter", function PecosUiComponent_form_5_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r10); const _r8 = i0.ɵɵreference(1); return _r8.submit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.search);
} }
function PecosUiComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PecosUiComponent_aside_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { links: a0 }; };
function PecosUiComponent_aside_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 17);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function PecosUiComponent_aside_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.sideNavExpanded = !ctx_r12.sideNavExpanded; });
    i0.ɵɵelement(2, "img", 19);
    i0.ɵɵelement(3, "img", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nav", 21);
    i0.ɵɵtemplate(5, PecosUiComponent_aside_9_ng_container_5_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(16);
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
} }
function PecosUiComponent_footer_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PecosUiComponent_footer_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 22);
    i0.ɵɵelementStart(1, "nav", 23);
    i0.ɵɵtemplate(2, PecosUiComponent_footer_12_ng_container_2_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(16);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r3.footerLinks));
} }
function PecosUiComponent_ng_template_13_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵelement(1, "img", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r15 = i0.ɵɵnextContext().link;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r16.iconsPath, "icon-", link_r15.icon, ".svg", i0.ɵɵsanitizeUrl);
} }
function PecosUiComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PecosUiComponent_ng_template_13_span_0_Template, 2, 2, "span", 24);
    i0.ɵɵelement(1, "span", 25);
} if (rf & 2) {
    const link_r15 = ctx.link;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", link_r15.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", link_r15.text.replace("%user%", ctx_r5.user.lastName ? ctx_r5.user.lastName + ", " + ctx_r5.user.firstName : ctx_r5.user.username), i0.ɵɵsanitizeHtml);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { link: a0 }; };
function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 34);
    i0.ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r28); const link_r20 = i0.ɵɵnextContext(2).$implicit; const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.toggle(link_r20); });
    i0.ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(14);
    const _r6 = i0.ɵɵreference(16);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-expanded", !!link_r20.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, link_r20));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, link_r20.children));
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵlistener("click", function PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r33); const link_r20 = i0.ɵɵnextContext(2).$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onClick(link_r20, $event); });
    i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(14);
    i0.ɵɵproperty("href", link_r20.href || "#", i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("rel", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "noopener noreferrer" : null)("target", (link_r20.href == null ? null : link_r20.href.startsWith("http")) ? "_blank" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c1, link_r20));
} }
function PecosUiComponent_ng_template_15_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 31);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PecosUiComponent_ng_template_15_ng_container_1_li_1_ng_container_2_Template, 4, 9, "ng-container", 32);
    i0.ɵɵtemplate(3, PecosUiComponent_ng_template_15_ng_container_1_li_1_a_3_Template, 2, 7, "a", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r20.roles, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", link_r20.children);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !link_r20.children);
} }
function PecosUiComponent_ng_template_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_li_1_Template, 4, 3, "li", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !link_r20.role || link_r20.role.includes(ctx_r19.user.role) || link_r20.role.length === 0 && !ctx_r19.user.role);
} }
function PecosUiComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 28);
    i0.ɵɵtemplate(1, PecosUiComponent_ng_template_15_ng_container_1_Template, 2, 1, "ng-container", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const links_r18 = ctx.links;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", links_r18);
} }
const _c2 = ["*"];
export class PecosUiComponent {
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
PecosUiComponent.ɵfac = function PecosUiComponent_Factory(t) { return new (t || PecosUiComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
PecosUiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PecosUiComponent, selectors: [["pecos-ui"]], hostAttrs: [1, "pecos-ui"], hostBindings: function PecosUiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function PecosUiComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event.target); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { footerLinks: "footerLinks", headerLinks: "headerLinks", search: "search", sideLinks: "sideLinks", sideNavExpanded: "sideNavExpanded" }, ngContentSelectors: _c2, decls: 17, vars: 8, consts: [[1, "pecos-ui__header"], [1, "pecos-ui__header__logo"], ["href", "/"], ["alt", "PECOS logo", 3, "src"], [1, "pecos-ui__header__search"], ["action", "/search", "class", "pecos-ui__header__search__form", "method", "get", 4, "ngIf"], [1, "pecos-ui__header__links"], ["aria-label", "main", 1, "pecos-ui__nav"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "pecos-ui__aside", 3, "pecos-ui__aside--collapsed", "pecos-ui__aside--expanded", 4, "ngIf"], ["id", "pecos-ui-main", 1, "pecos-ui__main"], ["class", "pecos-ui__footer", 4, "ngIf"], ["linkTemplate", ""], ["listTemplate", ""], ["action", "/search", "method", "get", 1, "pecos-ui__header__search__form"], ["searchForm", ""], ["aria-label", "search site", "name", "q", "type", "search", 1, "pecos-ui__header__search__input", 3, "placeholder", "keyup.enter"], [1, "pecos-ui__aside"], ["aria-controls", "pecos-ui-site-nav", "aria-label", "site navigation section", 1, "pecos-ui__aside__toggle", 3, "click"], ["alt", "expand", 1, "pecos-ui__icon__expand", 3, "src"], ["alt", "collapse", 1, "pecos-ui__icon__collapse", 3, "src"], ["aria-label", "site", "id", "pecos-ui-site-nav", 1, "pecos-ui__nav"], [1, "pecos-ui__footer"], ["aria-label", "footer", 1, "pecos-ui__nav"], ["class", "pecos-ui__link__icon", 4, "ngIf"], [1, "pecos-ui__link__text", 3, "innerHTML"], [1, "pecos-ui__link__icon"], ["alt", "", 3, "src"], [1, "pecos-ui__list"], [4, "ngFor", "ngForOf"], ["class", "pecos-ui__list__item", 4, "ngIf"], [1, "pecos-ui__list__item"], [4, "ngIf"], ["class", "pecos-ui__link", 3, "href", "click", 4, "ngIf"], ["type", "button", 1, "pecos-ui__link", 3, "click"], [1, "pecos-ui__link", 3, "href", "click"]], template: function PecosUiComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(16);
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
    } }, directives: [i2.NgIf, i2.NgTemplateOutlet, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i2.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PecosUiComponent, [{
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
    }], function () { return [{ type: i1.AuthService }]; }, { footerLinks: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVjb3MtdWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVjb3MtdWkvcGVjb3MtdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQWFuRSxvQ0FPRTtJQUFBLGlDQVFGO0lBSEksc0tBQWUsWUFBbUIsSUFBQztJQUxyQyxpQkFRRjtJQUFBLGlCQUFPOzs7SUFKSCxlQUEwQjtJQUExQixzREFBMEI7OztJQVE1Qix3QkFFZ0I7OztJQStCbEIsd0JBRWdCOzs7OztJQTdCcEIsaUNBTUU7SUFBQSxrQ0FPRTtJQUZBLHVOQUE0QztJQUU1QywwQkFNQTtJQUFBLDBCQU1GO0lBQUEsaUJBQVM7SUFDVCwrQkFDRTtJQUFBLDJGQUVDO0lBQ0gsaUJBQU07SUFDUixpQkFBUTs7OztJQTVCTixxRUFBcUQscURBQUE7SUFLbkQsZUFBc0M7SUFBdEMsdURBQXNDO0lBT3BDLGVBQWdDO0lBQWhDLGdEQUFnQztJQUNoQywyRkFBb0M7SUFLcEMsZUFBaUM7SUFBakMsaURBQWlDO0lBQ2pDLDZGQUFzQztJQU10QyxlQUErRDtJQUEvRCxzQ0FBK0QsMEVBQUE7OztJQVNqRSx3QkFFZ0I7OztJQUpwQixrQ0FDRTtJQUFBLCtCQUNFO0lBQUEsNkZBRUM7SUFDSCxpQkFBTTtJQUNSLGlCQUFTOzs7O0lBSEgsZUFBaUU7SUFBakUsc0NBQWlFLDJFQUFBOzs7SUFNckUsZ0NBQ0E7SUFBQSwwQkFDQTtJQUFBLGlCQUFPOzs7O0lBREYsZUFBNkM7SUFBN0MseUdBQTZDOzs7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IEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aCc7XG5pbXBvcnQgeyBQZWNvc1VpTGluayB9IGZyb20gJy4vcGVjb3MtdWkubW9kZWxzJztcbmltcG9ydCB7IGZvb3RlckxpbmtzLCBoZWFkZXJMaW5rcywgc2lkZUxpbmtzIH0gZnJvbSAnLi9wZWNvcy11aS5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgaG9zdDogeyBjbGFzczogJ3BlY29zLXVpJyB9LFxuICBzZWxlY3RvcjogJ3BlY29zLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwicGVjb3MtdWlfX2hlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBlY29zLXVpX19oZWFkZXJfX2xvZ29cIj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInt7IGljb25zUGF0aCB9fWljb24tcGVjb3MtbG9nby5zdmdcIiBhbHQ9XCJQRUNPUyBsb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGVjb3MtdWlfX2hlYWRlcl9fc2VhcmNoXCI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgKm5nSWY9XCJ1c2VyLnJvbGVcIlxuICAgICAgICAgIGFjdGlvbj1cIi9zZWFyY2hcIlxuICAgICAgICAgIGNsYXNzPVwicGVjb3MtdWlfX2hlYWRlcl9fc2VhcmNoX19mb3JtXCJcbiAgICAgICAgICBtZXRob2Q9XCJnZXRcIlxuICAgICAgICAgICNzZWFyY2hGb3JtXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2ggc2l0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cInBlY29zLXVpX19oZWFkZXJfX3NlYXJjaF9faW5wdXRcIlxuICAgICAgICAgICAgbmFtZT1cInFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBzZWFyY2ggfX1cIlxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInNlYXJjaEZvcm0uc3VibWl0KClcIlxuICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGVjb3MtdWlfX2hlYWRlcl9fbGlua3NcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cInBlY29zLXVpX19uYXZcIiBhcmlhLWxhYmVsPVwibWFpblwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwibGlzdFRlbXBsYXRlOyBjb250ZXh0OiB7IGxpbmtzOiBoZWFkZXJMaW5rcyB9XCJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGFzaWRlXG4gICAgICAqbmdJZj1cInNpZGVMaW5rcy5sZW5ndGhcIlxuICAgICAgY2xhc3M9XCJwZWNvcy11aV9fYXNpZGVcIlxuICAgICAgW2NsYXNzLnBlY29zLXVpX19hc2lkZS0tY29sbGFwc2VkXT1cIiFzaWRlTmF2RXhwYW5kZWRcIlxuICAgICAgW2NsYXNzLnBlY29zLXVpX19hc2lkZS0tZXhwYW5kZWRdPVwic2lkZU5hdkV4cGFuZGVkXCJcbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJwZWNvcy11aS1zaXRlLW5hdlwiXG4gICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic2lkZU5hdkV4cGFuZGVkXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cInNpdGUgbmF2aWdhdGlvbiBzZWN0aW9uXCJcbiAgICAgICAgY2xhc3M9XCJwZWNvcy11aV9fYXNpZGVfX3RvZ2dsZVwiXG4gICAgICAgIChjbGljayk9XCJzaWRlTmF2RXhwYW5kZWQgPSAhc2lkZU5hdkV4cGFuZGVkXCJcbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwicGVjb3MtdWlfX2ljb25fX2V4cGFuZFwiXG4gICAgICAgICAgW2NsYXNzLmQtbm9uZV09XCJzaWRlTmF2RXhwYW5kZWRcIlxuICAgICAgICAgIHNyYz1cInt7IGljb25zUGF0aCB9fWljb24tZXhwYW5kLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiZXhwYW5kXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwicGVjb3MtdWlfX2ljb25fX2NvbGxhcHNlXCJcbiAgICAgICAgICBbY2xhc3MuZC1ub25lXT1cIiFzaWRlTmF2RXhwYW5kZWRcIlxuICAgICAgICAgIHNyYz1cInt7IGljb25zUGF0aCB9fWljb24tY29sbGFwc2Uuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJjb2xsYXBzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxuYXYgY2xhc3M9XCJwZWNvcy11aV9fbmF2XCIgYXJpYS1sYWJlbD1cInNpdGVcIiBpZD1cInBlY29zLXVpLXNpdGUtbmF2XCI+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3RUZW1wbGF0ZTsgY29udGV4dDogeyBsaW5rczogc2lkZUxpbmtzIH1cIlxuICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25hdj5cbiAgICA8L2FzaWRlPlxuICAgIDxtYWluIGNsYXNzPVwicGVjb3MtdWlfX21haW5cIiBpZD1cInBlY29zLXVpLW1haW5cIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L21haW4+XG4gICAgPGZvb3RlciBjbGFzcz1cInBlY29zLXVpX19mb290ZXJcIiAqbmdJZj1cImZvb3RlckxpbmtzLmxlbmd0aFwiPlxuICAgICAgPG5hdiBjbGFzcz1cInBlY29zLXVpX19uYXZcIiBhcmlhLWxhYmVsPVwiZm9vdGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3RUZW1wbGF0ZTsgY29udGV4dDogeyBsaW5rczogZm9vdGVyTGlua3MgfVwiXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNsaW5rVGVtcGxhdGUgbGV0LWxpbms9XCJsaW5rXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInBlY29zLXVpX19saW5rX19pY29uXCIgKm5nSWY9XCJsaW5rLmljb25cIj5cbiAgICAgIDxpbWcgc3JjPVwie3sgaWNvbnNQYXRoIH19aWNvbi17eyBsaW5rLmljb24gfX0uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwicGVjb3MtdWlfX2xpbmtfX3RleHRcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIlxuICAgICAgICAgIGxpbmsudGV4dC5yZXBsYWNlKFxuICAgICAgICAgICAgJyV1c2VyJScsXG4gICAgICAgICAgICB1c2VyLmxhc3ROYW1lXG4gICAgICAgICAgICAgID8gdXNlci5sYXN0TmFtZSArICcsICcgKyB1c2VyLmZpcnN0TmFtZVxuICAgICAgICAgICAgICA6IHVzZXIudXNlcm5hbWVcbiAgICAgICAgICApXG4gICAgICAgIFwiXG4gICAgICA+PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2xpc3RUZW1wbGF0ZSBsZXQtbGlua3M9XCJsaW5rc1wiPlxuICAgICAgPHVsIGNsYXNzPVwicGVjb3MtdWlfX2xpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGluayBvZiBsaW5rc1wiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgIWxpbmsucm9sZSB8fFxuICAgICAgICAgICAgICBsaW5rLnJvbGUuaW5jbHVkZXModXNlci5yb2xlKSB8fFxuICAgICAgICAgICAgICAobGluay5yb2xlLmxlbmd0aCA9PT0gMCAmJiAhdXNlci5yb2xlKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGNsYXNzPVwicGVjb3MtdWlfX2xpc3RfX2l0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxpbmsucm9sZXMgfX1cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaW5rLmNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIiEhbGluay5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwZWNvcy11aV9fbGlua1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZShsaW5rKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmtUZW1wbGF0ZTsgY29udGV4dDogeyBsaW5rOiBsaW5rIH1cIlxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICAgICAgICAgICAgbGlzdFRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgY29udGV4dDogeyBsaW5rczogbGluay5jaGlsZHJlbiB9XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAqbmdJZj1cIiFsaW5rLmNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwZWNvcy11aV9fbGlua1wiXG4gICAgICAgICAgICAgIFthdHRyLnJlbF09XCJcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWY/LnN0YXJ0c1dpdGgoJ2h0dHAnKSA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IG51bGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cImxpbmsuaHJlZj8uc3RhcnRzV2l0aCgnaHR0cCcpID8gJ19ibGFuaycgOiBudWxsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2sobGluaywgJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtocmVmXT1cImxpbmsuaHJlZiB8fCAnIydcIlxuICAgICAgICAgICAgICA+PG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwibGlua1RlbXBsYXRlOyBjb250ZXh0OiB7IGxpbms6IGxpbmsgfVwiXG4gICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGVjb3NVaUNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2FjdGl2ZUxpbms6IFBlY29zVWlMaW5rO1xuICBASW5wdXQoKSBmb290ZXJMaW5rcyA9IGZvb3RlckxpbmtzO1xuICBASW5wdXQoKSBoZWFkZXJMaW5rcyA9IGhlYWRlckxpbmtzKCEvZGVtb3xpbXBsLy50ZXN0KGxvY2F0aW9uLmhvc3QpKTtcbiAgQElucHV0KCkgc2VhcmNoID0gJ1NlYXJjaCc7XG4gIEBJbnB1dCgpIHNpZGVMaW5rcyA9IHNpZGVMaW5rcztcbiAgQElucHV0KCkgc2lkZU5hdkV4cGFuZGVkID0gZmFsc2U7XG4gIGljb25zUGF0aCA9ICcvYXNzZXRzL2ljb25zL3BhZ2UtZnJhbWV3b3JrLyc7XG4gIHVzZXIgPSB0aGlzLmF1dGgudXNlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXV0aC5zdGF0ZS5zdWJzY3JpYmUoKCkgPT4gKHRoaXMudXNlciA9IHRoaXMuYXV0aC51c2VyKSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbkRvY3VtZW50Q2xpY2sodGFyZ2V0KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fYWN0aXZlTGluayAmJlxuICAgICAgIXRhcmdldC5jbG9zZXN0KCcucGVjb3MtdWlfX2xpbmtbYXJpYS1leHBhbmRlZD1cInRydWVcIl0nKVxuICAgICkge1xuICAgICAgdGhpcy5fYWN0aXZlTGluay5leHBhbmRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2sobGluazogYW55LCBlOiBFdmVudCkge1xuICAgIGlmIChsaW5rLmhyZWYgPT09ICcvbG9nb3V0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIH0gZWxzZSBpZiAobGluay5lbXVsYXRlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmF1dGgubG9naW4obGluay5lbXVsYXRlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUobGluaykge1xuICAgIGlmICh0aGlzLl9hY3RpdmVMaW5rICYmIHRoaXMuX2FjdGl2ZUxpbmsgIT09IGxpbmspIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUxpbmsuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgbGluay5leHBhbmRlZCA9ICFsaW5rLmV4cGFuZGVkO1xuICAgIHRoaXMuX2FjdGl2ZUxpbmsgPSBsaW5rO1xuICB9XG59XG4iXX0=