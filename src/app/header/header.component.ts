import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() displayAuth: boolean |undefined

  onHederPositionChange() {
    console.log("header posisyonu değişti")
  }

}
