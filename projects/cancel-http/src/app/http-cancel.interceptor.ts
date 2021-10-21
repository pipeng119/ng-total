import { CancelHttpService } from './service/cancel-http.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators'

@Injectable()
export class HttpCancelInterceptor implements HttpInterceptor {

  constructor(private cancelHttpService: CancelHttpService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(evt => console.log(evt)), takeUntil(this.cancelHttpService.onCancelPendingRequests()))
  }
}
