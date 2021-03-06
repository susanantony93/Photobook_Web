import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

// author Lakshmi Narayana lk720991@dal.ca 

@Component({
  selector: 'app-pastbookings',
  templateUrl: './pastbookings.component.html',
  styleUrls: ['./pastbookings.component.css']
})
export class PastbookingsComponent implements OnInit {
  booking_details:any=[];
  booking_request:any={};
  final_booking_details:any=[];
  constructor(private bookingService : BookingService) { }

  ngOnInit() {
    this.booking_details=[];
    this.booking_request={};
    this.final_booking_details =[];
    this.fetchbookingdetails();
  }
  fetchbookingdetails(){
    this.bookingService.getBookingDetails().subscribe(bookingData =>{
      this.booking_details=[];
      this.booking_details= bookingData;
      this.filterbooking();
    })
}
filterbooking(){

  this.final_booking_details=[];
  for(var item in this.booking_details){
    if(this.booking_details[item].status != "pending"){
      this.final_booking_details.push(this.booking_details[item]);
    }
  }
}
}
