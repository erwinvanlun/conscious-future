import { Component, Inject } from '@angular/core';
import { ENV } from '../environment/environment';
import { Environment } from '../environment/environment.type';

@Component({
    selector: 'yes-shell',
    templateUrl: 'shell.component.html',
    styleUrls: ['shell.component.scss']
})
export class ShellComponent {

    phoneNavVisibility = false;
    gitBranch = '';

    constructor(@Inject(ENV) environment: Environment) {
        this.gitBranch = environment.branchName ? environment.branchName : 'undefined';
    }

    togglePhoneNavVisibility() {
        this.phoneNavVisibility = !this.phoneNavVisibility
    }
}
