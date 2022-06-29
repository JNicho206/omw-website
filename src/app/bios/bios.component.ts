import { Component, OnInit } from '@angular/core';
import { BiographyProfile } from './models/biographyprofile';
import { BiosService } from './service/bios.service';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.scss']
})
export class BiosComponent implements OnInit {
  biographylist: BiographyProfile[];
  constructor(private biosservice: BiosService) { }

  ngOnInit(): void {
    this.biosservice.getallbios().subscribe(data => {
      this.biographylist = data;
    });
  }

}
