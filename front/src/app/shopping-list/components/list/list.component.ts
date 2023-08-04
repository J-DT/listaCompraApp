import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../interfaces/item.interface";

@Component({
  selector: 'shopping-list-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public itemList: Item[] = [];


  @Output()
  onOpenEditItem: EventEmitter<string> = new EventEmitter();
  openEditItem( id: string ):void{
    this.onOpenEditItem.emit(id);
  };


  @Output()
  onDeleteItem: EventEmitter<string> = new EventEmitter();

  deleteItem( id: string ):void{
    this.onDeleteItem.emit(id);
  };



}
