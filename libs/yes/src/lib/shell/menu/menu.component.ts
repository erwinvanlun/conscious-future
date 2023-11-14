import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yes-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  constructor (public router: Router) {

  }

  async onNavigate(url: string) {
   await this.router.navigateByUrl(url);
  }
}
