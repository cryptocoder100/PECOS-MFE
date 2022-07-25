import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SkipNavComponent } from './layouts/skip-nav/skip-nav.component';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LeftNavComponent } from './layouts/left-nav/left-nav.component';
import { LayoutComponent } from './layouts/layout.component';
// import { NgxBootstrapModule } from './core/ngx-bootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PrimaryNavComponent,
    LayoutComponent,
    LeftNavComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SkipNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
