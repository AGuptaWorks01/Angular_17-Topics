import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<string>("Initial Value..!")
  currentMessage$ = this.messageSource.asObservable()

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
