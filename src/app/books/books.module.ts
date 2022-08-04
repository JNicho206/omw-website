import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialOMWModule } from '../material.module';



@NgModule({
  declarations: [BooksComponent,
    BooksListComponent,
    BookComponent],
  imports: [
    CommonModule,
    NgbModule,
    MaterialOMWModule,
    // BrowserAnimationsModule,
    RouterModule.forChild([
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      { 
        path: '',
        component: BooksComponent
      },
       { path: 'book/:id', component: BookComponent }
      
    ])
  ]
})
export class BooksModule { }