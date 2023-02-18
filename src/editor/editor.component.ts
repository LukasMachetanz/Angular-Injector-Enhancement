import { Component, ContentChild, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ParentDirective } from '../parent.directive';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  standalone: true,
  imports: [ParentDirective],
  exportAs: 'appEditor',
})
export class EditorComponent {
  public readonly parentDirective$ = new Subject<ParentDirective>();

  @ViewChild(ParentDirective)
  public set parentDirective(parentDirective: ParentDirective) {
    this.parentDirective$.next(parentDirective);
  }
}
