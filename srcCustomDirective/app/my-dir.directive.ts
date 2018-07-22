import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective 
{
  // Use dependency injection to access DOM element
  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('blue');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('yellow');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }
}
