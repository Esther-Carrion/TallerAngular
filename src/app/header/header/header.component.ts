import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { applyFilter, setFilter } from 'src/app/Action/filter.actions';
import { ServiceBooksService } from '../../Services/books.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  numero: number = 0;

  constructor(private store: Store, private bookService: ServiceBooksService) { }


  ngOnInit(): void {
    this.bookService.getnumero().subscribe(
      numero => this.numero = numero
    )
  }

  searchCategory(category: string): void {
    this.bookService.updateCategoryTitle(category || 'All books');
    this.store.dispatch(setFilter({ filter: category }));
    this.store.dispatch(applyFilter());
  }


}
