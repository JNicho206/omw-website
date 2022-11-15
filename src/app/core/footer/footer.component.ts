import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sendemail(email:string, fullname:string){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to="+email+"&su=OMW Member "+fullname+ "&body=Dear "+fullname);
  }
}
