import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './component/team.component';
import { TeamItemComponent } from './team-item/team-item.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TeamComponent,
    TeamItemComponent,
    TeamListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: '', component: TeamComponent }
    ]),
  ]
})
export class TeamModule { }
