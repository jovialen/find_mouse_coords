import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  gridMajorWidth: number = 16;
  gridMajorHeight: number = 9;
  gridMinorWidth: number = 10;
  gridMinorHeight: number = 10;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateGridSizes();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.updateGridSizes();
  }

  updateGridSizes() {
    let width = this.el.nativeElement.offsetWidth;
    let height = this.el.nativeElement.offsetHeight;

    let aspectRatio = height / width;

    // The major axis must be aligned with the window aspect ratio
    this.gridMajorWidth = Math.round(width / 100);
    this.gridMajorHeight = Math.round(this.gridMajorWidth * aspectRatio);
  }

  cellIndex(mar: number, mac: number, mir: number, mic: number): number {
    return (mar * this.gridMajorWidth + mac + (mir * this.gridMinorWidth + mic) * this.gridMajorWidth * this.gridMajorHeight) - 500;
  }

  isRed(mar: number, mac: number, mir: number, mic: number): boolean {
    return this.cellIndex(mar, mac, mir, mic) % 211 === 0;
  }

  isBlue(mar: number, mac: number, mir: number, mic: number): boolean {
    return this.cellIndex(mar, mac, mir, mic) % 307 === 0;
  }

  isYellow(mar: number, mac: number, mir: number, mic: number): boolean {
    return this.cellIndex(mar, mac, mir, mic) % 347 === 0;
  }

  isGreen(mar: number, mac: number, mir: number, mic: number): boolean {
    return this.cellIndex(mar, mac, mir, mic) % 397 === 0;
  }
}
