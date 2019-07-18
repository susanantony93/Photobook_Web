import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

// author Lakshmi Narayana lk720991@dal.ca 
// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
@Injectable({
  providedIn: 'root'
})
//bookingService.BookingDetails gets called from booking..component.ts then this calls methods in backend booking.js file
export class BookingService {

  constructor(private http: HttpClient) { }
  BookingDetails(bookingDetailsData:any){
    this.http.post('http://129.173.22.35:27027/booking/',bookingDetailsData)
    .subscribe(responseData => {
      
    });
  }
  getBookingDetails(){
    return this.http.get('http://129.173.22.35:27027/booking/');
    //getting booking detials

  }
  updatebooking(bookingUpdate:any,){
    this.http.post('http://129.173.22.35:27027/booking/update/',bookingUpdate)
    .subscribe(response=>{
      console.log(response);
      //updating booking details
    });
  }
}