import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirectiver]'
})
export class MyDirectiverDirective {

  constructor(private elemRef: ElementRef, private render: Renderer2) {
    //this.elemRef.nativeElement.style.background = 'red';
  }
  // @HostListener('mousehover',['$event.target'])
  // onHover(){
  //   this.elemRef.nativeElement.style.background = 'blue'; 
  // }
  isEnd=false;
  @HostListener('scroll', ['$event']) // <- Add scroll listener to windo
  scrolled() {
    console.log("scroll");
    let pos = (this.elemRef.nativeElement.scrollTop || this.elemRef.nativeElement.body.scrollTop) + this.elemRef.nativeElement.offsetHeight;
    let max = this.elemRef.nativeElement.scrollHeight;
    if (pos == max && !this.isEnd) {
      this.isEnd=true;
      const li = this.render.createElement('p');
      const text = this.render.createText('Loading...');
      this.render.appendChild(li, text);
      this.render.appendChild(this.elemRef.nativeElement, li);
    }

  }


}
