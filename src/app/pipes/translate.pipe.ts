import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'translate'
})

export class TranslatePipe implements PipeTransform {
  public words: any = {
    directors: 'Dir.',
  }

  transform(value: any) {
    if((value != false) && !value) return value;
    value = value.toString().toLowerCase();
    if(value in this.words && this.words[value]) return this.words[value];
    return value;
  }
}


