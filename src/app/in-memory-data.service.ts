import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const cartItems:Cart[] = [];
    return { cartItems }

  }

  genId(cartItems: Cart[]): number {
    return cartItems.length > 0 ? Math.max(...cartItems.map(cart => cart.id)) + 1 : 11
  }

}
