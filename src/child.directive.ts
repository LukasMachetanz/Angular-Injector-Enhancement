import { Directive } from '@angular/core';
import { ParentDirective } from './parent.directive';

@Directive({
  selector: '[appChild]',
  standalone: true,
})
export class ChildDirective {
  constructor(private readonly parentDirective: ParentDirective) {
    console.log(this.parentDirective.name);
  }
}
