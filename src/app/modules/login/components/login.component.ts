import { Component, OnInit } from '@angular/core';
import {LoggerService, SpinnerService} from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    // this.loggerService.log(`Getting login`);
    this.spinnerService.show();
    setTimeout(() => {
      // this.loggerService.log(`We have login end ....`);
      this.spinnerService.hide();
    }, 0);

  }

}
