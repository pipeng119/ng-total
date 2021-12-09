import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  onChange(): Observable<any> {
    return this.tokenService.change$;
  }
  constructor(public tokenService: TokenService) { }

  ngOnInit(): void {
    console.log(22)
    this.onChange().subscribe(res => console.log(res))
  }

}
