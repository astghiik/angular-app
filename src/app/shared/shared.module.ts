import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TranslatePipe} from "../pipes/translate.pipe";
import {RouterModule} from "@angular/router";
import {SafeUrlPipe} from "../pipes/safe-url.pipe";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    TranslatePipe,
    SafeUrlPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslatePipe,
    SafeUrlPipe
  ]
})
export class SharedModule { }
