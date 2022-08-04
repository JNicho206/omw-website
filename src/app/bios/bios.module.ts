import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiosListComponent } from './components/bios-list/bios-list.component';
import { BiosProfileComponent } from './components/bios-profile/bios-profile.component';
import { BiosComponent } from './bios.component';
import { RouterModule } from '@angular/router';
import { HtmlDirective } from '../core/directive/html.directive';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MaterialOMWModule } from '../material.module';



@NgModule({
  declarations: [
    BiosComponent,
    BiosListComponent,
    BiosProfileComponent,
    HtmlDirective
  ],
  imports: [
    CommonModule,
    MaterialOMWModule,
    RouterModule.forChild([
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      { 
        path: '',
        component: BiosComponent
      },
      { path: 'biosprofile/:id', component: BiosProfileComponent }
      // { path: 'bios', component: BiosComponent },
      // { path: 'bioslist', component: BiosListComponent },
      
    ])
  ],
  exports: [RouterModule]
})
export class BiosModule { }
