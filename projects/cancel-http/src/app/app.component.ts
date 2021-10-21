import { ActivationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CancelHttpService } from './service/cancel-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private cancelService: CancelHttpService) {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.cancelService.cancelPendingRequests()
      }
    })
  }

}
