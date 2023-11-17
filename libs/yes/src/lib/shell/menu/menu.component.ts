import { Component } from '@angular/core';

@Component({
  selector: 'yes-menu',
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.scss'
})
export class MenuComponent {

  isScreenSmall = true;
  navVisible = true;

  toggleNavigation () {
    this.navVisible = !this.navVisible
  }
}
