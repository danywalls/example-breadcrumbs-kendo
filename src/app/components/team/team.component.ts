import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-team',
    template: `
        <div class="team">
            <h2>{{team.abbreviation}}</h2>
            <p>{{team?.full_name}}
            <p>
        </div>
    `,
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    @Input() team: any;
}
