import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSService {
  private productListSubject = new BehaviorSubject<any[] | null>(null);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    const currentData = this.productListSubject.value;

    if (currentData) {
      return of(currentData);
    } else {
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
        tap(data => this.productListSubject.next(data))
      );
    }
  }
}
