import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPreviewComponent } from './grid-preview/grid-preview.component';
import { GridGameComponent } from './grid-game/grid-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPreviewComponent,
    GridGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
