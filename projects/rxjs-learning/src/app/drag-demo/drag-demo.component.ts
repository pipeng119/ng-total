import { DOCUMENT } from '@angular/common';
/**
 * 首先畫面上有一個元件(#drag)
 * 當滑鼠在元件(#drag)上按下左鍵(mousedown)時，開始監聽滑鼠移動(mousemove)的位置
 * 當滑鼠左鍵放掉(mouseup)時，結束監聽滑鼠移動
 * 當滑鼠移動(mousemove)被監聽時，跟著修改元件的樣式屬性
 *
 */

import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, takeUntil, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-drag-demo',
  templateUrl: './drag-demo.component.html',
  styleUrls: ['./drag-demo.component.css']
})
export class DragDemoComponent implements OnInit {

  @ViewChild('drag', { static: true }) dragEl!: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    console.log(this.dragEl.nativeElement)
    console.log(this.document.body);

  }

  ngAfterViewInit() {
    this.initDragEvent();
  }

  initDragEvent() {
    const mouseDown = fromEvent(this.dragEl.nativeElement, 'mousedown');
    const mouseUp = fromEvent(this.document, 'mouseup');
    const mouseMove = fromEvent(this.document, 'mousemove');
    mouseDown.pipe(
      map((e: any) => {
        const { left, top } = e.target.getBoundingClientRect();
        const clickOffsetX = e.clientX - left;
        const clickOffsetY = e.clientY - top;
        return {
          clickOffsetX, clickOffsetY
        }
      }),
      map(({ clickOffsetX, clickOffsetY }) => {
        return mouseMove.pipe(
          map((event: any) => {
            return {
              x: event.clientX - clickOffsetX,
              y: event.clientY - clickOffsetY
            }
          }),
          takeUntil(mouseUp),
        )
      }),
      concatAll(),
    ).subscribe((res: any) => {
      this.dragEl.nativeElement!.style.left = res.x + 'px';
      this.dragEl.nativeElement!.style.top = res.y + 'px';
    })
  }

}
