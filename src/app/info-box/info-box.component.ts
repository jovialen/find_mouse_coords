import { Component } from '@angular/core';

import { InfoBoxService } from '../info-box.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
  text: string = "";

  constructor(private infoBoxService: InfoBoxService) {}

  ngOnInit() {
    this.infoBoxService.getContent()
      .subscribe(text => this.text = text);
  }
}
