import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  addTour, Tour, addResponse } from '../models';


@Injectable({
  providedIn: 'root'
})
export class TourService {
  BaseUrl:string
  

  constructor(private http: HttpClient) {
    this.BaseUrl = 'http://localhost:4000/tour'
  }

  addTour(newTour:addTour): Observable<addResponse> {
    return this.http.post<addResponse>(this.BaseUrl, newTour);
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.BaseUrl);
  } 

  getTourById(id: string): Observable<Tour> {
    return this.http.get<Tour>(`${this.BaseUrl}/${id}`);
  }

 

  deleteTour(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BaseUrl}/${id}`);
  }
}