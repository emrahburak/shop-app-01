import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  toggleClass = false

  ngOnInit(): void {
    console.log(this.toggleClass)
  }


  handleClick(): void {
    this.toggleClass = !this.toggleClass
  }

}
