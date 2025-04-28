import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<string>('Inital Value');

  currentMessage$ = this.messageSource.asObservable()

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
