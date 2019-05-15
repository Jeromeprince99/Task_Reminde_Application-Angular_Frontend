import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UserService} from './user.service';
import {throwError} from 'rxjs';
import { ToastrService } from 'ngx-toastr';  
import { Observable } from 'rxjs';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
 
  public isCollapsed = true;
  @Input() newtaskusername : any;
 
  constructor(public toastr: ToastrService) { }
 
    ngOnInit() {
    //this.setIntrvl();
  }
  
  executeEveryInterval(){
    if(this.newtaskusername !== undefined && this.newtaskusername !== ':notification'){

    
    //this.toastr.info('New Task Created',this.newtaskusername);
    }
  }
  
  setIntrvl(){
    setInterval(() => this.executeEveryInterval(),1000  );
  }
 
  ngOnChanges(changes: SimpleChanges) {
    if(this.newtaskusername != undefined && this.newtaskusername != ':notification'){

          this.toastr.info(this.newtaskusername+' has been assigned a new task', 'New Task',{

            timeOut : 5000,
            closeButton : true,
            tapToDismiss : true,
            
          });
      }
          
  }


}