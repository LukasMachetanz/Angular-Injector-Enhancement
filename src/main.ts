import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';
import { EditorComponent } from './editor/editor.component';
import { EnhanceDirective } from './enhance.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    EditorComponent,
    ContainerComponent,
    EnhanceDirective,
  ],
  template: `
    <app-editor #appEditor>
      <app-container *appEnhance="appEditor.parentDirective$"></app-container>
    </app-editor>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
