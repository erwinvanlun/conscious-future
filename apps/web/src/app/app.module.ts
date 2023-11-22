import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ENV, YesModule } from '@biodanza/yes';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    YesModule,
  ],
  providers: [    { provide: ENV, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule {}


