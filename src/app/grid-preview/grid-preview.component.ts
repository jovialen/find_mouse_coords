import { Component, HostListener } from '@angular/core';

import { InfoBoxService } from '../info-box.service';

@Component({
  selector: 'app-grid-preview',
  templateUrl: './grid-preview.component.html',
  styleUrls: ['./grid-preview.component.scss'],
  host: {
    class: "block w-full h-full"
  }
})
export class GridPreviewComponent {
  constructor(private infoBoxService: InfoBoxService) {}

  ngOnInit() {
    this.infoBoxService.clear();
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(e: MouseEvent) {
    let x = e.clientX;
    let y = e.clientY;

    this.infoBoxService.setContent(`Mouse at X: ${x}, Y: ${y}`);
  }
}
