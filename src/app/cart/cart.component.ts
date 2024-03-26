import { Component,OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';
import { Cart } from '../cart';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  faCartShopping = faCartShopping
  cartItems: Cart[] | undefined;

  constructor(private service: CartService) { }

  ngOnInit(): void {
      this.service.getCartItems()
      .subscribe(cartItems => this.cartItems = cartItems)
      console.log(this.cartItems?.length)
  }
}
