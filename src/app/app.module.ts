import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusWithComponent } from './focus-with/focus-with.component';
import { FocusInMenuComponent } from './focus-in-menu/focus-in-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusWithComponent,
    FocusInMenuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
