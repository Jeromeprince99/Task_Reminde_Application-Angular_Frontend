import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from './app/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskserviceService {
 
  
  constructor(private http: HttpClient, private _userService:UserService) { }
 
  // Uses http.get() to load data from a single API endpoint
  queryAllTask() {
    return this.http.get<any[]>('http://127.0.0.1:8000/tasks')
    .pipe(map(data=>data));
  }

  
 
  // send a POST request to the API to create a new task
  createNewTask(task) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ this._userService.token   // this is our token from the UserService
      })
    };
    return this.http.post('http://127.0.0.1:8000/tasks', JSON.stringify(task), httpOptions);
  }
}