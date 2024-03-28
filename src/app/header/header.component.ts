import { Component, Input, OnInit } from '@angular/core';
import { faLock, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { isAuthClicked } from '../state/auth.action';
import { Cart } from '../interfaces/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  faLock = faLock;
  faCartShopping = faCartShopping
  cartItems: Cart[] | undefined

  @Input() displayAuth: boolean | undefined

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => this.cartItems = items)
    console.log(this.cartItems)
  }


  onHederPositionChange() {
    console.log("header posisyonu değişti")
  }


}
