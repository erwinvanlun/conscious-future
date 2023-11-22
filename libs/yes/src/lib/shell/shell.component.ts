import { Component } from '@angular/core';

@Component({
  selector: 'yes-menu',
  templateUrl: 'shell.component.html',
  styleUrl: 'shell.component.scss'
})
export class ShellComponent {

  phoneNavVisibility = false;

  togglePhoneNavVisibility () {
    this.phoneNavVisibility = !this.phoneNavVisibility
  }
}
