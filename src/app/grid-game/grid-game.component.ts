import { Component, ElementRef } from '@angular/core';

import { InfoBoxService } from '../info-box.service';

@Component({
  selector: 'app-grid-game',
  templateUrl: './grid-game.component.html',
  styleUrls: ['./grid-game.component.scss']
})
export class GridGameComponent {
  constructor(private elementRef: ElementRef, private infoBoxService: InfoBoxService) {}

  target_x: number = 0;
  target_y: number = 0;
  show_target: boolean = false;

  ngOnInit() {
    this.infoBoxService.clear();
    this.setNewTarget();
  }

  onMouseClick(e: MouseEvent) {
    let offset_x = this.elementRef.nativeElement.offsetLeft;
    let offset_y = this.elementRef.nativeElement.offsetTop;

    let x = e.clientX - offset_x;
    let y = e.clientY - offset_y;

    let dist_x = Math.abs(this.target_x - x);
    let dist_y = Math.abs(this.target_y - y);
    let dist = Math.round(Math.sqrt(Math.pow(dist_x, 2) + Math.pow(dist_y, 2)));

    let message = "";
    if (dist > 1000) {
      message = "Try again!";
    } else if (dist > 500) {
      message = "Not too far away!";
    } else if (dist > 250) {
      message = "Close!";
    } else if (dist > 100) {
      message = "Almost!";
    } else if (dist > 50) {
      message = "Great job!";
    } else {
      message = "Right on!";
    }

    this.infoBoxService.setContent(`${message} You were ${dist}px from the target!`);
    this.showTarget = true;

    setTimeout(() => {
      this.showTarget = false;
      this.setNewTarget();
    }, 3000);
  }

  setNewTarget() {
    let size_x = this.elementRef.nativeElement.offsetWidth;
    let size_y = this.elementRef.nativeElement.offsetHeight;

    this.target_x = Math.round(Math.random() * size_x);
    this.target_y = Math.round(Math.random() * size_y);

    this.infoBoxService.setContent(`Find X: ${this.target_x}, Y: ${this.target_y}`);
  }
}
