import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamProfile } from '../models/teamprofile';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _jsonURL = './../../assets/data/teamslist.json';
  
  constructor(private http: HttpClient) { }

  public getallteams(): Observable<TeamProfile[]> {
     return this.http.get<TeamProfile[]>(this._jsonURL);
   }
}
