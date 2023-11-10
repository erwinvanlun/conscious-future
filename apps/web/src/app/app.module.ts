import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { YesModule } from '@biodanza/yes';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../../../libs/yes/src/lib/shell/menu/menu.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    YesModule,
    RouterModule,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


