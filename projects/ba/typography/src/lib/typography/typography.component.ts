import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-typography',
  // templateUrl: './typography.component.html',
  template: `
   <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
  `,
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
