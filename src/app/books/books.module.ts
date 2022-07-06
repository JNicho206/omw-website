import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';



@NgModule({
  declarations: [BooksComponent,
    BooksListComponent,
    BookComponent],
  imports: [
    CommonModule,
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