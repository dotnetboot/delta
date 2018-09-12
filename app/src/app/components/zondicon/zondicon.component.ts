import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-zondicon',
    templateUrl: './zondicon.component.html',
    styleUrls: ['./zondicon.component.scss']
})
export class ZondiconComponent {
    private icons = {
        'menu': '<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>'
    };

    @Input() icon: string;
    @Input() class: string;

    get iconSvg() {
        return this.icons[this.icon];
    }
}