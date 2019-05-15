import { Component, OnInit, Input } from '@angular/core';
import { TaskserviceService } from 'src/taskservice.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-displaytaskofauser',
  template: `
  <div *ngIf="_userService.token">
   <table id="customers">
    <thead>
      <th>Task</th>
      <th>Deadline</th>
    </thead>
    <tbody>
      <div *ngIf="undefined === results">Loading...</div>

      <tr *ngFor="let result of results['results']" >
          <td *ngIf="userid === result['assignedTo']" [innerHTML]="result.title"></td>
          <td *ngIf="userid === result['assignedTo']" [innerHTML]="result.deadline"></td>
      </tr>

    </tbody>
   </table>
  </div>
  
  `,
  styles: [`

  #customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #ddd;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(116, 21, 95);
    color: white;
  }
  
  
  `]
})
export class DisplaytaskofauserComponent implements OnInit {

  @Input() userid : number;
  results:any;

  constructor(private _taskservice:TaskserviceService,private _userService:UserService) { }
 
  ngOnInit() {
    this.viewTask();
  }

  viewTask():void{
    this._taskservice.queryAllTask().subscribe(
      response=>{
        this.results = response;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
}

}
