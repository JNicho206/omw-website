import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
  
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  isPrevious: boolean = false;
  isNext: boolean = false;

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
      
    this.ngCarousel.select("1");
    });
  }
  playaudio(index: number){

  }
  previousStep()
  {
      this.isPrevious = true;
      this.ngCarousel.prev();
  }

  nextStep()
  {
      this.isNext = true;
      this.ngCarousel.next();

  }
}
