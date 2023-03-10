import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPreviewComponent } from './grid-preview/grid-preview.component';
import { GridGameComponent } from './grid-game/grid-game.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridComponent } from './grid/grid.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPreviewComponent,
    GridGameComponent,
    NavigationComponent,
    GridComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
