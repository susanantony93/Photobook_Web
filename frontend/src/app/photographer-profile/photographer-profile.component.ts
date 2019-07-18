import { Input, Component, OnInit } from '@angular/core';
import { Photographer } from "../photographer"
import { ActivatedRoute } from '@angular/router';
import { PhotographerService }  from '../photographer.service';

@Component({
  selector: 'app-photographer-profile',
  templateUrl: './photographer-profile.component.html',
  styleUrls: ['./photographer-profile.component.css']
})
export class PhotographerProfileComponent implements OnInit {
  @Input() photographer: Photographer;

  public display = false;
  public imagesPaths = [ '../../../assets/pic.png', '../../../assets/pic.png', '../../../assets/pic.png', '../../../assets/pic.png'];
  constructor(
    private route: ActivatedRoute,
    private photographerService: PhotographerService,
  ) { }

  ngOnInit() {
    this.getPhotographer();
  }

  showDialog(){
    this.display = true;
  }
  onBeforeDialogHide(event){
    console.log("Just before the dialog is closing");
    event.preventDefault();
    return false;

}

  getPhotographer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photographerService.getPhotographer(id)
      .subscribe(photographer => this.photographer = photographer);
  }

}
