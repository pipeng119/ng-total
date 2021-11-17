import { Component, OnInit } from '@angular/core';
import { MsgService } from '../service/msg.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public name: string = ''

  constructor(public msgService: MsgService) { }

  ngOnInit(): void {
  }

  public publish() {
    this.msgService.msg.next(this.name);
  }
}
