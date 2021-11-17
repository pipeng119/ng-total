import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, finalize, map, retryWhen, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-handle-error';

  @ViewChild('child',{static: true}) child: any

  public data$ = this.http.get('http://localhost:8000/api/user')
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.easyHttp();
    // this.httpCatchError();
    // this.httpfinalize();
    // this.httpRetry();
    console.log(this.child)
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
