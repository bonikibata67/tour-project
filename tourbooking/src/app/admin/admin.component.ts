import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../services/booking.service';
import { TourService } from '../services/tour.service';
import { Booking, Tour } from '../models';


@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AdminComponent implements OnInit {
  bookings: Booking[] = [];
  selectedTour: Tour | null = null;
  bookingForm: FormGroup;
  private fb = inject(FormBuilder);
  private bookingService = inject(BookingService);
  private tourService = inject(TourService);

  constructor() {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      hotel: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bookingService.getBookings().subscribe((bookings) => {
      this.bookings = bookings;
    });

    this.tourService.getTours().subscribe((tours) => {
      // Assume first tour is selected for simplicity
      this.selectedTour = tours.length ? tours[0] : null;
    });
  }

  onSubmit() {
    if (this.bookingForm.valid && this.selectedTour) {
      const booking = {
        ...this.bookingForm.value,
        tourName: this.selectedTour.name
      };
      this.bookingService.addBooking(booking).subscribe(() => {
        // Handle successful booking
        this.bookings.push(booking);
      });
    }
  }

  deleteBooking(id: string) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      // Handle successful deletion
      this.bookings = this.bookings.filter(booking => booking.id !== id);
    });
  }

  selectTour(tour: Tour) {
    this.selectedTour = tour;
  }
}


