import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BiographyProfile } from '../models/biographyprofile';


@Injectable({
  providedIn: 'root'
})
export class BiosService {

  private _jsonURL = './../../assets/data/bioslist.json';
  constructor(private http: HttpClient) { }

  // getallbios(): Observable<BiographyProfile[]>{
  //   // fetch(_jsonURL).then(res => res.json())
  //   // .then(jsonData => {
  //   //   this.productsArray = jsonData;
  //   // });
  //   fetch(this._jsonURL)
  //   .then(response => response.json())
  //   .then((data: BiographyProfile[]) => {
  //     data.forEach(agency => (agency.steps = mapLoadedSteps(agency.steps)));

  //     this.agencies = data;
  //   });
  //   this.getJSON().subscribe(data => {
  //     return data as as BiographyProfile[];
  //    });
  // }
  
 public getallbios(): Observable<BiographyProfile[]> {
    return this.http.get<BiographyProfile[]>(this._jsonURL);
  }
}
