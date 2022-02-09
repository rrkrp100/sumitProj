import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateMgService {
  
  userName: BehaviorSubject<string>;

  constructor() {
    this.userName = new BehaviorSubject<string>('Sumit ka naam');
  }
}
