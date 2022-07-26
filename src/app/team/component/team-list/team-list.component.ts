import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { TeamProfile } from '../../models/teamprofile';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() teamlist: TeamProfile[];
  @Input() teamTypeName: string ="";
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  gotofullteamprofile(teamid:string){
    
    this.router.navigate(['teamprofile', teamid ], { relativeTo: this.route });
  }
  
  gettwitterbyindex( twitterusername:string){
    var link:string ="https://twitter.com/sleiman_milad";
    // link = link+= twitterusername;
    window.open(link, "_blank");
  }
  
  getwebpagebyindex( websiteURL:string){
    websiteURL = "https://facebook.com";
    // var link:string ="";
    // link = this.biosprofile.mathherobulletlinks[index];
    window.open(websiteURL, "_blank");
  }
}
