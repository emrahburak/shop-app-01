import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Products } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private productsUrl = 'api/products';
  constructor(private http: HttpClient) { }

  // getAll(): Product[]{
  //   return this.productList
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    const products = of(Products)
    return products;
  }

  getProduct(id: number): Observable<Product>|any {
    const products$ = of(Products)
    products$.pipe(
      map(products => products.find(product => product.id === id)),
    ).subscribe(product => {
      console.log(`Product ${product} bulundu`)
    })
  }
}
