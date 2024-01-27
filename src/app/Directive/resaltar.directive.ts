import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private elementRef:ElementRef, private  renderer:Renderer2) { }


  @HostListener('click') onClick(){
    this.quitarResaltado();
    this.resaltar();
  }

  private quitarResaltado() {
    const palabrasResaltadas = document.querySelectorAll('[appResaltar]');
    palabrasResaltadas.forEach(palabra => {
      this.renderer.removeStyle(palabra, 'text-decoration');
      this.renderer.removeStyle(palabra, 'font-weight');
    });
  }

  private resaltar(){
    this.renderer.setStyle(this.elementRef.nativeElement,'text-decoration', 'underline')
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight', 'bold')
  }

}
