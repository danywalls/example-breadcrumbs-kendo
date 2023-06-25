import {Component, inject} from '@angular/core';
import {BreadCrumbService} from "./services/breadcrumb.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    #breadcrumbService = inject(BreadCrumbService)
    public items$ = this.#breadcrumbService.items$
    #router = inject(Router);


    public onItemClick(item: any) {
        this.#breadcrumbService.updateBreadcrumb(item)
        this.#router.navigate([item.path]);
    }
}
