import { Injectable } from '@angular/core';
import { Users } from '../login/users';
import { longStackSupport } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AcoountService {

  constructor() { }
  loggedIn = false;
  login(users: Users): boolean {

    if (users.userName == "suleyman" && users.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", users.userName);
      return true;
    }
    return false;

  }
  isloggedin() {
    return this.loggedIn;
  }
  logout() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
