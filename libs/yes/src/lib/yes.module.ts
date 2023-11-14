import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MenuComponent } from './shell/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  declarations: [MusicComponent, TopBarComponent, MenuComponent],
  exports: [MusicComponent, TopBarComponent, MenuComponent],
})
export class YesModule {}

