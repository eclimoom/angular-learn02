import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseLayoutComponent} from './core/layout/base-layout/base-layout.component';
import {LoginLayoutComponent} from './core/layout/login-layout/login-layout.component';

const routes: Routes = [
  //  base layout
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
    ]
  },

  //  login layout
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
