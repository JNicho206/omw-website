import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  booklist: Book[];
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.bookservice.getallbooks().subscribe(data => {
      this.booklist = data;
    });
  }

}
