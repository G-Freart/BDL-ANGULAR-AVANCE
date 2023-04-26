import {Component, HostListener, Inject, inject, Optional} from '@angular/core';
import {UI_NOTIFICATION_SERVICE, UICompliantNotificationService} from "../tokens/ui-notification-service.token";
import {BdlNotificationType} from "../../enum/bdl-notification-type";

@Component({
  selector: 'bdl-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss']
})
export class UiNotificationComponent {

  constructor(
    @Optional() @Inject(UI_NOTIFICATION_SERVICE) public notification:UICompliantNotificationService
  ) {
  }

  @HostListener('window:keyup.alt.c')
  clear() {
    this.notification?.execute(BdlNotificationType.CLEAR, null)
  }

}
