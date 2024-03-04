import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserManagementService {
  private currentUser: any;

  constructor() {
    this.loadUser();
  }

  private loadUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.currentUser = JSON.parse(userString);
    }
  }

  getUser() {
    return this.currentUser;
  }

  setUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}
