import { NgModule } from "@angular/core";
import {ToDoListComponent} from "./to-do-list.component";
import {AddItemComponent} from "./add-item/add-item.component";
import {FormsModule} from "@angular/forms";
import {ListComponent} from "./list/list.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ToDoListComponent,
    AddItemComponent,
    ListComponent
  ],
  imports: [
    SharedModule
  ]
})

export class ToDoListModule { }
