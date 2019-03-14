import {Component} from '@angular/core';

@Component({
  selector: 'app-base-layout',
  template: `<app-header></app-header>
              <div class="mt-1">
                <router-outlet></router-outlet>
              </div>`
})
export class BaseLayoutComponent {

}
