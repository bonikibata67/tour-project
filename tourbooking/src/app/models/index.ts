export interface Tour {
  id: string;
  image: string;
  name: string;
  destination: string;
  description: string;
  price: string;
  hotels: Hotel[];
}

export interface Booking {

  id: string;
  username: string;
  tour: string;
  hotel: string;
  bookingDate: string;
}

export interface Hotel {
  id: string;
  image: string;
  name: string;
  location: string;
  description: string;
  price: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
}
