import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TeamProfile } from '../models/teamprofile';
import { BiographyProfile } from 'src/app/bios/models/biographyprofile';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _jsonURL = './../../assets/data/teamslist.json';
  
  constructor(private http: HttpClient) { }

  public getallteams(): Observable<TeamProfile[]> {
     return this.http.get<TeamProfile[]>(this._jsonURL).pipe(
      map(team => team.sort((a: TeamProfile, b: TeamProfile) => {
        const aLastName = a.fullname.split(' ').pop().toLowerCase();
        const bLastName = b.fullname.split(' ').pop().toLowerCase();
        return aLastName.localeCompare(bLastName);
      }))
    );;
   }
}
