import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MenuComponent } from './shell/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatLineModule, MatSidenavModule, RouterLink],
  declarations: [MusicComponent, TopBarComponent, MenuComponent],
  exports: [MusicComponent, TopBarComponent, MenuComponent],
})
export class YesModule {}

