import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { ShellComponent } from './shell/shell.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatLineModule,
    MatSidenavModule,
    RouterLink
  ],
  declarations: [MusicComponent, ShellComponent, LogoComponent],
  exports: [MusicComponent, ShellComponent]
})
export class YesModule {}

