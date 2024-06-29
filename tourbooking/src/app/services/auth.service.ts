import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getRole() {
    throw new Error('Method not implemented.');
  }
  private users: User[] = [
    // Mock data for users
  ];

  login(credentials: { username: string, password: string }): Observable<User | null> {
    const user = this.users.find(u => u.name === credentials.username && u.password === credentials.password);
    return of(user || null);
  }

  signup(user: User): Observable<void> {
    this.users.push(user);
    return of();
  }
}



