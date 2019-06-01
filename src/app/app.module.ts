import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './odd-component/odd-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
