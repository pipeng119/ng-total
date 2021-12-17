import { Component, OnInit } from '@angular/core';

import {
  AsyncSubject,
  BehaviorSubject,
  interval,
  Observable,
  of,
  ReplaySubject,
  Subject,
  Subscription,
  timer,
} from 'rxjs';
import {
  multicast,
  publish,
  publishReplay,
  refCount,
  take,
  tap,
  share,
  mapTo,
  map,
} from 'rxjs/operators';
import { watch } from 'rxjs-watcher';
const emptyObserver = {
  next: () => {},
  error: (err: any) => {
    throw err;
  },
  complete: () => {},
};
class MyObserver {
  destination;
  isStopped!: boolean;
  constructor(destinationOrNext?: any, error?: any, complete?: any) {
    switch (arguments.length) {
      case 0:
        // 空的observer
        this.destination = this.safeObserver(emptyObserver);
        break;
      case 1:
        if (!destinationOrNext) {
          // 空的observer
          this.destination = this.safeObserver(emptyObserver);
        }
        if (typeof destinationOrNext === 'object') {
          this.destination = this.safeObserver(destinationOrNext);
        }
        break;
      default:
        // 如果上面的情况都不是的话，就只能是传入了三个函数
        this.destination = this.safeObserver(
          destinationOrNext,
          error,
          complete
        );
        break;
    }
  }

  next(value: any) {
    if (!this.isStopped && this.next) {
      try {
        // 发送值
        this.destination?.next(value);
      } catch (anotherErr) {
        this.unsubscribe();
        throw anotherErr;
      }
    }
  }

  error(err: any) {
    if (!this.isStopped && this.error) {
      try {
        // 发送错误
        this.destination?.error(err);
      } catch (anthorError) {
        this.unsubscribe();
        throw anthorError;
      }
      this.unsubscribe();
    }
  }

  complete() {
    if (!this.isStopped && this.complete) {
      try {
        this.destination?.complete(); // 發送停止訊息
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
      this.unsubscribe(); // 發送停止訊息後退訂
    }
  }

  safeObserver(
    observerOrNext: {
      next: (x: any) => void;
      error: (err: any) => never;
      complete: () => void;
    },
    error?: any,
    complete?: any
  ) {
    let next = (x: any) => {};
    if (typeof observerOrNext === 'function') {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next || ((x: any) => {});
      error =
        observerOrNext.error ||
        function (err: any) {
          throw new Error();
        };
      complete = observerOrNext.complete || (() => {});
    }
    return {
      next: next,
      error: error,
      complete: complete,
    };
  }

  unsubscribe() {
    this.isStopped = true;
  }
}

class MyObservable {
  _subscribe;
  constructor(subscribe: any) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  subscribe(...args: any) {
    const observer = new MyObserver(...arguments);
    this._subscribe(observer);
    return observer;
  }
}

function create(subscriber: {
  (observer: any): void;
  (arg0: MyObserver): void;
}) {
  const observable = {
    subscribe: function (observerOrNdex: any, error?: any, complete?: any) {
      const realObserver = new MyObserver(observerOrNdex, error, complete);
      subscriber(realObserver);
      return realObserver;
    },
  };
  return observable;
}

var observable = create(function (observer: {
  next: (arg0: string | number) => void;
  complete: () => void;
}) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next('not work');
});

var observer = {
  next: function (value: any) {
    console.log(value);
  },
  complete: function () {
    console.log('complete!');
  },
};

// observable.subscribe(observer);
let observableA = new MyObservable(function (observer: {
  next: (arg0: string | number) => void;
  complete: () => void;
}) {
  observer.next(4);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next('not work');
});

