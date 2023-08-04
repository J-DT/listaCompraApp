import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Item} from "../../interfaces/item.interface";

@Component({
  selector: 'shopping-list-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {

  @Input()
  public itemToEdit: Item = {
    id:'',
    name:'',
    amount:0,
    units:'',
  };

  @Output()
  onNewItem: EventEmitter<Item> = new EventEmitter();

  @Output()
  onEditItem: EventEmitter<Item> = new EventEmitter();

  public item: Item = {
    id:'',
    name:'',
    amount:0,
    units:'',
  }
  public editionMode: boolean = false;

  emitNewItem():void{
    console.log("Adding: ", {...this.item});
    if( this.item.name.length === 0) return;

    this.onNewItem.emit({...this.item});

    this.item = {id: '', name:'', amount:0, units:''};
  }

  ngOnChanges():void {
    if (this.itemToEdit.name!='') {
      this.item = { ...this.itemToEdit };
      this.editionMode = true;
    }
  }

  emitEdittedItem():void{
    console.log("Implementing edition: ", {...this.item});
    if( this.item.name.length === 0) return;

    this.onEditItem.emit({...this.item});

    this.item = {id: '', name:'', amount:0, units:''};
    this.editionMode = false;
  }
  cancelEdition():void{
    this.item = {id: '', name:'', amount:0, units:''};
    this.editionMode = false;
  }

}
