import { Component,Input, input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Blog } from '../../interfaces/blog';
import {createSlug} from '../../utils';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../interfaces/cart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  slugify = createSlug
  addedProduct: Product | undefined

  @Input() productDetail!: Product
  @Input() isProduct = false
  @Input() blog!: Blog 

  constructor(private cartService: CartService, private router: Router){
  }

  ngOnInit(): void {
      
  }

  addToCart(product:Product):void {
    this.cartService.addCart({product} as Cart)
    .subscribe(cart => (console.log("added product or cart ", cart.product), this.addedProduct = cart.product))
  }

  goToCart():void {
    this.router.navigateByUrl("/cart")
    console.log("click")
  }

}
