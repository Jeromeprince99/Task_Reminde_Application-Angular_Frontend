import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { TaskserviceService } from 'src/taskservice.service';
import {throwError} from 'rxjs';
import {Observable} from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';
import { task } from '../../task';
import { results } from '../results';
import { UserService } from '../user.service';



@Component({
  selector: 'app-viewtask',
  template: `
  <div *ngIf="_userService.token">
   <table id="customers">
    <thead>
      <th>Task title</th>
      <th>Assigned To</th>
      <th> Deadline</th>
      <th>Created By</th>
    </thead>
    <tbody>
      <div *ngIf="undefined === results">Loading...</div>

      <tr *ngFor="let result of results['results']" >
      <td [innerHTML]="result.title"></td>
      <td [innerHTML]="result.assignedToName"></td>
      <td [innerHTML]="result.deadline"></td>
      <td [innerHTML]="result.createdBy"></td>
      </tr>

    </tbody>
   </table>
  </div>
  `,
  styles:[`
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

  
   `
  ]

})

export class ViewtaskComponent implements OnInit {

  results:any;

  constructor(private _taskservice:TaskserviceService,private _userService:UserService) { }
 
  ngOnInit() {
    this.viewTask();
  }
  viewTask():void{
    this._taskservice.queryAllTask().subscribe(
      response=>{
        this.results = response;
        console.log(this.results);
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
}
}