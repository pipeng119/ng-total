import { Component } from '@angular/core';
import { INav } from './mode/tpography';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workbook';
  public nav: INav[] = [
    {
      name: '排版',
      url: 'typography'
    }
  ]
}
