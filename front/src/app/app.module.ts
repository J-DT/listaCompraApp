import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ShoppingListModule} from "./shopping-list/shopping-list.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
