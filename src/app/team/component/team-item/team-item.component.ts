import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamProfile } from '../../models/teamprofile';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  teamid: number;
  teamprofile: TeamProfile;
  constructor(private route: ActivatedRoute,
    private teamService: TeamService ){ }

  ngOnInit(): void {
    this.teamid = +this.route.snapshot.paramMap.get('id');
    
    this.teamService.getallteams().subscribe(data => {
      this.teamprofile = data.filter(data=>{
        return data.id==this.teamid;
      })[0];
    });
  }

}
