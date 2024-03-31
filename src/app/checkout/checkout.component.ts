import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  toggleClass = false
  countries: Country[] = []

  constructor(private countryService: CountriesService) {

  }

  ngOnInit(): void {
    console.log(this.toggleClass)
    this.countryService.getCountries().subscribe(countries => this.countries = countries)
  }

  handleClick(): void {
    this.toggleClass = !this.toggleClass
  }

}
