import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';
import { date1 } from '../date1.model';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

  getData(){
    return this.http.get<date1>("http://localhost:3000/posts")
    .pipe(map((res:date1)=>{
      return res;
    }))
  }
}