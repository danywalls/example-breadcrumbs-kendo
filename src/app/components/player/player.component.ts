import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-player',
    template: `
        <div class='player'>
            {{player?.first_name}} {{player?.last_name}}
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayerComponent {
    @Input() player: any;
}
