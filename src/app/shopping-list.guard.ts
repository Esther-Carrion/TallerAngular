import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ServiceBooksService } from './Services/books.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListGuard implements CanActivate {

  constructor(private bookService: ServiceBooksService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.bookService.getCarrito().pipe(
      map((carrito) => {

        if (carrito.length === 0) {
          console.log('El carrito de compras está vacío. No se puede acceder a la ruta de compras.');
          alert("No puede ingresar si no ha añadido minimo un producto al carrito ")

          return false;
        }
        return true;
      }),
    );
  }

}
