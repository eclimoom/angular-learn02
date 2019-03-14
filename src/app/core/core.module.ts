import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
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
  declarations: [SpinnerComponent, FooterComponent,
    HeaderComponent, BaseLayoutComponent, LoginLayoutComponent],
  providers: [LoggerService, SpinnerService],
})
export class CoreModule { }
