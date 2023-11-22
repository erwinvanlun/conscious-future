import { Component, Inject } from '@angular/core';
import { ENV } from '@biodanza/yes';
import { Environment } from '../environment/environment.type';

@Component({
  selector: 'yes-menu',
  templateUrl: 'shell.component.html',
  styleUrl: 'shell.component.scss'
})
export class ShellComponent {

  phoneNavVisibility = false;



  constructor (  @Inject(ENV) environment: Environment) {
  console.log(environment.branchName);

  }

  togglePhoneNavVisibility () {
    this.phoneNavVisibility = !this.phoneNavVisibility
  }
}
