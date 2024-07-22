import { Component, OnInit } from '@angular/core';
import { TeamProfile } from '../models/teamprofile';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  allteamlist: TeamProfile[];
  randdteamlist: TeamProfile[];
  fromerranddteamlist: TeamProfile[];
  dpteamlist: TeamProfile[];
  formerdpteamlist: TeamProfile[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    
    this.teamService.getallteams().subscribe(data => {
      this.allteamlist = data;
      this.buildlists();
    });
  }
  buildlists(){
    this.randdteamlist = this.allteamlist.filter((obj) => {
      return obj.type === 'R&D';
    }).sort(function(a, b) {
      const aLastName = a.fullname.split(' ').pop().toLowerCase();
      const bLastName = b.fullname.split(' ').pop().toLowerCase();
      return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0;
  });
    this.dpteamlist = this.allteamlist.filter((obj) => {
      return obj.type === 'DISTRICTPARTNERS';
    }).sort(function(a, b) {
      const aLastName = a.fullname.split(' ').pop().toLowerCase();
      const bLastName = b.fullname.split(' ').pop().toLowerCase();
      return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0;
    }).sort(function(a, b) {
    const aLastName = a.fullname.split(' ').pop().toLowerCase();
    const bLastName = b.fullname.split(' ').pop().toLowerCase();
    return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0;
    });
    this.fromerranddteamlist = this.allteamlist.filter((obj) => {
      return obj.type === 'FORMERR&D';
    }).sort(function(a, b) {
      const aLastName = a.fullname.split(' ').pop().toLowerCase();
      const bLastName = b.fullname.split(' ').pop().toLowerCase();
      return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0;
    });
    this.formerdpteamlist = this.allteamlist.filter((obj) => {
      return obj.type === 'FORMERDISTRICTPARTNERS';
    }).sort(function(a, b) {
      const aLastName = a.fullname.split(' ').pop().toLowerCase();
      const bLastName = b.fullname.split(' ').pop().toLowerCase();
      return (aLastName < bLastName) ? -1 : (aLastName > bLastName) ? 1 : 0;
    });
  }
}
