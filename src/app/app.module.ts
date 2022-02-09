import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateMgService } from './state-mg.service';
import { SumitComponent } from './sumit/sumit.component';

@NgModule({
  declarations: [
    AppComponent,
    SumitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StateMgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
