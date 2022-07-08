import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BookComponent implements OnInit {

  bookid : number; 
  book: Book;
  currentbookimage: string;
  constructor(private route: ActivatedRoute,
    private bookservice: BookService,
    config: NgbCarouselConfig) {
          // carrosel configuation
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
     }

  ngOnInit(): void {
    this.bookid = +this.route.snapshot.paramMap.get('id');

    this.bookservice.getallbooks().subscribe(data => {
      this.book = data.filter(data=>{
        return data.id=this.bookid;
      })[0];
      this.currentbookimage = this.book.pagesimages[0];
    });
  }
  playaudio(index: number){

  }
  
}
