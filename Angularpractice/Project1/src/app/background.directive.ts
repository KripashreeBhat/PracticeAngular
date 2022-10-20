import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private ele:ElementRef, private render:Renderer2) {

   }
@HostBinding('style.backgroundColor')background: string = "#FF8585";
@HostBinding('style.border')border: string = "none";
@HostListener('mouseenter')onmouseenter(){
this.background="lightpink";
this.border="coral 2px solid"
}
@HostListener('mouseleave')onmouseleave(){
  this.background="transparent";
  this.border="none"
}
}
