import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { BodyComponent } from './Body/body/body.component';
import { BooksComponent } from './books/books/books.component';

const routes: Routes = [
  {path:'',component:BooksComponent},
  {path:'shopping',component:ShoppingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
