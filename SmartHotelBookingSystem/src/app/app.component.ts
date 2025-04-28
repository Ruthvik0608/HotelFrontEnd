import { Component } from '@angular/core';
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { LoginPageComponent } from "./Components/login-page/login-page.component";
import { HotelsViewComponent } from "./Components/hotels-view/hotels-view.component";
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartHotelBookingSystem';
}
