import {Component, inject} from '@angular/core';
import {NbaService} from "../../services/nba.service";

@Component({
    selector: 'app-stats',
    template: `
        <ng-container *ngIf="stats$ | async as stats">
            <h2>Details Of: {{stats.first_name}} {{stats.last_name}}</h2>
            <p><b>Name:</b> {{stats.first_name}} {{stats.last_name}}</p>
            <p><b>Position:</b> {{stats.position}}</p>
        </ng-container>
    `,
    styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
    stats$ = inject(NbaService).stats$
}
