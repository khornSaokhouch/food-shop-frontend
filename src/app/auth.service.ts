import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USERS, User } from './data/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);

  constructor() {}

  login(email: string, password: string): boolean {
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
      this.user$.next(user);
      return true;
    }
    return false;
  }

  logout() {
    this.user$.next(null);
  }
}
