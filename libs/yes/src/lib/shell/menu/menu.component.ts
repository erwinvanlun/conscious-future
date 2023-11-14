import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'yes-menu',
  templateUrl: 'menu.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule]
})
export class MenuComponent {
}
