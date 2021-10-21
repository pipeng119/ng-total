import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public result: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
  }
  public getData(): void {
    this.userService.getAdmin().subscribe(res => {
      this.result = res;
    })
  }
}
