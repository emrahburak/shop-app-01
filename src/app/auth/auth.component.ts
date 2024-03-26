import { Component,OnInit } from '@angular/core';
import {faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  faLock = faLock;

}
