import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  ws : WebSocket;
  socketIsOpen = 1; //websocket is open;

  constructor( ) { }

  createObservableSocket(url : string): Observable<any>{

    this.ws = new WebSocket(url);

    return new Observable(
      observer =>{
        this.ws.onmessage = (event) => observer.next(event.data);

        this.ws.onerror = (event) => observer.error(event);

        this.ws.onclose = (event) => observer.complete();

        //a callback invoked on unsubscribe()
        return () => this.ws.close(1000,"The user disconnected");
      }
    );
    
  }

  

  

}
