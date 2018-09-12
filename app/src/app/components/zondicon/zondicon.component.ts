import { Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-zondicon',
    templateUrl: './zondicon.component.html',
    styleUrls: ['./zondicon.component.scss']
})
export class ZondiconComponent {
    private icons = {
        'menu':     '<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>',
        'search':   '<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>'
    };

    @Input() icon: string;
    @Input() class: string;
    @Input() width = '16px';
    @Input() height = '16px';

    constructor(private sanitiser: DomSanitizer) {}

    get iconSvg() {
        return this.sanitiser.bypassSecurityTrustHtml(this.icons[this.icon]);
    }

    get computedStyle() {
        const style = `width: ${this.width}; height: ${this.height}`;
        return this.sanitiser.bypassSecurityTrustStyle(style);
    }
}
