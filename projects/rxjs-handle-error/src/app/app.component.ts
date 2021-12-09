import { TokenService } from './service/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject, ConnectableObservable, from, interval, Observable, of, Subject, throwError, timer } from 'rxjs';
import { catchError, filter, finalize, map, publish, retryWhen, share, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-handle-error';

  @ViewChild('child', { static: true }) child: any;



  onChange(): Observable<any> {
    return this.tokenService.change$;
  }

  public testTimer$!: Observable<number>;

  public data$ = this.http.get('http://localhost:8000/api/user')
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.onChange().subscribe(res => console.log(res));
    this.testHotOrCode();
    // this.easyHttp();
    // this.httpCatchError();
    // this.httpfinalize();
    // this.httpRetry();
    // this.testTimer$ = interval(1000);
    // this.testTimer$.subscribe(num => console.log('first------->', num));

    // setTimeout(() => {
    //   this.testTimer$.subscribe(num => console.log('second------->', num));
    // },2000)
  }

  public testHotOrCode(): void {
    // let obs$ = from([1, 2, 3, 4, 5]).pipe(
    //   publish()
    // ) as ConnectableObservable<any>;
    // obs$.connect();

    // obs$.subscribe(data => { console.log("1st subscriber:" + data) });
    // setTimeout(() => {
    //   obs$.subscribe(data => { console.log("2st subscriber:" + data) });
    // }, 2100);
    // let obs$ = from([1, 2, 3, 4]).pipe(
    //   share()
    // )
    // let obs$ = new Subject<boolean>();
    let obs$ = new BehaviorSubject<boolean>(true);
    let change$ = obs$.pipe(
      filter(changed => changed),
      map(() => '超哥YYDS'),
      share()
    );
    change$.subscribe(data => { console.log("1st subscriber:" + data) });
    change$.subscribe(data => { console.log("2st subscriber:" + data) });
    obs$.next(true)

  }

  // 简易的http请求
  public easyHttp(): void {
    this.data$.subscribe(
      res => {
        console.log('res: ', res);
      },
      err => console.error('HTTP ERROR', err),
      () => console.log('HTTP request completed')
    )
  }

  public httpCatchError(): void {
    this.data$.pipe(
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err)

      })
    ).subscribe(
      res => {
        console.log('res: ', res);
      },
      err => console.log('HTTP ERROR', err),
      () => console.log('HTTP request completed')
    )
  }

  public httpfinalize(): void {
    this.data$.pipe(
      map((res: any) => res['payload']),
      catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return throwError(err);
      }),
      finalize(() => console.log('first finalize() block executed')),
      catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return of([]);
      }),
      finalize(() => console.log("second finalize() block executed"))
    ).subscribe(
      res => {
        console.log('res: ', res);
      },
      err => console.log('HTTP ERROR', err),
      () => console.log('HTTP request completed')
    )
  }

  public httpRetry(): void {
    this.data$.pipe(
      tap(() => console.log('HTTP request executed')),
      map((res: any) => res.name),
      shareReplay(),
      retryWhen(errors => {
        return errors.pipe(
          tap(() => console.log('retrying...')
          )
        )
      })
    ).subscribe(
      res => {
        console.log('res: ', res);
      },
      err => console.log('HTTP ERROR', err),
      () => console.log('HTTP request completed')
    )
  }


}
