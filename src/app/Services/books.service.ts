import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Interfaces/interface-book';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart } from '../Interfaces/carts';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {

  book!: Book;

  private url = "api/books"
  private urlCart = "api/cart"
  private urlCarrito = "api/cart/count"

  constructor(private http: HttpClient) { }


  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
  }

  getCarrito(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlCart);
  }

  getnumero(): Observable<number> {
    return this.http.get<number>(this.urlCarrito);

  }

  addItem(books: Book): Observable<Book> {
    const { id, ...bookWithoutId } = books;
    return this.http.post<Book>(this.urlCart, bookWithoutId)
  }

  updateItem(item: Book): Observable<Book> {
    const { id, ...bookWithoutId } = item;
    return this.http.put<Book>(`${this.urlCart}/${item.id}`, bookWithoutId);
  }


  remove(id: number): Observable<Book> {
    return this.http.delete<Book>(this.urlCart + '/' + id)
  }


  bookExistsInCart(book: Book): Observable<boolean> {
    return this.getCarrito().pipe(
      map((booksInCart: Book[]) => booksInCart.some(item => item.title === book.title))
    );
  }

  ///////////////
  private _subtotalSource = new BehaviorSubject<number>(0);
  subtotal$ = this._subtotalSource.asObservable();

  updateSubtotal(subtotal: number) {
    this._subtotalSource.next(subtotal);
  }

  private _categoryTitles = new BehaviorSubject<string>('All books');
  categoryTitle$ = this._categoryTitles.asObservable();

  updateCategoryTitle(title: string) {
    this._categoryTitles.next(title);
  }

}
