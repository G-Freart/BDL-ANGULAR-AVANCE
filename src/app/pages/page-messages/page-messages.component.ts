import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BdlMessage } from 'src/app/core/interface/bdl-message';
import { BdlNotificationLevel } from '../../../../projects/bdl/src/lib/interfaces/bdl-notification';
import { MessageCommandType, MessageService } from 'src/app/core/services/message.service';
import { NotificationCommandType, NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-page-messages',
  templateUrl: './page-messages.component.html',
  styleUrls: ['./page-messages.component.scss']
})
export class PageMessagesComponent {

  //public viewMessages:BdlMessage[] = []
  //private sub:Subscription;

  constructor(
    public messageSrv:MessageService,
    private notification:NotificationService
    ){
    //this.sub = this.messageSrv.messages$.subscribe( messages => this.viewMessages = messages)

    //
    //this.messageSrv.getData();
  }

  send(){
    this.notification.execute(NotificationCommandType.NOTIFY, {
      level:BdlNotificationLevel.INFO,
      text:'Sending Message'
    })

    this.messageSrv.execute(MessageCommandType.SEND, {text:'Test From Component'})

    this.notification.execute(NotificationCommandType.NOTIFY, {
      level:BdlNotificationLevel.SUCCESS,
      text:'Message sent'
    })
  }

  ngOnDestroy(){
    //this.sub.unsubscribe()
  }


}
