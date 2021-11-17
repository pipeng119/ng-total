import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { MsgService } from '../service/msg.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public result: any;

  constructor(private userService: UserService, private msgService: MsgService) { }

  ngOnInit(): void {
    this.getData();
    this.msgService.getMsg().subscribe(res => {
      console.log('res', res)
    })
  }
  public getData(): void {
    this.userService.getAdmin().subscribe(res => {
      this.result = res;
    })
  }
}
