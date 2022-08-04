import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BiographyProfile} from '../../models/biographyprofile';

@Component({
  selector: 'app-bios-list',
  templateUrl: './bios-list.component.html',
  styleUrls: ['./bios-list.component.scss']
})
export class BiosListComponent implements OnInit {
  @Input() bioslist : BiographyProfile[] ;
  constructor(private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit(): void {
  }
  gotobiosprofile(biosid){
    this.router.navigate(['biosprofile', biosid ], { relativeTo: this.route });
  }
}
