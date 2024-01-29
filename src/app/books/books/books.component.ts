import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { applyFilter, setFilter } from 'src/app/Action/filter.actions';
import { Cart } from 'src/app/Interfaces/carts';
import { Book } from 'src/app/Interfaces/interface-book';
import { selectFilteredBooks } from 'src/app/Selector/filter.selectors';
import { ServiceBooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {



  books: Book[] = [];
  carts: Cart[] = []

  categoryTitle: string = 'All books';

  constructor(private bookService: ServiceBooksService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectFilteredBooks).subscribe((filteredBooks) => {
      this.books = filteredBooks.map(book => ({ ...book, quantity: book.quantity || 0 }));

    });

    this.bookService.getAll().subscribe((libro) => {
      this.store.dispatch(setFilter({ filter: '' }));
      this.store.dispatch(applyFilter());
    });


    this.bookService.categoryTitle$.subscribe((title) => {
      this.categoryTitle = title;
    });
  }

  onFilterClick(category: string): void {
    this.store.dispatch(setFilter({ filter: category }));
    this.store.dispatch(applyFilter());
  }



  agregarCarrito(book: Book): void {
    this.bookService.bookExistsInCart(book).subscribe(
      exists => {
        if (exists) {
          this.incrementQuantity(book);

        } else {
          this.bookService.addItem(book).subscribe(
            response => {
              console.log('Libro agregado al carrito', response);
            }
          );
        }
      }
    );
  }

  incrementQuantity(item: Book) {
    item.quantity = (item.quantity || 0) + 1;

    this.bookService.updateItem(item).subscribe(
      (response) => {
        console.log('Cantidad de libro actualizada:', response);
      }
    );

  }

}










