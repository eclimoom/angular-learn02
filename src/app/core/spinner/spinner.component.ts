import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoggerService} from '../service/logger.service';
import {SpinnerService, SpinnerState} from '../service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    console.log(this.visible);
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        this.visible = state.show;
        this.loggerService.log(`visible=${this.visible}`);
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
