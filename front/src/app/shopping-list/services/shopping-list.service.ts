import {Injectable} from '@angular/core';
import { v4 as uuid } from 'uuid';

import {Item} from "../interfaces/item.interface";


@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public items: Item[] = [{
    id: uuid(),
    name: 'Pan',
    amount: 1
  },{
    id: uuid(),
    name: 'Leche',
    amount: 4
  },{
    id: uuid(),
    name:'Harina',
    amount:1
  }];

  addItem(item: Item):void{
    const newItem: Item = { ...item, id: uuid()};
    console.log("Adding2: ", {...newItem});
    this.items.push(newItem);

  };

  deleteItemById(id:string):void{
    console.log("Deleting: ", this.items.find( item => item.id === id));
    this.items = this.items.filter( item => item.id != id);
  }

  constructor() {
  }
}
