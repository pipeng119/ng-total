import {
  filter,
  take,
  concatAll,
  combineLatest,
  mapTo,
  startWith,
  scan,
  bufferCount,
  bufferTime,
  throttleTime,
  distinct,
  mergeMap,
  zip,
  map,
  tap,
  zipAll,
  catchError,
  retry,
  retryWhen,
  delay,
  mergeAll,
  switchAll,
} from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  concat,
  empty,
  from,
  fromEvent,
  iif,
  interval,
  merge,
  Observable,
  of,
  timer,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

  @ViewChild('btn1', { static: true }) btn1!: ElementRef;
  @ViewChild('btn2', { static: true }) btn2!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.testMergeAll();
  }

  // 仿造foreach
  counterfeitForeach() {
    const findIndex: any = (arr: any, predicate: any, start = 0) => {
      if (0 <= start && start < arr.length) {
        if (predicate(arr[start])) {
          return start;
        }
        return findIndex(arr, predicate, start + 1);
      }
    };
    let a = findIndex(['a', 1, 2, 3, 4, 'b', 5], (x: any) => x === 'b'); // 找陣列中 'b' 的 index
    console.log('a: ', a);
  }

  testCreate() {
    from('aslhj').subscribe((num) => console.log(num));
  }

  testIif() {
    let subscribeToFirst: any;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second')
    );
    subscribeToFirst = true;
    firstOrSecond.subscribe((value) => console.log(value));
  }

  testPromise() {
    let a$ = from(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(123);
        }, 3000);
      })
    );
    a$.subscribe((num) => {
      console.log('num: ', num);
    });
  }

  testFilter() {
    let a$ = interval(1000).pipe(filter((x) => x % 2 === 0));
    a$.subscribe(console.log);
  }

  testTake() {
    let obs1 = interval(1000).pipe(take(5));
    let obs2 = interval(500).pipe(take(2));
    let obs3 = interval(2000).pipe(take(1));

    let source = of(obs1, obs2, obs3);

    let example = source.pipe(concatAll());
    example.subscribe(console.log);
  }

  testConcat() {
    let obs1: any = interval(1000).pipe(take(3));
    let obs2 = of(3);
    let obs3 = of(4, 5, 6);
    const souce = concat(obs1, obs2, obs3);
    souce.subscribe(console.log);
  }

  // combineLatest
  testCombinelatest() {
    let a: Object = {};
  }

  testScan() {
    let addClick$ = fromEvent(this.btn1.nativeElement, 'click').pipe(mapTo(1));
    let minusClick$ = fromEvent(this.btn2.nativeElement, 'click').pipe(
      mapTo(-1)
    );

    let obs = merge(addClick$, minusClick$)
      .pipe(
        startWith(0),
        scan((origin, next) => origin + next)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  testBuffer() {
    let obs1$ = interval(300);
    let exmaple = obs1$.pipe(bufferTime(1000));
    exmaple.subscribe(console.log);
  }

  testThrottle() {
    interval(300).pipe(take(5), throttleTime(1000)).subscribe(console.log);
  }

  testDistinct() {
    const data = [
      {
        a: {
          b: {
            c: 1,
            d: 2,
          },
        },
      },
      {
        a: {
          b: {
            c: 2,
            d: 3,
          },
        },
      },
      {
        a: {
          b: {
            c: 1,
            d: 4,
          },
        },
      },
    ];
    from([1, 2, 3, 1, 2, 3])
      .pipe(distinct())
      .subscribe((res) => {
        console.log('res: ', res);
      });
  }

  testNestHttp() {
    // this.http.get('http://localhost:8888/bookList').pipe(
    //   mergeMap((res) => {
    //     const { id } = (res as Array<any>)[0];
    //     return this.http.post('http://localhost:8888/book', { id }).pipe(withLatestFrom(of(res)))
    //   })
    // ).subscribe(res => {
    //   console.log(res)
    // })
  }

  tessMergeMap() {
    function httpGet(url: string) {
      return new Promise((resolve) =>
        setTimeout(() => resolve(`Result: ${url}`), 2000)
      );
    }

    const array = [
      'https://httpbin.org/ip',
      'https://httpbin.org/user-agent',
      'https://httpbin.org/delay/3',
    ];

    // mergeMap是专门用来处理并发处理的rxjs操作符
    // mergeMap第二个参数2的意思是，from(array)每次并发量是2，只有promise执行结束才接着取array里面的数据
    // mergeMap第一个参数httpGet的意思是每次并发，从from(array)中取的数据如何包装，这里是作为httpGet的参数
    const source = from(array)
      .pipe(mergeMap(httpGet, 1))
      .subscribe((val) => console.log(val));
  }

  testCompare() {
    const ary = [
      [1, 2],
      [1, 5],
      [3, 4],
      [2, 1],
      [0, 1],
      [3, 3],
      [3, 2],
      [1, 1],
    ];
    let a = [...ary].sort((a, b) => a[0] - b[0]);
    console.log('a: ', a);
    // console.log('b: ', b);
  }

  testCatch() {
    const source = from(['a', 'b', 'c', 2]).pipe(
      zip(interval(1000), (x, y) => x)
    );
    const example = source
      .pipe(
        map((x) => (x as any).toUpperCase()),
        // catchError((error,obs) => obs)
        catchError((error) => of('报错咯'))
      )
      .subscribe({
        next: console.log,
        error: (err) => console.log('err', err),
        complete: console.log,
      });
  }

  testRetry() {
    const source = from(['a', 'b', 'c', 2]).pipe(
      zip(interval(1000), (x, y) => x)
    );
    const example = source
      .pipe(
        map((x) => (x as any).toUpperCase()),
        // catchError((error,obs) => obs)
        retry(2)
      )
      .subscribe({
        next: console.log,
        error: (err) => console.log('err', err),
        complete: console.log,
      });
  }
  testRetryWhen() {
    const source = from(['a', 'b', 'c', 2]).pipe(
      zip(interval(1000), (x, y) => x)
    );
    const example = source
      .pipe(
        map((x) => (x as any).toUpperCase()),
        // catchError((error,obs) => obs)
        retryWhen((errObs) => errObs.pipe(delay(1000)))
      )
      .subscribe({
        next: console.log,
        error: (err) => console.log('err', err),
        complete: console.log,
      });
  }

  testConcatAll() {
    const click$ = fromEvent(document.getElementById('btn')!, 'click');
    click$
      .pipe(
        map((x) => interval(1000)),
        take(3),
        mergeAll()
      )
      .subscribe(console.log);
  }

  // 这里没太看懂到底是啥意思
  testSwitchAll() {
    const clicks = fromEvent(document, 'click').pipe(
      tap(() => console.log('click'))
    );
    const source = clicks.pipe(map((ev) => interval(1000)));

    source.pipe(switchAll()).subscribe((x) => console.log(x));
  }

  testMergeAll() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map((ev) => interval(1000).pipe(take(10))));
    const firstOrder = higherOrder.pipe(mergeAll(2));
    firstOrder.subscribe((x) => console.log(x));
  }
}
