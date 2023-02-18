import { Component, OnInit } from '@angular/core';
import { ChildDirective } from '../child.directive';
import { ParentDirective } from '../parent.directive';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  standalone: true,
  imports: [ChildDirective],
})
export class ContainerComponent {}
