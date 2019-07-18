import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//import { MessageService } from './message.service';
import { Photographer } from "./photographer"
import { PHOTOGRAPHERS } from "./mock-photographers"

@Injectable({
  providedIn: 'root'
})  
export class PhotographerService {

  constructor() { }

  //returns the entire array of mock photographer users
  getPhotographers(): Observable<Photographer[]> {    
    return of(PHOTOGRAPHERS); 
  }
  //returns a specific photographer
  getPhotographer(id: number): Observable<Photographer> {  
    return of(PHOTOGRAPHERS.find(photographer => photographer.id === id));
  }
}
