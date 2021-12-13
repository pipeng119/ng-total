import { filter, take, concatAll, combineLatest, mapTo, startWith, scan, bufferCount, bufferTime } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, empty, from, fromEvent, iif, interval, merge, Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  @ViewChild('btn1', { static: true }) btn1!: ElementRef;
  @ViewChild('btn2', { static: true }) btn2!: ElementRef;

  constructor() {
    const findIndex: any = (arr: any, predicate: any, start = 0) => {
      if (0 <= start && start < arr.length) {
        if (predicate(arr[start])) {
          return start;
        }
        return findIndex(arr, predicate, start + 1);
      }
    }
    let a = findIndex(['a', 1, 2, 3, 4, 'b', 5], (x: any) => x === 'b'); // 找陣列中 'b' 的 index
    console.log('a: ', a);
  }

  ngOnInit() {

    // this.testBuffer();
  }

  testCreate() {
    from('aslhj').subscribe(num => console.log(num))
  }

  testIif() {
    let subscribeToFirst: any;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second'),
    );
    subscribeToFirst = true;
    firstOrSecond.subscribe(value => console.log(value));
  }

  testPromise() {
    let a$ = from(new Promise(resolve => {
      setTimeout(() => {
        resolve(123)
      }, 3000)
    }));
    a$.subscribe(num => {
      console.log('num: ', num);

    })
  }

  testFilter() {
    let a$ = interval(1000).pipe(
      filter(x => x % 2 === 0)
    );
    a$.subscribe(console.log)
  }

  testTake() {
    let obs1 = interval(1000).pipe(take(5));
    let obs2 = interval(500).pipe(take(2));
    let obs3 = interval(2000).pipe(take(1));

    let source = of(obs1, obs2, obs3);

    let example = source.pipe(concatAll());
    example.subscribe(console.log)
  }

  testConcat() {
    let obs1: any = interval(1000).pipe(take(3));
    let obs2 = of(3);
    let obs3 = of(4, 5, 6);
    const souce = concat(obs1, obs2, obs3);
    souce.subscribe(console.log)
  }

  // combineLatest
  testCombinelatest() {
    let a: Object = {}
  }

  testScan() {
    let addClick$ = fromEvent(this.btn1.nativeElement, 'click').pipe(mapTo(1));
    let minusClick$ = fromEvent(this.btn2.nativeElement, 'click').pipe(mapTo(-1));

    let obs = merge(addClick$, minusClick$)
      .pipe(
        startWith(0),
        scan(
          (origin, next) => origin + next
        )
      ).subscribe(res => {
        console.log(res);
      })
  }

  testBuffer() {
    let obs1$ = interval(300);
    let exmaple = obs1$.pipe(bufferTime(1000));
    exmaple.subscribe(console.log)
  }

}
