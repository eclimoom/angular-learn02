import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import {RouterModule} from '@angular/router';
import {LoggerService} from './service/logger.service';
import {SpinnerService} from './service/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent, BaseLayoutComponent, LoginLayoutComponent],
  providers: [LoggerService, SpinnerService],
})
export class CoreModule { }
