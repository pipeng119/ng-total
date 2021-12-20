import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatAll, map, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  dragEl!: ElementRef;
  constructor(el: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.dragEl = el;
    this.dragEl.nativeElement.style.position = 'absolute';
    this.initEvent();
  }

  initEvent() {
    let mousedown$ = fromEvent(this.dragEl.nativeElement, 'mousedown');
    let mousemove$ = fromEvent(this.document, 'mousemove');
    let mouseup$ = fromEvent(this.document, 'mouseup');

    mousedown$
      .pipe(
        map((e: any) => {
          console.log('e: ', e);
          const { left, top } = e.target.getBoundingClientRect();
          const clickOffsetX = e.clientX - left;
          const clickOffsetY = e.clientY - top;
          return {
            clickOffsetX,
            clickOffsetY,
          };
        }),
        map(({ clickOffsetX, clickOffsetY }) => {
          return mousemove$.pipe(
            map((event: any) => ({
              x: event.clientX - clickOffsetX,
              y: event.clientY - clickOffsetY,
            })),
            takeUntil(mouseup$)
          );
        }),
        concatAll()
      )
      .subscribe((res) => {
        this.dragEl.nativeElement.style.left = res.x + 'px';
        this.dragEl.nativeElement.style.top = res.y + 'px';
      });
  }
}
