import { Input, Component, OnInit } from '@angular/core';
import { Photographer } from "../photographer"
import { ActivatedRoute } from '@angular/router';
import { PhotographerService }  from '../photographer.service';
import { BookingService } from '../booking.service';

// author Lakshmi Narayana lk720991@dal.ca 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() photographer: Photographer;
  eventAddress:string="";
  eventType:string="";
  eventDate:string="";
  booking_data:any={}
  rate:number=0;

  constructor(
    private route: ActivatedRoute,
    
    private bookingService : BookingService,
    private photographerService: PhotographerService
  ) { }

  ngOnInit() {
    this.getPhotographer();
    this.eventAddress="";
  this.eventType="";
  this.eventDate="";
  this.rate=80;
  this.booking_data={}

  }

  getPhotographer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photographerService.getPhotographer(id)
      .subscribe(photographer => this.photographer = photographer);
  }
  //on clicking SendOffer from frontend this function takes date then calls bookingService.BookingDetails in booking.service.ts 
  onSendOffer(){

    this.booking_data["photographerdetails"]=this.photographer;
    this.booking_data["eventAddress"]=this.eventAddress;
    this.booking_data["eventDate"]=this.eventDate;
    this.booking_data["eventType"]=this.eventType;
    this.booking_data["rate"]=this.rate;
    if(this.eventDate != null && this.eventAddress != null && this.eventType != null &&  this.eventDate != "" && this.eventAddress !="" && this.eventType != "" )
    {
    this.bookingService.BookingDetails(this.booking_data);
    alert("Booked successfully. To check photographer response please check future events")
  }
  else{
      alert("Enter valid details again for sending offer to your intrested photographer")
  }
}
}
