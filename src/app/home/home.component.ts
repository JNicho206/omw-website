import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  facebook = faFacebook;
  twitter =faTwitter;
  instagram = faInstagram;
  linkedin = faLinkedin;
  // constructor(private modalService: NgbModal) { }
  images: string[] = ["../assets/landingpage/book1cover.jpg",
  "../assets/landingpage/BookDrawing.jpg",
  "../assets/landingpage/studentdesk2.jpg",
  "../assets/landingpage/studentsdesk.jpg"];
  // images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // carrosel configuation
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void{
    // this.images[0]="../assets/landingpage/book1cover.jpg";
    // this.images[1]="../assets/landingpage/BookDrawing.jpg";
    // this.images[2]="../assets/landingpage/studentdesk2.jpg";
    // this.images[3]="../assets/landingpage/studentsdesk.jpg";
  }


  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }
}
