import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, tap, BehaviorSubject} from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ApiSService {
  private productListSubject=new BehaviorSubject<any[]|null>( null );

  constructor ( private http: HttpClient ) {}

  getProducts(): Observable<any[]> {
    const currentData=this.productListSubject.value;

    if ( currentData ) {
      console.log( '%c[ApiSService] Returning cached data', 'color: green; font-weight: bold;' );
      return of( currentData );
    } else {
      console.log( '%c[ApiSService] Fetching data from API...', 'color: blue; font-weight: bold;' );
      return this.http.get<any[]>( 'https://jsonplaceholder.typicode.com/todos' ).pipe(
        tap( data => {
          console.log( '%c[ApiSService] Data fetched and cached:', 'color: orange; font-weight: bold;', data );
          this.productListSubject.next( data );
        } )
      );
    }
  }
}
