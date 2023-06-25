import {Component, inject} from '@angular/core';
import {NbaService} from "../../services/nba.service";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
    stats$ = inject(NbaService).stats$
}
