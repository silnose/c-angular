import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    //Toma elemento nativo del html y lo transforma en el DOM
    element.nativeElement.style.backgroundColor = 'red';
  }
}
