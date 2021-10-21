import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public result: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
  }
  public getData(): void {
    this.userService.getList().subscribe(res => {
      this.result = res;
    })
  }
}
