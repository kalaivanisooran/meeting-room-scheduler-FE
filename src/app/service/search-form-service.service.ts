import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
 })
export class SearchFormServiceService {
  fetchBookedData() {
    console.log("search");
    throw new Error("Method not implemented.");
  }
  bookRoom() {
    console.log("search");
    throw new Error("Method not implemented.");
  }
  private roomList: RoomList[];
  constructor(private http: HttpClient) { }
  fetchRoomList() {
    return this.roomList;

  } 
  //   http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //      this.forecasts = result;
  //      this.cacheForecasts = result;
  //  }, error => console.error(error)});
 

  
}
interface RoomList {
  roomId: number;
  roomName: string;
  
}