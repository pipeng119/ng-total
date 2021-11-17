import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    h1{
     text-align: center;
    }
    `
  ]
})
export class AppComponent {
  title = '一个用于测试各种angular的项目';
}
