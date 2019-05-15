import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-fetchuser',
  template: `
  <!--<div *ngIf="users">
    <app-createtask [users]="users"></app-createtask>
    <app-viewtaskofauser [users]="users"></app-viewtaskofauser>
  </div>-->
  `
})
export class FetchuserComponent implements OnInit {

  users : any;

  constructor(private _usersService:UsersService) { }

  ngOnInit() {
    //this.getUserDropdown();
  }

  getUserDropdown(): void {
    this._usersService.queryAllUsers().subscribe(
      response => {
        this.users = response;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }

}
 