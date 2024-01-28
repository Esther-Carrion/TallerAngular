import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Item } from '../Interfaces/interface-book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {

  book!:Book;
  items!:Item;

  private url="api/books"
  private urlCart="api/cart"

  constructor(private http:HttpClient) { }


  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(this.url)
  }

  getCarrito():Observable<Book[]>{
    return this.http.get<Book[]>(this.urlCart);
  }

  addItem(books:Book):Observable<Book>{
    const { id, ...bookWithoutId } = books;
    return this.http.post<Book>(this.urlCart,bookWithoutId)
  }

}
