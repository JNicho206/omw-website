import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faInstagram,faDribbble, } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  globe = faEarthAmericas;
  envelope   = faEnvelope;
  facebook = faFacebook;
  twitter =faTwitter;
  instagram = faInstagram;
  dribble = faDribbble;
  public isNavbarCollapsed = true;
  // collapse = false;
  ngOnInit(): void {
  }
  // toggleCollapse(): void {
  //   this.collapse = !this.collapse;
  // }
}
