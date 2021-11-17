import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  public msg: Subject<string> = new Subject();

  constructor() { }

  public getMsg(): Observable<string> {
    return this.msg.asObservable();
  }

  public setMsg(): void {
    this.msg.next();
  }
}
