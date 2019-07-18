import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
;
@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  public httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  post(apiUrl, data) {
    const url = environment.apiUrl + apiUrl;
    return this.http.post(url, data, this.httpOptions);
  }

  getData(apiUrl){
    const url = environment.apiUrl + apiUrl;
    return this.http.get(url, this.httpOptions);
  }
}
