import { Directive } from '@angular/core';

@Directive({
  selector: '[appParent]',
  standalone: true,
})
export class ParentDirective {
  public readonly name = 'ParentDirective';
}
