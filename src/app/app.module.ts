import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NavigationModule} from "@progress/kendo-angular-navigation";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {pages} from "./pages";
import {NbaService} from "./services/nba.service";
import {HttpClientModule} from "@angular/common/http";
import {components} from "./components";
import {BreadCrumbService} from "./services/breadcrumb.service";
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
    declarations: [
        AppComponent,
        ...components,
        ...pages
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavigationModule,
        BrowserAnimationsModule,
        HttpClientModule,
        GridModule
    ],
    providers: [
        NbaService,
        BreadCrumbService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
