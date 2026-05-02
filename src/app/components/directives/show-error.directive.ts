import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { merge, Subscription } from 'rxjs';

@Directive({
  selector: '[appShowError]',
})
export class ShowErrorDirective implements OnInit, OnChanges, OnDestroy {
  @Input() appShowError: AbstractControl | null = null;
  @Input() appShowErrorErrorType = '';

  private subscription?: Subscription;
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.watchControl();
    this.updateView();
  }

  ngOnChanges(): void {
    this.watchControl();
    this.updateView();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private watchControl() {
    this.subscription?.unsubscribe();

    if (!this.appShowError) {
      return;
    }

    this.subscription = merge(
      this.appShowError.statusChanges,
      this.appShowError.valueChanges,
    ).subscribe(() => this.updateView());
  }

  private updateView() {
    const shouldShow =
      !!this.appShowError &&
      this.appShowError.touched &&
      this.appShowError.hasError(this.appShowErrorErrorType);

    if (shouldShow && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!shouldShow && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
