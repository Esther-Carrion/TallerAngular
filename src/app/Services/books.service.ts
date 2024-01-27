import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Interfaces/interface-book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {

  book!:Book;

  private url="api/books"
  private urlAdd="api/cart"

  constructor(private http:HttpClient) { }


  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(this.url)
  }

  addItem(books:Book):Observable<Book>{
    return this.http.post<Book>(this.urlAdd,books)
  }

}
