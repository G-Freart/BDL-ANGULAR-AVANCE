import { Directive, Host, HostBinding } from '@angular/core';
import { UiHeaderComponent } from 'bdl';

@Directive({
  selector: 'bdl-ui-header[retracted]'
})
export class RetractedDirective {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.height') height = '6vh';
  @HostBinding('style.overflow') overflow = 'hidden';

  constructor(@Host() header:UiHeaderComponent){}

}
