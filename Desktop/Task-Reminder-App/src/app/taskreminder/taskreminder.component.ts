import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-taskreminder',
  template: `

  <app-child-notification [notificationData]="notificationData" [newtaskusername]="newtaskusername"></app-child-notification>
  <app-root hidden id="hidden" class="hidden" [newtaskusername]="newtaskusername"></app-root>
  `,
  styles: [`

  app-root.hidden {
    visibility: hidden;
  }
  
  
  `]
})
export class TaskreminderComponent implements OnInit {

  messageFromServer : string;
  wsSubscription : Subscription;
  status;
  notificationData : any;
  newtaskusername : any;

  ngOnInit() {
    
  }

  constructor(private _wsService: WebsocketService, private _notificationService : NotificationService ) { 
    
   
    if(this.messageFromServer == undefined){
      this._notificationService.getNotification({'title':'task' }).subscribe(
        response => {

          this.notificationData = response;
          console.log(response); 

        },
        err => {
          console.log(err['error']);
        }
      );
      
    }

    this.wsSubscription = this._wsService.createObservableSocket("ws://localhost:8000/ws/foobar?subscribe-broadcast").subscribe(
         data =>{ this.messageFromServer = data;
                   console.log(data);
                  if(this.messageFromServer == ':notification')
            {
              this._notificationService.getNotification({'title':'task' }).subscribe(
                response => {

                  this.notificationData = response;
                  console.log(response); 

                },
                err => {
                  console.log(err['error']);
                }
              );

              }
              else{
                this.newtaskusername = data;
                
              }

        },
         err => console.log('err'),
         () =>
         { console.log('The observable stream is complete');
            this.newtaskusername = ':notification';
         
         }
       );
  }

  closeSocket(){
    this.wsSubscription.unsubscribe(); //closing
    this.status = 'The socket is closed';
  }

  ngOnDestroy(){
    this.closeSocket();
  }

 

  
}
