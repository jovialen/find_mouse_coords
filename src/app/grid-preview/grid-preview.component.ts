import { Component, HostListener, ElementRef } from '@angular/core';

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
  constructor(private elementRef: ElementRef, private infoBoxService: InfoBoxService) {}

  ngOnInit() {
    this.infoBoxService.clear();
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(e: MouseEvent) {
    let offset_x = this.elementRef.nativeElement.offsetLeft;
    let offset_y = this.elementRef.nativeElement.offsetTop;

    let x = e.clientX - offset_x;
    let y = e.clientY - offset_y;

    this.infoBoxService.setContent(`Mouse at X: ${x}, Y: ${y}`);
  }

  onMouseLeave() {
    this.infoBoxService.clear();
  }
}
