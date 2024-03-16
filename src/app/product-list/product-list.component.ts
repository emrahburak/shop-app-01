import { Component } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {



  product: Product = {
    id: 999,
    name: "test product",
    price: 99,
    description: 'lorem sit amet',
    quantity: 7,
    photo: '../../assets/images/product-01.jpg'
  }

  productList: Product[] = [
    {
      id: 0,
      name: "test product 01",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 2,
      name: "product 02",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 3,
      name: "product 03",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 4,
      name: "product 04",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 5,
      name: "product 05",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 6,
      name: "product 06",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 7,
      name: "product 07",
      price: 99,
      description: 'lorem sit amet pp',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 8,
      name: "product 08",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    },
    {
      id: 9,
      name: "product 09",
      price: 99,
      description: 'lorem sit amet',
      quantity: 7,
      photo: '../../assets/images/pruduct.png'
    }

  ]

}
