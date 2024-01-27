import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { applyFilter, setFilter } from 'src/app/Action/filter.actions';
import { Book } from 'src/app/Interfaces/interface-book';
import { selectFilteredBooks } from 'src/app/Selector/filter.selectors';
import { ServiceBooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  //  @Input() author:string=""
  //  @Input() title:string=""
  //  @Input() price:string=""
  //  @Input() description:string=""
  //  @Input() thumbnail:string=""

 
   books:Book[]=[];

   constructor(private bookService:ServiceBooksService, private store:Store){}

   ngOnInit(): void {
     this.store.select(selectFilteredBooks).subscribe((filteredBooks) => {
       this.books = filteredBooks;
     });
   
     this.bookService.getAll().subscribe((libro) => {
       this.store.dispatch(setFilter({ filter: '' })); 
       this.store.dispatch(applyFilter());
     });
   }
   
   onFilterClick(category: string): void {
     this.store.dispatch(setFilter({ filter: category }));
     this.store.dispatch(applyFilter());
   }

 
  

}