observableA.subscribe(observer);

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.testSimulateObservable();
  }

  simulateSubject() {
    var source = interval(1000).pipe(take(3));

    var observerA = {
      next: (value: string) => console.log('A next: ' + value),
      error: (error: string) => console.log('A error: ' + error),
      complete: () => console.log('A complete!'),
    };

    var observerB = {
      next: (value: string) => console.log('B next: ' + value),
      error: (error: string) => console.log('B error: ' + error),
      complete: () => console.log('B complete!'),
    };

    var subject: { [x in string]: any } = {
      observers: [],
      subscribe: function (observer: any) {
        this.observers.push(observer);
      },
      next: function (value: any) {
        this.observers.forEach((o: any) => o.next(value));
      },
      error: function (error: any) {
        this.observers.forEach((o: any) => o.error(error));
      },
      complete: function () {
        this.observers.forEach((o: any) => o.complete());
      },
    };

    subject.subscribe(observerA);

    source.subscribe(subject as any);

    setTimeout(() => {
      subject.subscribe(observerB);
    }, 1000);
  }

  testSubject() {
    let sub = new Subject();
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(() => {
      sub.subscribe(console.log);
    }, 3000);
  }

  /* BehaviorSubject: 需要给定初始值，并且可以保存最后一个
   * 代表的是一种状态
   */
  testBehaviorSubject() {
    let sub = new BehaviorSubject(0);
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(() => {
      sub.subscribe(console.log);
    }, 3000);
  }

  // 事件重放
  testReplaySubject() {
    let sub = new ReplaySubject(2);
    sub.next(1);
    sub.next(2);
    sub.next(3);
    setTimeout(() => {
      sub.subscribe(console.log);
    }, 3000);
  }

  // 必须要等流结束，才会发出最后一个值
  testAsyncSubject() {
    let sub = new AsyncSubject();
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.complete();
    var observerB = {
      next: (value: any) => console.log('B next: ' + value),
      error: (error: any) => console.log('B error: ' + error),
      complete: () => console.log('B complete!'),
    };
    setTimeout(() => {
      console.log(123);
      sub.subscribe(observerB);
    }, 3000);
  }

  testRefCount() {
    let source = interval(1000).pipe(
      tap((x) => console.log('send: ' + x)),
      multicast(new Subject()),
      refCount()
    );
    let obsA = {
      next: (value: number) => console.log('A next: ' + value),
      error: (error: Error) => console.log('A error: ' + error),
      complete: () => console.log('A complete!'),
    };

    var obsB = {
      next: (value: number) => console.log('B next: ' + value),
      error: (error: Error) => console.log('B error: ' + error),
      complete: () => console.log('B complete!'),
    };

    let subscriptionA = source.subscribe(obsA);
    let subscriptionB: Subscription;
    setTimeout(() => {
      subscriptionB = source.subscribe(obsB);
    }, 1000);

    setTimeout(() => {
      subscriptionA.unsubscribe();
      subscriptionB.unsubscribe();
    }, 5000);
  }

  testPublish() {
    // 1秒后发出值
    const source = timer(1000);
    // 输出副作用，然后发出结果
    const example = source.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );

    /*
      ***不共享的话，副作用会执行两次***
      输出:
      "***SIDE EFFECT***"
      "***RESULT***"
      "***SIDE EFFECT***"
      "***RESULT***"
    */
    // const subscribe = example.subscribe((val) => console.log(val));
    // const subscribeTwo = example.subscribe((val) => console.log(val));

    // 在多个订阅者间共享 observable
    const sharedExample = example.pipe(share());
    /*
      ***共享的话，副作用只执行一次***
      输出:
      "***SIDE EFFECT***"
      "***RESULT***"
      "***RESULT***"
    */
    const subscribeThree = sharedExample.subscribe((val) => console.log(val));
    const subscribeFour = sharedExample.subscribe((val) => console.log(val));
    const subscribeFive = sharedExample.subscribe((val) => console.log(val));
  }

  // 这种情况下，a和c会依然执行
  testDeepSubject() {
    const source = interval(1000);
    const subject = new Subject();

    const example = subject.pipe(
      map((x) => {
        if (x === 1) {
          throw new Error('oops');
        }
        return x;
      })
    );
    subject.subscribe((x) => console.log('A', x));
    example.subscribe((x) => console.log('B', x));
    subject.subscribe((x) => console.log('C', x));

    source.subscribe(subject);
  }

  testRandomObs() {
    // (Observable.prototype as any).debug = (window as any).rxDevTool(Observable);
    var result = interval(1000).pipe(
      take(6),
      map((x) => Math.random()),
      watch('testRandomObs', 10)
      // share()
    ); // side-effect，平常有可能是呼叫 API 或其他 side effect

    var subA = result.subscribe((x) => console.log('A: ' + x));
    // var subB = result.subscribe((x) => console.log('B: ' + x));
  }

  testSimulateObservable() {
    function of(subscriber: Function) {
      let observable = {
        subscribe(observer: any) {
          subscriber(observer);
        },
      };
      return observable;
    }

    let observable = of(function (observer: {
      next: (arg0: number) => void;
      complete: () => void;
    }) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer = {
      next(value: any) {
        console.log(value);
      },
      complete() {
        console.log('complete!');
      },
    };

    observable.subscribe(observer);
  }
}
