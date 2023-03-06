import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridPreviewComponent } from './grid-preview/grid-preview.component';
import { GridGameComponent } from './grid-game/grid-game.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "preview" },
  { path: "preview", component: GridPreviewComponent },
  { path: "game", component: GridGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
