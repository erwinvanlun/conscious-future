import { Component, Input } from '@angular/core';

@Component({
  selector: 'yes-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() widthInRem = 10;
}
