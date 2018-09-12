import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ZondiconComponent } from './zondicon/zondicon.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        PipesModule
    ],
    exports: [
        NavigationComponent,
        TopBarComponent,
        ZondiconComponent
    ],
    declarations: [
        NavigationComponent,
        TopBarComponent,
        ZondiconComponent
    ],
    providers: [],
})
export class ComponentsModule {}
