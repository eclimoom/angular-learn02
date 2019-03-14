import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './components/login.component';

/* Use this routes definition in case you want to make them lazy-loaded */

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule,
    LoginComponent,
  ],
})
export class LoginModule { }
