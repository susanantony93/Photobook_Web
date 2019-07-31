import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photographer } from "../Photographer"
import { PhotographerService }  from '../photographer.service';
import { HttpClient } from '@angular/common/http';
import { AllServiceService} from '../sevice/all-service.service';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  photographer: Photographer;
  Hours;
  total;
  photographerName;

  constructor(
    private route: ActivatedRoute,
    private photographerService: PhotographerService,
    private http: HttpClient,
    private all:AllServiceService,
    private bookingService : BookingService) { }

  ngOnInit() {
    this.getPhotographer();
  }
  getPhotographer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photographerService.getPhotographer(id).subscribe((photographer) => {
      this.photographer = photographer;
      console.log(photographer);
    });
  }

  onKey(event){
    this.total = 80 * this.Hours;
  }

  onSubmit(photograherName,nameOnCard,numberCard,billingAddress,CVC,cardExpiration)
  {
    var data = {
      "photographer_name":photograherName,
      "booking_status":"Paid",
      "rate":"$80",
      "hours": this.Hours,
      "total": this.total,
      "name":nameOnCard,
      "cardnumber":numberCard,
      "address":billingAddress,
      "expiry":cardExpiration,
      "CVC":CVC
    };
    alert("payment successfull")
    
    this.all.post("user/payment", data).subscribe((response) => {
      console.log(response);
    });
    console.log(data);
  }
}
