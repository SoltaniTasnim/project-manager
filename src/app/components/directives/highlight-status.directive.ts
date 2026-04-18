import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

type TaskStatus = 'En attente' | 'En cours' | 'Terminé';

@Directive({
  selector: '[appHighlightStatus]',
})
export class HighlightStatusDirective implements OnChanges {
  @Input('appHighlightStatus') status: TaskStatus | string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');

    if (this.status === 'En attente') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#FEF9C3');
    } else if (this.status === 'En cours') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#DBEAFE');
    } else if (this.status === 'Terminé') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#DCFCE7');
    }
  }
}
