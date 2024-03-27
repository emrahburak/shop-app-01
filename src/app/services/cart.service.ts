import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../interfaces/cart';
import { Observable,of } from 'rxjs';
import { catchError, filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsUrl = 'api/cartItems'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }


  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.cartItemsUrl)
    .pipe(
      tap(_ => console.log('fetced cart items')),
      catchError(this.handleError<Cart[]>('getCartItems',[]))
    )
  }

  getCart(id:number): Observable<Cart> {
    const url = `${this.cartItemsUrl}/${id}`;
    return this.http.get<Cart>(url)
    .pipe(
      tap(_ => console.log(`fetched cart id=${id}`)),
      catchError(this.handleError<Cart>(`getCart id=${id}`))
    );
  }

  updateCart(cart: Cart):Observable<any> {
    return this.http.put(this.cartItemsUrl, cart, this.httpOptions )
    .pipe(
      tap(_ => console.log(`updated cart id=${cart.id}`)),
      catchError(this.handleError<any>(`updateCart`))
    )
  }

  addCart(cart: Cart):Observable<Cart> {
    return this.http.post<Cart>(this.cartItemsUrl,cart, this.httpOptions)
    .pipe(
      tap((newCart:Cart) => console.log(`added cart w/ id=${newCart.id}`)),
      catchError(this.handleError<Cart>(`addCart`))
    )
  }

  deleteCart(id:number): Observable<Cart> {
    const url = `${this.cartItemsUrl}/${id}`;
    return this.http.delete<Cart>(url,this.httpOptions)
    .pipe(
      tap(_ => console.log(`deleted cart id=${id}`)),
      catchError(this.handleError<Cart>('deleteHero'))
    )
  }

}
