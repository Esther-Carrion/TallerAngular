import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { applyFilter, setFilter } from 'src/app/Action/filter.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private store: Store) {}

  searchCategory(category: string): void {
    this.store.dispatch(setFilter({ filter: category }));
    this.store.dispatch(applyFilter());
  }

 
}
