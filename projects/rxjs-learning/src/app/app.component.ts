import { filter, take, concatAll } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { from, iif, interval, Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-learning';

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

    // this.testTake();
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

}
