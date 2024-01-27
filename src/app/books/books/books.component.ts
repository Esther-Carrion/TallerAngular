import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/Interfaces/interface-book';
import { ServiceBooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
   @Input() author:string=""
   @Input() title:string=""
   @Input() price:string=""
   @Input() description:string=""
   @Input() thumbnail:string=""

 
   item:Book[]=[];

  constructor(private serviceBooks: ServiceBooksService){}
  ngOnInit(): void {
      
  }

 
  

}
