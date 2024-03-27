import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const cartItems: Cart[] = [
      {
        id: 12,
        product: {
          id: 12,
          name: "test product 01",
          price: 99,
          description: 'lorem sit amet',
          quantity: 7,
          photo: '../../assets/images/pruduct.png'
        }
      }
    ];
    return { cartItems }

  }

  genId(cartItems: Cart[]): number {
    return cartItems.length > 0 ? Math.max(...cartItems.map(cart => cart.id)) + 1 : 11
  }

}
