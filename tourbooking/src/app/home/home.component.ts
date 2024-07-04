import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../services/tour.service';
import { Tour,Hotel } from '../models';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  tours: Tour[] = [];
  selectedTour: Tour | null = null;
  // private tourService = inject(TourService);

  constructor(private tourService:TourService) {}

  ngOnInit() {
    this.tourService.getTours().subscribe((tours) => {
      this.tours = tours;
    });
  }

  selectTour(tour: Tour) {
    this.selectedTour = tour;
  }

  selectHotel(hotel: Hotel) {
    // Handle hotel selection
  }
}

