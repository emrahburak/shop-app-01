import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  @Input() isStore = false
  productList: Product[] | undefined

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(products => this.productList = products)
  }

  
}
