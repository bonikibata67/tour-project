import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {
hotel: any;
name: any;
location: any;
rating: any;
reviews: any;
image: any;
url: any;
form!: FormGroup;
hotelform!: FormGroup;
onsubmit() {
throw new Error('Method not implemented.');
}



  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      hotelform:new FormGroup({
      name: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
      })

      
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.hotelService.addHotel(this.form.value);
      this.form.reset();
    }
  }
}
