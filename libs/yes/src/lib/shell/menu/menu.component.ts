import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yes-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  constructor (private router: Router) {
  }

  async onNavigate(url: string) {
   await this.router.navigateByUrl(url);
  }
}
