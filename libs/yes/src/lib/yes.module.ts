import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MenuComponent } from './shell/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  declarations: [WelcomeComponent, TopBarComponent, MenuComponent],
  exports: [WelcomeComponent, TopBarComponent, MenuComponent],
})
export class YesModule {}

