import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(`${this.url}user`)
  }

  public getList(): Observable<any> {
    return this.http.get(`${this.url}list`)
  }
  public getAdmin(): Observable<any> {
    return this.http.get(`${this.url}admin`)
  }

}
