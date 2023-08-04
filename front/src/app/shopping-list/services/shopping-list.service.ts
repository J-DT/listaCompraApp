import {Injectable} from '@angular/core';
import { v4 as uuid } from 'uuid';

import {Item} from "../interfaces/item.interface";


@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public items: Item[] = [{
    id: uuid(),
    name: 'pan',
    amount: 1,
    units:''
  },{
    id: uuid(),
    name: 'leche',
    amount: 4,
    units: 'cartones'
  },{
    id: uuid(),
    name:'harina',
    amount:1,
    units:'kg'
  },{
    id: uuid(),
    name:'patatas',
    amount:1,
    units:'saco'
  }];

  addItem(item: Item):void{
    const newItem: Item = { ...item, id: uuid()};
    console.log("Adding2: ", {...newItem});
    this.items.push(newItem);

  };


  getItemToEditById(id: string): Item[] {
    console.log("Editing: ", this.items.find( item => item.id === id));
    return this.items.filter( item => item.id === id);
    // throw id;
  }

  editItem(item: Item):void{
    const index: number = this.items.findIndex( editingItem => editingItem.id === item.id);
    if (index !== -1) {
      this.items[index]=item

    }
  }

  deleteItemById(id:string):void{
    console.log("Deleting: ", this.items.find( item => item.id === id));
    this.items = this.items.filter( item => item.id != id);
  }

  constructor() {
  }
}
