import { Component, OnInit } from '@angular/core';
import { faCartShopping, faAngleUp, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  faCartShopping = faCartShopping
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  faXmark = faXmark
  cartItems: Cart[] | undefined;
  products: Product[] = []
  qty = new FormControl('');
  total = 0

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.service.getCartItems()
      .subscribe(cartItems => cartItems.forEach(product => {
        this.products.push(product.product);
        let totalPrice = product.product.price
        this.total += totalPrice
      }))
    console.log("products: ", this.products)

  }

  incrementQty(qty: any, id: any): void {
    let element = document.querySelector(`#qty-${id}`) as HTMLInputElement
    let result = qty++;
    console.log(qty)
    element.value = result.toString()
    this.qty.setValue(result.toString())
    console.log("click: ", element.value)
  }
}
