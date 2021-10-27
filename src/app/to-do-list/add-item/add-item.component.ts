import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  templateUrl: 'add-item.component.html',
  selector: 'add-item'
})

export class AddItemComponent {
  public newItem: string = '';

  @Output() newItemEvent = new EventEmitter<string>();


  addNewItem(value: string) {
    if (!value) {
      this.newItem = '';
      return;
    }
    this.newItemEvent.emit(value);
    this.newItem = '';
  }
}
