import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom } from 'rxjs/operators';
import { applyFilter, loadBooksSuccess, setFilter } from '../Action/filter.actions';
import { select, Store } from '@ngrx/store';
import { selectFilter } from '../Selector/filter.selectors';
import { ServiceBooksService } from '../Services/books.service';

@Injectable()
export class FilterEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private bookService: ServiceBooksService
  ) { }
  applyFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applyFilter),
      withLatestFrom(this.store.pipe(select(selectFilter))),
      mergeMap(([_, filter]) =>
        this.bookService.getAll().pipe(
          map((books) => books.filter((book) => book.category.includes(filter)))
        )
      ),
      map((books) => loadBooksSuccess({ books }))
    )
  );


}
