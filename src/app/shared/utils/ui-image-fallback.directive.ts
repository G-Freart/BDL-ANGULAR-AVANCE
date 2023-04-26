import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'bdl-ui-image[fallback],bdl-ui-image[uiImgFallback]'
})
export class UiImageFallbackDirective {

  private defaultUrl = 'http://placehold.it/150';
  @Input() fallback = '';

  constructor(
    private uiImageElement:ElementRef
  ) {
  }

  ngAfterViewInit(){
    const pathToImg = this.fallback || this.defaultUrl;
    /*
      <app-ui-image source="https://plocploc/150" fallback>
      <!-- template-->
        <img
          alt="Illustration Image"
          [src]="source"
          [width]="size.w"
          [height]="size.h">
      </app-ui-image>
     */
    this.uiImageElement.nativeElement // == <app-ui-image>
    .querySelector('img') // == <img>
    .addEventListener('error', (evt:any)=> evt.target.src = pathToImg )
  }

}
