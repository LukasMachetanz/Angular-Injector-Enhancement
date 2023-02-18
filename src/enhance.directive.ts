import {
  Directive,
  Inject,
  Injector,
  Input,
  OnInit,
  ReflectiveInjector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ParentDirective } from './parent.directive';

/**
 * https://stackoverflow.com/questions/45479701/how-to-add-another-provider-to-the-injector
 */
@Directive({
  selector: '[appEnhance]',
  standalone: true,
})
export class EnhanceDirective implements OnInit {
  @Input()
  public appEnhance: Observable<ParentDirective> | undefined;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>,
    private readonly injector: Injector
  ) {}

  public ngOnInit(): void {
    this.appEnhance?.subscribe((parentDirective) => {
      const injector = Injector.create({
        providers: [{ provide: ParentDirective, useValue: parentDirective }],
        parent: this.injector,
      });

      this.viewContainerRef.createEmbeddedView(this.templateRef, undefined, {
        injector,
      });
    });
  }
}
