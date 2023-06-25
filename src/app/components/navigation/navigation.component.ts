import {Component, inject} from '@angular/core';
import {BreadCrumbService} from "../../services/breadcrumb.service";

@Component({
    selector: 'app-navigation',
    template: `
        <ul>
            <li *ngFor="let navItem of navigationItems;" [routerLink]="navItem.path"
                (click)="updateBreadCrumb(navItem)">{{navItem.title}}</li>
        </ul>
    `,
})

export class NavigationComponent {
    breadcrumbService = inject(BreadCrumbService);

    navigationItems = [
        {
            title: 'Home',
            text: 'home',
            path: ''
        },
        {
            title: 'Teams',
            text: 'teams',
            path: 'teams',
        },
        {
            title: 'About',
            path: 'about',
            text: 'about'
        }
    ]

    updateBreadCrumb(item: any) {
        this.breadcrumbService.addParent(item)
    }
}
