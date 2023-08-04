import {Component, EventEmitter, Output} from '@angular/core';

import {Item} from "../../interfaces/item.interface";

@Component({
  selector: 'shopping-list-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
  @Output()
  onNewItem: EventEmitter<Item> = new EventEmitter();

  public item: Item ={
    id:'',
    name:'',
    amount:0,
    units:'',
  }

  emitItem():void{
    console.log("Adding: ", {...this.item});
    if( this.item.name.length === 0) return;

    this.onNewItem.emit({...this.item});

    this.item = {id: '', name:'', amount:0, units:''};
  }
}
