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
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // carrosel configuation
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void{
  }


  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }
}
