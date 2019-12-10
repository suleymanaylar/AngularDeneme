import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AcoountService } from '../services/acoount.service';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Users = new Users();
  constructor(private accountService: AcoountService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.accountService.login(this.model);
    console.log(this.model.userName)
    console.log(this.model.password)
    console.log(this.accountService.loggedIn)
  }

}
