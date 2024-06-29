
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule, } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { BookingComponent } from './booking/booking.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { AdminGuard } from './services/admin.guard';

export const routes: Routes = [
  { path: 'tours', component: TourComponent },
  { path: 'bookings', component: BookingComponent},
  { path: 'hotels', component: HotelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/tours', pathMatch: 'full'},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

