import { Component } from "@angular/core";

@Component({
  templateUrl: 'to-do-list.component.html',
})

export class ToDoListComponent {
  public list: any = [];

  addItem(item: string) {
    this.list.push({ txt: item, checked: false });
    console.log(this.list)
  }
}
