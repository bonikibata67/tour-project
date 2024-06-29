import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { TourComponent } from "./tour/tour.component";
import { BookingComponent } from "./booking/booking.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HotelComponent } from "./hotel/hotel.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TourComponent, BookingComponent, LoginComponent, SignupComponent, HotelComponent, HeaderComponent, HomeComponent, NotfoundComponent]
})
export class AppComponent {
  title = 'tourbooking';
}
