import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isHome = true

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const headerElement = document.querySelector('#home-header');
    const headerElement2 = document.querySelector('#home-header-2');
    if (headerElement && headerElement2) {
      const headerTopPosition = headerElement.getBoundingClientRect().top;
      if (headerTopPosition <= -100) {
        console.log(headerTopPosition)
        console.log("Header pozisyonu değişti")
        headerElement2.classList.remove("hidden")
        headerElement2.classList.add("transition", "ease-in-out", "duration-300","fixed", "border-2","border-black-500" ,"z-10")
        // headerElement2.classList.add("top-0")
      }else {
        headerElement2.classList.add("hidden")
      }
    }
  }



}
