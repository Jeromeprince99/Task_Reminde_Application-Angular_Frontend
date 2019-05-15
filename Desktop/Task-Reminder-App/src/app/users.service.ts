import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // http options used for making API calls
  private httpOptions: any;

  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };  
  }

  queryAllUsers() {
    return this.http.get<user[]>('http://127.0.0.1:8000/users')
    .pipe(map(data=>data));
  }

}
