import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public initObj = {
    a: [
      {
        b: 3
      }
    ]
  }

  public tokenChange$ = new BehaviorSubject<boolean>(true);
  public change$ = this.tokenChange$.pipe(
    filter(changed => changed),
    share(),
    map(() => this.initObj),
  );

  constructor() { }

}
