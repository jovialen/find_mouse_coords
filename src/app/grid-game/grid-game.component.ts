import { Component } from '@angular/core';

import { InfoBoxService } from '../info-box.service';

@Component({
  selector: 'app-grid-game',
  templateUrl: './grid-game.component.html',
  styleUrls: ['./grid-game.component.scss']
})
export class GridGameComponent {
  constructor(private infoBoxService: InfoBoxService) {}

  ngOnInit() {
    this.infoBoxService.clear();
  }
}
