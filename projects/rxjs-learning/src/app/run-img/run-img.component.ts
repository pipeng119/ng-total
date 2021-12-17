import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { watch } from 'rxjs-watcher';
import { delay, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-run-img',
  templateUrl: './run-img.component.html',
  styleUrls: ['./run-img.component.css'],
})
export class RunImgComponent implements OnInit {
  time: number = 5;

  constructor() {}

  ngOnInit(): void {
    // this.initEvent();
  }

  initEvent() {
    var imgList = document.getElementsByTagName('img');
    let movePos = fromEvent(document, 'mousemove').pipe(
      map((e: any) => ({ x: e.clientX, y: e.clientY }))
    );
    const delayTime = 600;
    Array.from(imgList).forEach((item, index) => {
      movePos
        .pipe(
          delay((delayTime * (Math.pow(0.65, index) + Math.cos(index / 4))) / 2)
        )
        .subscribe(function (pos) {
          item.style.transform =
            'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
        });
    });
  }
  begin() {
    interval(1000)
      .pipe(
        map((num) => 4 - num),
        filter((num) => num >= 0),
        watch('倒计时')
      )
      .subscribe((num) => {
        console.log(num);
        this.time = num;
      });
  }
}
