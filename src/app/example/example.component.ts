import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { date1 } from '../date1.model';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';



export const testData: EventData[] = [
  { id: 20, title: 'FullDay',
  startDate: new Date("2022-04-06"), endDate: new Date("2022-04-06") },
  { id: 20, 
    title : "Match",
    startDate : new Date("2022-04-07"), 
    endDate: new Date("2022-04-07")
  }  
  
];

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})


export class ExampleComponent implements OnInit {
  list_1:any[]=[];
  listdate:date1[]=[];
  constructor(private api : ApiService) { }

  ngOnInit() {
      this.api.getData().subscribe((res:any)=>{
        this.list_1 = res;
        //console.log(this.list_1);
        for(var item of this.list_1){
          const ds : any = new date1();
          ds.id = item.id;
          ds.title = item.title;
          ds.startDate = new Date(item.startDate);
          ds.endDate = new Date(item.endDate);
          ds.color = item.color;
          this.listdate.push(ds);
        }
        console.log(this.listdate);
      })
      
  }

  dataArray: any = this.listdate;

  selectDay(event:any) {
    console.log(event);
  }

}
