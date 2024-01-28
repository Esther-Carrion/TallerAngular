import { Component, OnInit } from '@angular/core';
import { Book, Item } from 'src/app/Interfaces/interface-book';
import { ServiceBooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{

  books:Book[]=[]
  items:Item[]=[]

  constructor(private bookService:ServiceBooksService){}

  ngOnInit(): void {
      this.bookService.getCarrito().subscribe(
        carrito=>{
        this.books=carrito,console.log("lista")}
      )
  }

}
