import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { watch } from 'rxjs-watcher';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { ListService, TList } from '../services/list.service';

@Component({
  selector: 'app-simulate-effect',
  templateUrl: './simulate-effect.component.html',
  styleUrls: ['./simulate-effect.component.css'],
})
export class SimulateEffectComponent implements OnInit {
  list!: string[];

  @ViewChild('search', { static: true }) searchEl!: ElementRef;

  constructor(private listService: ListService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initSearchEvent();
  }

  initSearchEvent() {
    fromEvent(this.searchEl.nativeElement, 'input')
      .pipe(
        filter(
          (event: any) => (event.target as HTMLInputElement).value.length > 2
        ),
        // debounceTime(300),
        map((event: any) => (event.target as HTMLInputElement).value),
        watch('keyword'),
        switchMap((str) => this.getListByKeyword(str)),
        watch('auto complete')
      )
      .subscribe((res) => {
        this.list = res;
      });
  }

  getListByKeyword(value: string) {
    return this.listService.getList(value);
  }
}
