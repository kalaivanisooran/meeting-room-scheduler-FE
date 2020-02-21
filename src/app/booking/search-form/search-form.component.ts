import { Component, OnInit } from '@angular/core';
import { SearchFormServiceService } from 'src/app/service/search-form-service.service';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public roomList : any[];
  public 
  constructor(private service:SearchFormServiceService) { }

  ngOnInit(): void {
    this.roomList = this.service.fetchRoomList();
   
  }

  fetchBookedData(){
    console.log("search");
      //this.service.fetchBookedData();
  }

  bookRoom(){
    console.log("search");
    //this.service.bookRoom();
  }

  

}
