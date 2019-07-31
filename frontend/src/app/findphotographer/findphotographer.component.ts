import { Component, OnInit } from '@angular/core';
// author Lakshmi Narayana lk720991@dal.ca
@Component({
  selector: 'app-findphotographer',
  templateUrl: './findphotographer.component.html',
  styleUrls: ['./findphotographer.component.css']
})
export class FindphotographerComponent implements OnInit {

  constructor() { }
  photographer:any=[];
  searchstring:String="";
  ngOnInit() {
    this.searchstring="";
    this.photographer=[
      { 
        image:"https://images.unsplash.com/photo-1521402582226-33e57788298d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Ben Moore",
        place:"Halifax",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      },
      {
        image:"https://mymodernmet.com/wp/wp-content/uploads/2017/11/best-instagram-photographer-thumbnail.jpg",
        name:"Jenna Webster",
        place:"Vancouver, BC",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      },
      {
        image:"https://static1.squarespace.com/static/55655cb9e4b0605469514b06/t/558f231ae4b01c6273ea266e/1435443997963/",
        name:"Taylor Sharpe",
        place:"Montreal, QC",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      },
      {
        image:"https://www.plannthat.com/wp-content/uploads/2017/10/brahmino.png",
        name:"Brendan Tupper",
        place:"Chicago, IL",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      },
      {
        image:"https://davidyarrow.photography/wp-content/uploads/2017/07/Lion-Takes-remote-camera-0x1140-c-default.png",
        name:"Steve McCurry",
        place:"Toronto",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      },
      {
        image:"http://www.storytrender.com/wp-content/uploads/2018/08/1_CATERS_BEST_DESTINATION_WEDDING_PHOTOS_02-1024x663.jpg",
        name:"Warner brothers",
        place:"California",
        show:true,
        bio:"Bio: We take photos as a return ticket to a Moment otherwise gone.We promise attractive candid and random clicks"
      }];
  }
  searchphotographer(event){
    if(this.searchstring ==""){
      for(var index in this.photographer){
        this.photographer[index].show =true;
      }

    }
    else{
      for(var index in this.photographer){
        debugger;
        if(!(this.photographer[index].name.toLowerCase()).includes(this.searchstring.toLowerCase()) && !(this.photographer[index].place.toLowerCase()).includes(this.searchstring.toLowerCase()))
        this.photographer[index].show =false;
      }
    }

  }

}
