import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
public  communication =new BehaviorSubject<any>('')
public com = new Subject<any>();
public read = this.com.asObservable();
constructor() { }
emit<T>(data:T){
  this.communication.next(data);
  
}
on<T>():Observable<T>{
  return this.communication.asObservable();
}
ok(data :any){
  this.com.next(data);
}

}
