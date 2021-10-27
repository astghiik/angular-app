import { Component, Input } from "@angular/core";

@Component({
  templateUrl: 'list.component.html',
  selector: 'list'
})

export class ListComponent {
  @Input() list: any;

  removeItem(txt: string) {
    this.list.splice(this.list.findIndex((item: any) => item.txt === txt), 1);
  }
}
