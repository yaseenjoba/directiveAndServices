import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-directives';
  state = false;
  constructor(public appService:Service1Service){
  }
  toggle() {
    this.state = !this.state;
    this.appService.add();
  }
}
