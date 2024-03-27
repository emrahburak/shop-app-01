import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isClicked$: Observable<Boolean>
  constructor(private store: Store<{isClicked:Boolean}>) { 
    this.isClicked$ = this.store.select("isClicked");
  }

}
