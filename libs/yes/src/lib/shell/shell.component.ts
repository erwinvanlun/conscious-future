import { Component } from '@angular/core';

@Component({
  selector: 'yes-menu',
  templateUrl: 'shell.component.html',
  styleUrl: 'shell.component.scss'
})
export class ShellComponent {

  isScreenSmall = true;
  navVisible = true;

  toggleNavigation () {
    this.navVisible = !this.navVisible
  }
}
