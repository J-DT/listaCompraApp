import {Component} from '@angular/core';
import {Item} from "../interfaces/item.interface";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {


  constructor(private shoppingListService: ShoppingListService ) {  }

  public item: Item ={
    id:'',
    name:'',
    amount:0,
    units:'',
  }

  get items(): Item[] {
    return [...this.shoppingListService.items];
  }

  getItemToEditById(id: string): void {
    // console.log(this.shoppingListService.getItemToEditById(id));
    this.item = this.shoppingListService.getItemToEditById(id)[0];
  }

  onEditItem(item: Item):void{
    this.shoppingListService.editItem(item);
  };

  onDeleteItem(id: string):void{
    this.shoppingListService.deleteItemById(id);
  };

  onNewItem(item: Item):void{
    this.shoppingListService.addItem(item);
  }

}
