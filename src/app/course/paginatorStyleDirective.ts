import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from "@angular/core";

@Directive({
  standalone: true,
  selector: "[style-paginator]",

})
export class StylePaginatorDirective implements OnInit {

  paginator: HTMLElement ;

  constructor(private el: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit() {
    this.paginator = this.el.nativeElement;
    let paginatorContainer = this.paginator.querySelector('.mat-mdc-paginator-container')
    this.renderer.setStyle(paginatorContainer,"flex-wrap", "unset");
  }


}

