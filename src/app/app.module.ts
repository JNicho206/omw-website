import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiosComponent } from './bios/bios.component';
import { BooksComponent } from './books/books.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    CoreModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // { path: 'bios', component: BiosComponent },
      {
        path: 'bios',
        loadChildren: () => import('./bios/bios.module').then(m => m.BiosModule)
      },
      { path: 'books', component: BooksComponent },
      { path: 'team', component: TeamComponent }
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    // BiosComponent,
    BooksComponent,
    TeamComponent
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas,far,fab);
  }
}
