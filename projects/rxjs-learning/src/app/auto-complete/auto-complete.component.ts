import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, retry } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  url =
    'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

  list: Array<string> = [];

  activeStr!: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initEvent();
  }

  initEvent() {
    const searchInput = document.getElementById('search');
    const suggestList = document.getElementById('suggest-list');

    const keyword$ = fromEvent(searchInput!, 'input');
    const selectItem$ = fromEvent(suggestList!, 'click');
    keyword$
      .pipe(
        // 字符大于2就发请求
        filter((event) => (event.target as HTMLInputElement).value.length > 2),
        switchMap((event) =>
          this.getSuggestList((event.target as HTMLInputElement).value).pipe(
            // 如果失败重试3次
            retry(3)
          )
        ),
        map((res) => res[1])
      )
      .subscribe((res) => {
        this.list = res;
      });
  }

  getSuggestList(keyword: string) {
    return this.http.get<Array<Array<string>>>(this.url + '&search=' + keyword);
  }
}
