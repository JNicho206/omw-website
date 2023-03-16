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
    var link:string ="https://twitter.com/"+twitterusername;
    // link = link+= twitterusername;
    window.open(link, "_blank");
  }
  
  getwebpagebyindex( websiteURL:string){
    websiteURL = websiteURL;
    // var link:string ="";
    // link = this.biosprofile.mathherobulletlinks[index];
    window.open(websiteURL, "_blank");
  }
  sendemail(email:string, fullname:string){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to="+email+"&su=OMW Member "+fullname+ "&body=Dear "+fullname);
  }
}
