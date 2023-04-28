import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdl-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {
  @Input() color:UiHeaderColor = 'secondary';
}

export type UiHeaderColor = 'secondary' | 'danger' | 'primary' ;
