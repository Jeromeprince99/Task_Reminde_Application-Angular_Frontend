import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { TaskserviceService } from 'src/taskservice.service';
import { UserService } from '../user.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-createtask',
  template: `
  <!DOCTYPE html>
  <html>
  <main class="task-form" *ngIf="_userService.token">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header" style="color:white;text-align:center;background-color:#632342;"><b>Create Task</b></div>
                    <div class="card-body">
                     
                        <form name="Form" ngNativeValidate >
                          
                              <div class="col-md-12 form-group">
                                  <label>Task Title</label>
                                  <input class="form-control" (click)="setfalse()" [(ngModel)]="task.title"  id="myTextBox" required autofocus type="text" name="title" placeholder="title">
                              </div>
                                                           
                              <div class="col-md-12 form-group">
                                  <label>Select user to assign</label>
                                  <select class="form-control" [(ngModel)]="task.assigneduser" required name="assigneduser">
                                    <option *ngFor="let user of users['results']" [ngValue]="user.id">{{user.username}}</option>
                                  </select>
                              </div>
                             
                              <div class="col-md-12 form-group">
                                <label>Deadline</label>
                                <input class="form-control" [(ngModel)]="task.deadline" required autofocus type="datetime-local" name="deadline" placeholder="datetimestamp">
                              </div>

                              <div style="display:block;"><pre>
</pre></div>
                              <button (click)="createTask()" style="background-color:#342543;" class="btn btn-primary btn-lg btn-block">Submit</button>
                               <br/>                           
                              <div *ngIf="tasksuccess" style="text-align:center;">
                              <h3> Task Successfully Created </h3>
                              </div>
                             
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</main>
</html>

  `,
  styles: [`

  @import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);

  a:hover{
    text-decoration: none !important;
  }
  
  body{
      margin: 0;
      font-size: .9rem;
      font-weight: 400;
      line-height: 1.6;
      color: #212529;
      text-align: left;
      background-color: #f5f8fa;
  }
  
  
  
  .my-form, .task-form
  {
      font-family: Raleway, sans-serif;
  }
  
  .my-form
  {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
  }
  
  .my-form .row
  {
      margin-left: 0;
      margin-right: 0;
  }
  
  .task-form
  {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
  }
  
  .task-form .row
  {
      margin-left: 0;
      margin-right: 0;
  }

    `
  ]
})
export class CreatetaskComponent implements OnInit {

  tasksuccess : boolean;
  users: any;
  task : any;

  //@Input()  users: any;

  constructor(private _usersService: UsersService, private _taskService:TaskserviceService,private _userService: UserService) { }

  ngOnInit() {
    this.getUserDropdown();
    this.task = {
      title: '',
      assigneduser: '',
      deadline: ''
    };
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


  createTask(){
    this._taskService.createNewTask({'title':this.task.title,'assignedTo':this.task.assigneduser,'deadline':this.task.deadline}).subscribe(
      data=>{
        this._taskService.queryAllTask();
        this.task = {
          title: '',
          assigneduser: '',
          deadline: ''
        };
        this.tasksuccess = true;
        return true;
      },
      error => {
        console.error('Error saving!');
        return throwError(error);
      }
    );
  }

  setfalse(){
    this.tasksuccess = false;
  }

}
