import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // constructor(private elementRef: ElementRef) {}
  // @HostBinding('@fadeIn') fadeIn = false;

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const componentPosition = this.elementRef.nativeElement.offsetTop;
  //   const viewportTop = window.pageYOffset;
  //   const viewportBottom = viewportTop + window.innerHeight;

  //   this.fadeIn = viewportTop <= componentPosition && componentPosition <= viewportBottom;
  // }
}
