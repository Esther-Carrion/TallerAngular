import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/carts';
import { Book} from 'src/app/Interfaces/interface-book';
import { ServiceBooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{

  books:Book[]=[]
  itemTotals:number[]=[]
  discount: number = 5.54;
  subtotal: number = 0;
  shipping: number = 0;
  // carts:Cart[]=[]

  constructor(private bookService:ServiceBooksService){}

  ngOnInit(): void {
      this.bookService.getCarrito().subscribe(
        carrito=>{
        this.books=carrito;
        this.calculateItemTotals();
        console.log(carrito+"lista")}
      )

      
  }

  calculateItemTotals() {
  this.itemTotals = this.books.map(item => item.quantity * item.price);
  this.subtotal = this.itemTotals.reduce((acc, total) => acc + total, 0);
  this.bookService.updateSubtotal(this.subtotal);
  }
 

  incrementQuantity(item: Book) {
    item.quantity = (item.quantity || 0) + 1;
  
    this.bookService.updateItem(item).subscribe(
      (response) => {
        console.log('Cantidad de libro actualizada:', response);
        this.calculateItemTotals();
      }
    );

  }

  decrementQuantity(item: Book) {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
    }
  
    this.bookService.updateItem(item).subscribe(
      (response) => {
        console.log('Cantidad de libro actualizada:', response);
        this.calculateItemTotals();
      }
    );
  }


  remove(books:Book):void{
    this.bookService.remove(books.id).subscribe(
      rem => this.bookService.getCarrito().subscribe(
        response=>this.books=response
      )
    )
  }

}
