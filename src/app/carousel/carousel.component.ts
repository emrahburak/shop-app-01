import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  slides = [
    { src: '../../assets/images/no-test-animal.png', alt: 'Image 1' },
    { src: '../../assets/images/with-water.png', alt: 'Image 2' },
    { src: '../../assets/images/dermological.png', alt: 'Image 3' },
    { src: '../../assets/images/ph-friendly.png', alt: 'Image 3' }
  ];


}
