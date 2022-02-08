import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighLight') speed: number = 0;

  @HostListener('mouseenter') onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'green';
    (this.el.nativeElement as HTMLElement).style.transition =
      'all ' + this.speed + 's';
  }

  @HostListener('mouseleave') onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor =
      'transparent';
  }
}
