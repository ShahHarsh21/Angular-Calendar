import { Component, NgModule, OnInit } from '@angular/core';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';


export const testData: any[] = [
  { id: 20, title: 'FullDay',
  startDate: new Date("2022-04-06"), endDate: new Date("2022-04-06") },
  { id: 20, 
      title: "Match",
      startDate : new Date("2022-04-07"), 
      endDate: new Date("2022-04-07"), 
      
    }  
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'calendar-v7';


  
}
