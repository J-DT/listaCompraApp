import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainPageComponent} from "./pages/main-page.component";
import { ListComponent } from './components/list/list.component';
import { AddItemComponent} from './components/add-item/add-item.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddItemComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule { }
