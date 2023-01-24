import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { filter, Subject, takeUntil, tap } from 'rxjs';
import { SenseService } from 'src/app/textospeech/service/sense.service';
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

	// settingsOpen = false;
	selectedIndex: number;
	voices: any[];
	activeVoice: any;
	destroy$ = new Subject();
  ispaused: boolean = false;

  speachindex : number[]=[];

  constructor(private route: ActivatedRoute,
    private bookservice: BookService,
    private sense: SenseService,
    config: NgbCarouselConfig) {
          // carrosel configuation
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
    
     }

  ngOnInit(): void {
		this.loadVoices();
    this.stopaudio();
    this.bookid = +this.route.snapshot.paramMap.get('id');

    this.bookservice.getallbooks().subscribe(data => {
      this.book = data.filter(data=>{
        return this.bookid == data.id;
      })[0];
      this.currentbookimage = this.book.pagesimages[0];
      this.speachindex = new Array<number>(this.book.pagestexts.length);// new number[this.book.pagestexts.length];
      for (let i = 0; i < this.book.pagestexts.length; i++) {
        this.speachindex[i] = 0;
      }
      this.ngCarousel.select("1");
    });
  }
  
	// toggleSettings() {
	// 	this.settingsOpen = !this.settingsOpen;
	// }
	loadVoices() {
		this.sense.voices$
			.pipe(
				filter((i) => !!i),
				tap((v) => {
					console.log(v.length, 'voices loaded');
					this.voices = v;
				}),
				takeUntil(this.destroy$)
			)
			.subscribe();

		this.sense.activeVoice$
			.pipe(
				filter((i) => !!i),
				tap((voice) => {
					// this.activeVoice = voice;
					this.selectedIndex = this.voices.indexOf(voice);
					console.log(voice, this.selectedIndex);
					// this.updateVoice();
				}),
				takeUntil(this.destroy$)
			)
			.subscribe();
	}
  
	updateVoice() {
		if (!this.voices) return;
		const voice = this.voices[this.selectedIndex];
		if (!voice) return;

		console.log(voice.name);
		this.sense.onVoiceSelected(voice);
	}
  gettextdata(index: number){
    let texttoread = this.book.pagestexts[index];
    const textlist = texttoread.match(/.{1,250}/g) || [];
    return textlist[this.speachindex[index]];
  }
	onChange(index: number) {
		this.selectedIndex = index;
	}
  playaudio(index: number){
    this.stopaudio();
    let texttoread = this.book.pagestexts[index];
    const textlist = texttoread.match(/.{1,250}/g) || [];
    let texttospeak = textlist[this.speachindex[index]];
		this.sense.speak(texttospeak);
    this.speachindex[index]++;
  }
  stopaudio(){
    this.sense.cancel();
    this.ispaused = false;
  }
  pauseaudio(){
    this.sense.pause();
    this.ispaused = true;
  }
  resumeaudio(){
    this.sense.resume();
    this.ispaused = false;
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

  IsNextSpeaking(index:number):boolean{
    return this.speachindex[index] > 0;
  }
  get IsSpeaking():boolean{
    return this.sense.isSpeaking;
  }
  get IsPaused():boolean{
    return this.ispaused;
  }
}
