import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

declare const toggle_visibility: any;

@Component({
  selector: 'app-child-notification',
  template: `
  <!DOCTYPE html>
  <html>
  <body>
 
  <div *ngIf="this._userService.token">
  <main class="task-form" >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header" style="color:white;text-align:center;background-color:#632342;">
                      <b>Your Notifications</b>
                    </div>
                    <div  class="card-body">

                    <div *ngIf="notificationData">
                    <div *ngFor="let deadline of notificationData['results']">

                    <!-- Modal -->
                    <div id="my-Modal" class="modal-dialog" style="margin-top:10px;margin-bottom:10px;margin-left:87px;margin-right:10px;">
                        <div class="modal-content">
                            <div class="modal-header">

                                <h4 class="modal-title">Deadline Passed</h4>
                            </div>
                            <div class="modal-body">
                                <p><b>Your task "{{deadline.title}}" was passed the deadline on {{deadline.time_created}} </b></p>
                                <button type="button" class="btn btn-secondary" (click)="onClick()">Close</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </main>
  </div>
  </body>
</html>

  `,
  styles: [`
  
  
  `]
})
export class ChildNotificationComponent implements OnInit {

  @Input() notificationData : any;
  @Input() newtaskusername : any;

  constructor(private _userService : UserService) {
   }

  ngOnInit()  {

  }

  onClick() {
    toggle_visibility('my-Modal');
  }

}
