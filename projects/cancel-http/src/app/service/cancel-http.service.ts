import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelHttpService {

  public cancelPenddingRequest$ = new Subject<void>();

  constructor() { }

  public cancelPendingRequests(): void {
    this.cancelPenddingRequest$.next();
  }

  public onCancelPendingRequests(): Observable<void> {
    return this.cancelPenddingRequest$.asObservable();
  }
}
