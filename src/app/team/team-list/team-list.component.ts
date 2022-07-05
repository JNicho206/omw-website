import { Component, Input, OnInit } from '@angular/core';
import { TeamProfile } from '../models/teamprofile';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() teamlist: TeamProfile[];
  @Input() teamTypeName: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
