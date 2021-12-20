import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type TList = { id: number; name: string };

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getList(keyword: string) {
    return this.http.get<Array<string>>(
      `https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=${keyword}`
    );
  }
}
