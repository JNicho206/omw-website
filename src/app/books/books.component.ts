import { Component, OnInit } from '@angular/core';
import { languagetype } from '../bios/models/biographyprofile';
import { Book } from './model/book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  booklist: Book[];
  fullbooklist: Book[];
  selectedLanguageType: languagetype;
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.selectedLanguageType = languagetype.ENG;
    this.bookservice.getallbooks().subscribe(data => {
      this.fullbooklist = data;
      this.updatedataBylanguage();
    });
  }
  onLanguageChange(value) {
    this.selectedLanguageType = (value == languagetype.ENG)? languagetype.ENG : languagetype.SP;
    this.updatedataBylanguage();
  }
  updatedataBylanguage(){
    this.booklist = this.fullbooklist.filter(x=>x.languagetype == this.selectedLanguageType);
  }
}
