import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Booking,  } from '../models';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BookingComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
[x: string]: any;
  form!: FormGroup;
  isAdmin: boolean = false;

  constructor(private bookingService: BookingService, private authService: AuthService) {
    // this.isAdmin = this.authService.getRole() === 'admin';
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      tour: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.bookingService.addBooking(this.form.value);
      this.form.reset();
    }
  }

  deleteBooking(bookingId: string) {
    if (this.isAdmin) {
      this.bookingService.deleteBooking(bookingId);
    }
  }

//   // to be deleted
//   selectedTours:Array<selectedTour> = [
//     {
//       name : 'Kilifi',
//       hotels : 'zile noma'
//     }
// ]
 

//   bookings:Array<Booking> = [
//     {
//       bookingId: '1',
//       tourName: 'maldives',
//       customerName: 'ayeeee',
//       id: ''
//     }
//   ]
}

