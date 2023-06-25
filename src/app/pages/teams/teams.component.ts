import {Component, inject} from '@angular/core';
import {NbaService} from "../../services/nba.service";
import {BreadCrumbService} from "../../services/breadcrumb.service";

@Component({
    selector: 'teams',
    template: `
        <ng-container *ngIf="teams$ | async as teams">

            <app-team class="team" (click)="addToBreadcrumb()" *ngFor="let team of teams" [team]="team"
                      [routerLink]="['players']"/>

        </ng-container>
    `
})

export class TeamsComponent {
    teams$ = inject(NbaService).teams$;
    breadcrumbService = inject(BreadCrumbService);

    addToBreadcrumb() {
        this.breadcrumbService.addChild({
            title: 'players',
            text: 'players',
            path: 'teams/players'
        })
    }
}
