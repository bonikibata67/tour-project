import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TourService } from '../services/tour.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent implements OnInit {
selectTour(_t6: any) {
throw new Error('Method not implemented.');
}
  form!: FormGroup;
tours: any;

  constructor(private tourService: TourService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      hotels: new FormControl([], Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.tourService.addTour(this.form.value);
      this.form.reset();
    }
  }
}

