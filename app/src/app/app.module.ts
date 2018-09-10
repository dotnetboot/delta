import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';

import { AuthedComponent } from './areas/authed/authed.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AuthedComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
