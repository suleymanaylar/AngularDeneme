import { Component } from '@angular/core';
import { AcoountService } from './services/acoount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private accountService:AcoountService){}
  isloggin(){
    return this.accountService.isloggedin();
  }
  logout(){
    this.accountService.logout();
  }
}


