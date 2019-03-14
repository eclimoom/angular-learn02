import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

@NgModule({
  declarations: [SpinnerComponent, FooterComponent, HeaderComponent, AppLayoutComponent, LoginLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
