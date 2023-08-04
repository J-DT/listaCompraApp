import {Component} from '@angular/core';
import {Item} from "../interfaces/item.interface";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor( private shoppingListService: ShoppingListService) {  }

  get items(): Item[] {
    return [...this.shoppingListService.items];
  }

  onDeleteItem(id: string):void{
    this.shoppingListService.deleteItemById(id);
  };

  onNewItem(item:Item):void{
    this.shoppingListService.addItem(item);
  }

}
