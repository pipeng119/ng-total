import { CancelHttpService } from './../service/cancel-http.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../AutoUnsubscribe';
import { MsgService } from '../service/msg.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
// @AutoUnsubscribe
export class UserListComponent implements OnInit {

  public result: any;

  constructor(
    public userService: UserService,
    private msgService: MsgService
    // private router: Router,
    // private httpCancelService: CancelHttpService
  ) {

  }

  ngOnInit(): void {
    this.getData();
    this.msgService.getMsg().subscribe(res => {
      console.log('res', res)
    })
  }

  public getData(): void {
    this.userService.getUser().subscribe(res => {
      this.result = res;
    })
  }

}
