import { NgModule } from '@angular/core';
import { UiNavigationComponent } from './ui-navigation/ui-navigation.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiImageComponent } from './ui-image/ui-image.component';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';
import {NgImportModule} from "../ng-import.module";
import { UiButtonComponent } from './ui-button/ui-button.component';
import { InactiveDirective } from './directive/inactive.directive';
import { UiButtonOptionsComponent } from './ui-button-options/ui-button-options.component';

@NgModule({
  declarations: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent,
    UiButtonComponent,
    InactiveDirective,
    UiButtonOptionsComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent,
    UiButtonComponent,
    InactiveDirective,
    UiButtonOptionsComponent
  ]
})
export class UiModule { }
