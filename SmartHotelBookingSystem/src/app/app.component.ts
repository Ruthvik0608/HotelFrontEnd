import { Component } from '@angular/core';
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { LoginPageComponent } from "./Components/login-page/login-page.component";
import { HotelsViewComponent } from "./Components/hotels-view/hotels-view.component";
@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HotelsViewComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartHotelBookingSystem';
}
