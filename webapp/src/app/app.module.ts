import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HogeComponent } from './hoge/hoge.component';
import { FugaComponent } from './fuga/fuga.component';

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FugaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
