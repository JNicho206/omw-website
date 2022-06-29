import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiographyProfile } from '../../models/biographyprofile';
import { BiosService } from '../../service/bios.service';

@Component({
  selector: 'app-bios-profile',
  templateUrl: './bios-profile.component.html',
  styleUrls: ['./bios-profile.component.scss']
})
export class BiosProfileComponent implements OnInit {
  bioid : number; 
  biosprofile : BiographyProfile;
  constructor(private route: ActivatedRoute,
    private biosservice: BiosService) { }

  ngOnInit(): void {
    this.bioid = +this.route.snapshot.paramMap.get('id');

    this.biosservice.getallbios().subscribe(data => {
      this.biosprofile = data.filter(data=>{
        return data.id=this.bioid;
      })[0];
    });

  }
  getlinkfromlistbyindex( index:string){
    var link:string ="";
    link = this.biosprofile.mathherobulletlinks[index];
    window.open(link, "_blank");
  }

  getreferencelinkbyindex( index:string){
    var link:string ="";
    link = this.biosprofile.referenceslinks[index];
    window.open(link, "_blank");
  }
  getjobnamelink(){
    window.open(this.biosprofile.namelink, "_blank");
  }
}
