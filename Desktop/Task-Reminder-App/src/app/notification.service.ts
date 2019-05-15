import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, private _userService : UserService) { }

  getNotification(something){
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token '+ this._userService.token   // this is our token from the UserService
    })
  };console.log(this._userService.token);
  return this.http.post('http://127.0.0.1:8000/notifications',JSON.stringify(something), httpOptions);
}

}
