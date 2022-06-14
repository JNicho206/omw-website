import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faInstagram,faDribbble } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  facebook = faFacebook;
  twitter =faTwitter;
  instagram = faInstagram;
  dribble = faDribbble;
  ngOnInit(): void {
  }

}
