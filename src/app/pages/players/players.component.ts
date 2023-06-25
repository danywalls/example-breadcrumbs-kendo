import {Component, inject} from '@angular/core';
import {NbaService} from "../../services/nba.service";
import {BreadCrumbService} from "../../services/breadcrumb.service";

@Component({
    selector: 'app-players',
    template: `
        <ng-container *ngIf="players$ | async as players">
            <app-player (click)="addToBreadcrumb()" *ngFor="let player of players"
                        [player]="player" routerLink="stats/{{player?.id}}"/>
        </ng-container>

    `
})
export class PlayersComponent {
    players$ = inject(NbaService).players$;
    breadcrumbService = inject(BreadCrumbService);

    addToBreadcrumb() {
        this.breadcrumbService.addChild({
            title: 'stats',
            text: 'stats'
        })
    }
}
