import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer :Renderer2) {

}

@HostListener('mouseenter')onmouseover(){
  this.renderer.setStyle(this.element.nativeElement,'margin','0% 30%');
  this.renderer.setStyle(this.element.nativeElement,'padding','5px 10px');
  this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
@HostListener('mouseleave')onmouseout(){
  this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px');
  this.renderer.setStyle(this.element.nativeElement,'padding','1px');
  this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
}