import {InjectionToken} from "@angular/core";
import {BdlReactiveService} from "../../interfaces/bdl-react-servvice";
import {BdlNotification} from "../../interfaces/bdl-notification";
import {BdlNotificationType} from "../../enum/bdl-notification-type";

export type UICompliantNotificationService  = BdlReactiveService<BdlNotification[], BdlNotificationType>;

export const UI_NOTIFICATION_SERVICE = new InjectionToken<UICompliantNotificationService>('UI_NOTIFICATION_SERVICE');

