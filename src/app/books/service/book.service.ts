import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _jsonURL = './../../assets/data/bookslist.json';
  constructor(private http: HttpClient) { }

  
 public getallbooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this._jsonURL);
}
}
