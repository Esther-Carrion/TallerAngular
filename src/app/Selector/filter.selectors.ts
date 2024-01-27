import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FilterState } from '../Reducer/filter.reducer';

export const selectFilterState = createFeatureSelector<FilterState>('filter');

export const selectFilter = createSelector(
  selectFilterState,
  (state) => state.filter
);

export const selectFilteredBooks = createSelector(
  selectFilterState,
  (state) => state.books
);
