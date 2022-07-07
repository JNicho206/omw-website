import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() booklist : Book[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
