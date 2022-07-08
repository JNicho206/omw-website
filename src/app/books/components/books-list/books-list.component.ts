import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() booklist : Book[] ;
  constructor(private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit(): void {
  }

  gotobook(bookid){
    this.router.navigate(['book', bookid ], { relativeTo: this.route });
  }
}
