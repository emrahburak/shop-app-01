import { Component,Input, input } from '@angular/core';
import { Product } from '../product';
import { Blog } from '../blog';
import {createSlug} from '../utils';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  slugify = createSlug

  @Input() productDetail!: Product
  @Input() isProduct = false
  @Input() blog!: Blog 

}
