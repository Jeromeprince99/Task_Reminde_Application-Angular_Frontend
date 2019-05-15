import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { UserService } from '../user.service';
import { stringify } from '@angular/core/src/render3/util';
import { user } from '../user';


@Component({
  selector: 'app-viewtaskofauser',
  template: `
  <!DOCTYPE html>
  <html> 
  <div *ngIf="_userService.token">
  <main class="task-form" >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header" style="color:white;text-align:center;background-color:#632342;">
                      <form name="Form" >
                        <div class="col-md-12 form-group">
                          <label>Select User To View His Task</label>
                          <select class="form-control"  [(ngModel)]="userid" required name="user" default="select">
                          <option value="" selected disabled hidden>Choose here</option>  
                          <option *ngFor="let user of users.results" [ngValue]="user.id" >{{user.username}}</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div  class="card-body">
                        <app-displaytaskofauser [userid]="userid"></app-displaytaskofauser>
                    </div>                     
                </div>
            </div>
        </div>
    </div>
  </main>
</div>
</html>
      
  `,
  styles: [`
  
  
  `]
})
export class ViewtaskofauserComponent implements OnInit {

  //@Input() users : any;

  //*ngIf="_userService.token"
  users : user[];
  userid : number;

  constructor(private _usersService:UsersService, private _userService:UserService) { }

  ngOnInit() {
    this.getUserDropdown();
  }

  getUserDropdown(): void {
    this._usersService.queryAllUsers().subscribe(
      (response : user[]) => {
        this.users = response;
        console.log(this.users);
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }

}
