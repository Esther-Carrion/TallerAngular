import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { BooksComponent } from './books/books/books.component';
import { ShoppingListGuard } from './shopping-list.guard';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'shopping', component: ShoppingComponent, canActivate: [ShoppingListGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
