import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
    imports: [],
    exports: [
        NavigationComponent,
        TopBarComponent
    ],
    declarations: [
        NavigationComponent,
        TopBarComponent
    ],
    providers: [],
})
export class ComponentsModule {}
