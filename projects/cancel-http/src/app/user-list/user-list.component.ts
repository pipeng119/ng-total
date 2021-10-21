import { CancelHttpService } from './../service/cancel-http.service';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../AutoUnsubscribe';

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
    // private router: Router,
    // private httpCancelService: CancelHttpService
  ) {

  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.userService.getUser().subscribe(res => {
      this.result = res;
    })
  }

}
