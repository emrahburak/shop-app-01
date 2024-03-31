import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Countries } from '../state/countries';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    const countries = of(Countries)
    return countries;
  }
}
