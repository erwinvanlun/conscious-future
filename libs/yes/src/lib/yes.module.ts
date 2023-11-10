import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WelcomeComponent, TopBarComponent],
  exports: [WelcomeComponent, TopBarComponent],
})
export class YesModule {}

