import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  loggs:string[]=[];
  add(){
    let time = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.loggs.push(time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + "--" + weekday[time.getDay()] + "-" + time.getMonth()+1 + "-" + time.getFullYear());
  }
}
