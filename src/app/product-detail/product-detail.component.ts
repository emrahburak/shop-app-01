import { Component,OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  @Input() productDetail!: Product
  constructor(private route: ActivatedRoute){}

  

  ngOnInit(): void {
    console.log(this.route.snapshot.params)

    console.log(this.route.snapshot.paramMap.get('slug'))
  }

}
