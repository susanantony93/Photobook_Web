import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

// author Lakshmi Narayana lk720991@dal.ca 

@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit {
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
      if(this.booking_details[item].status == "pending"){
        this.final_booking_details.push(this.booking_details[item]);
      }
    }
  }
  acceptedoffer(id){
    this.booking_request['id']=id;
    this.booking_request['status']="accepted";
    this.bookingService.updatebooking(this.booking_request);
    this.fetchbookingdetails();
    alert("Offer accepted successfully. For more details about offer check upcoming events ")
    location.reload();
    // used this method from https://www.w3schools.com/jsref/met_loc_reload.asp
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }
  rejectedoffer(id){
    this.booking_request['id']=id;
    this.booking_request['status']="rejected";
    this.bookingService.updatebooking(this.booking_request);
    this.fetchbookingdetails();
    alert("Offer rejected successfully. For more details about offer check Booking Activities ")
    location.reload();
    // used this method from https://www.w3schools.com/jsref/met_loc_reload.asp
  }

}
