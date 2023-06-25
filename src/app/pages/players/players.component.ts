import {Component, inject} from '@angular/core';
import {NbaService} from "../../services/nba.service";
import {BreadCrumbService} from "../../services/breadcrumb.service";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html'
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
